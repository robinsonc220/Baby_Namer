import React from 'react'
import NameList from './NameList'
import Search from './Search'
import {Grid} from 'semantic-ui-react'
import Name from './Name'
import Instructions from './Instructions'

export default class NameContainer extends React.Component {

    state = {
        searchTerm: "",
        sortValue: "Popularity",
        male: false,
        female: false
    }

    renderContent = () => {
        if (this.state.searchTerm) {
          return <NameList allNames={this.props.allNames} handleFilter={this.handleFilter} handleFavorites={this.props.handleFavorites} user={this.props.user} renderNames={this.renderNames}/>
        } else {
          return <Instructions />;
        }
      }

    handleSort = (newSortValue) => {
        this.setState({
            sortValue: newSortValue
        })
    }


    handleMaleCheckbox = () =>{

        this.setState({male: !this.state.male})
    }

    handleFemaleCheckbox = () =>{

        this.setState({female: !this.state.female})
    }
      

    sortNames = () => {
        let {sortValue} = this.state

        
        if(sortValue === "A-Z"){    
            let newArr = [...this.props.allNames].sort((nameA, nameB) => {
            //   console.log(nameA.first_name.localeCompare(nameB.first_name))
            return nameA.first_name.localeCompare(nameB.first_name)
            }
            )
            return newArr
        } else {
            return [...this.props.allNames]
        }
      }

  
    handleOnChange = (evt) => {
        this.setState({searchTerm: evt.target.value})
    }

    handleFilter = (sortedNames) => {
        let {male} = this.state
        let {female} = this.state

        const searchResult = sortedNames.filter(name => 
          name.first_name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
          )
        if (male){
            return searchResult.filter(name => name.gender==="MALE")
        } else if (female){
            return searchResult.filter(name => name.gender==="FEMALE")
        } else {
          return searchResult
        }
    }

    renderNames = () => { return this.handleFilter(this.sortNames()).map(nameObj => {
        return <Grid.Column> <Name key={nameObj.id} name={nameObj} user={this.props.user} handleFavorites={this.props.handleFavorites}/> </Grid.Column>
        // console.log(name.id)
        })
    }

    render() {
console.log(this.state.male, this.state.female);
        return (
            <div>

                <Search handleSort={this.handleSort} handleOnChange={this.handleOnChange} handleFemaleCheckbox={this.handleFemaleCheckbox} handleMaleCheckbox={this.handleMaleCheckbox}/>
               {this.renderContent()} 

            </div>
        )
    }
}