import React from 'react'
import {Card, Button} from 'semantic-ui-react'

export default class Name extends React.Component {

    render() {
// console.log(this.props.name);
        return (
            <Card color='blue'>
                <Card.Content>
                    <Card.Header>{this.props.name.first_name}</Card.Header>
                    <Button>Fav</Button>
                </Card.Content>
            </Card>
        )
    }
}