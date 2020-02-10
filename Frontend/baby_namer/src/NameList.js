import React from 'react'
import Name from './Name'
import {Card} from 'semantic-ui-react'

export default class NameList extends React.Component {

    renderNames = () => { return this.props.allNames.map(name => {
        return <Name key={Object.id} name={name}/>
        // console.log(name.id)
    })

    }

    render() {

        return (
            <Card.Group itemsPerRow={8}>
                {this.renderNames()}
            </Card.Group>
        

        )
    }
}