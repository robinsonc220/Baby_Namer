import React from 'react'
import NameList from './NameList'
import Search from './Search'

export default class NameContainer extends React.Component {


    render() {

        return (
            <div>
            <Search/>
            <NameList handleFavorites={this.props.handleFavorites} user={this.props.user} allNames={this.props.allNames}/>
            </div>
        )
    }
}