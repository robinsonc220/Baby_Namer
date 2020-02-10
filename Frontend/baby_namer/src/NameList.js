import React from 'react'
import Name from './Name'

export default class NameList extends React.Component {

    renderNames = () => { return this.props.allNames.map(name => {
        return <li className={name}><Name key={name.id} name={name}/></li>
        // console.log(name.id)
    })

    }

    render() {

        return (
            <ul>
                {this.renderNames()}
            </ul>

        )
    }
}