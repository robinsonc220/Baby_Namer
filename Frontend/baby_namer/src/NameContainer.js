import React from 'react'
import NameList from './NameList'
import Search from './Search'
import {Grid} from 'semantic-ui-react'
import Name from './Name'
import Instructions from './Instructions'

export default class NameContainer extends React.Component {

    state = {
        searchTerm: ""
        // sortValue: "A-Z"

    }

    renderContent = () => {
        if (this.state.searchTerm) {
          return <NameList allNames={this.props.allNames} handleFilter={this.handleFilter} renderNames={this.renderNames}/>
        } else {
          return <Instructions />;
        }
      }
      
    handleOnChange = (evt) => {
        this.setState({searchTerm: evt.target.value})
    }

    handleFilter = () => {
        const searchResult = this.props.allNames.filter(name => 
          name.first_name.toLowerCase().startsWith(this.state.searchTerm.toLowerCase())
          )
          return searchResult
    }

    renderNames = () => { return this.handleFilter().map(nameObj => {
        return <Grid.Column><Name key={nameObj.id} name={nameObj}/></Grid.Column>
        // console.log(name.id)
        })

    }

    render() {

        return (
            <div>
                <Search handleOnChange={this.handleOnChange}/>
               {this.renderContent()} 
            </div>
        )
    }
}