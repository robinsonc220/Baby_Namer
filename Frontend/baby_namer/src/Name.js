import React from 'react'
import {Card, Button} from 'semantic-ui-react'

export default class Name extends React.Component {
    
    
    handleFavClick=(e) => {
        // console.log(e.target)
        this.props.handleFavorites(this.props.name,this.props.user)
    }

    render() {
// console.log(this.props.name);
        return (
            <Card color='blue'>
                <Card.Content>
                    <Card.Header>{this.props.name.first_name}</Card.Header>
                    <Button onClick={this.handleFavClick} >Fav</Button>
                </Card.Content>
            </Card>
        )
    }
}