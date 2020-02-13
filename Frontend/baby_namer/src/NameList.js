import React from 'react'
// import Name from './Name'
import {Grid} from 'semantic-ui-react'

export default class NameList extends React.Component {

    render() {

        return (
            <center>
                <Grid relaxed columns={10}>
                    {this.props.renderNames()}
                </Grid>
            </center>

        )
    }
}