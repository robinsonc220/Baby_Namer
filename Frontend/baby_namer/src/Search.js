import React from 'react'
import { Input, Menu, Dropdown, Checkbox, MenuItem, Divider } from 'semantic-ui-react'

export default class Search extends React.Component{
    
    state = {
       male: false,
       female: false
    }

    ethicities = [
        
        {
            key: 'ASIAN & PACIFIC ISLANDER',
            text: 'ASIAN & PACIFIC ISLANDER',
            value: 'ASIAN & PACIFIC ISLANDER',
         },
         {
            key: 'BLACK NON HISPANIC',
            text: 'BLACK NON HISPANIC',
            value: 'BLACK NON HISPANIC',
          },
          {
            key: 'WHITE NON HISPANIC',
            text: 'WHITE NON HISPANIC',
            value: 'WHITE NON HISPANIC',
          },
          {
            key: 'HISPANIC',
            text: 'HISPANIC',
            value: 'HISPANIC',
          }
    ]

    handleMaleCheckbox = () =>{

        this.setState({male: !this.state.male})
    }

    handleFemaleCheckbox = () =>{

        this.setState({female: !this.state.female})
    }
    
    render() {

        return (
            
            <div>
                <Menu secondary borderless fluid widths={4}> 
                    <MenuItem>
                        <Input size='large' icon='search' placeholder='Names that start with...' value={this.props.searchTerm} onChange={this.props.handleOnChange} /> 
                    </MenuItem>
                    <MenuItem>
                        <Checkbox label='Male' onClick={ this.handleMaleCheckbox }/>
                        <Checkbox label='Female'onClick={ this.handleFemaleCheckbox }/>
                    </MenuItem>
                    <MenuItem>
                        <Dropdown placeholder='Ethnicitiy' fluid multiple selection options={this.ethicities} />
                    </MenuItem>
                    <MenuItem>
                        <Dropdown text='Sort' icon='sort' floating labeled button className='icon'>
                            <Dropdown.Menu>
                                <Dropdown.Header icon='sort' content='Sort by' />
                                <Dropdown.Item>A-Z</Dropdown.Item>
                                <Dropdown.Item>Popularity</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown> 
                    </MenuItem>          
                </Menu>
            </div>
        )
    }
} 
 

