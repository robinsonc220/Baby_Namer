import React from 'react'
import { Image, Button, Modal, Icon} from 'semantic-ui-react'

export default class Name extends React.Component {
    
    
    handleFavClick=(e) => {
        // console.log(e.target)
        this.props.handleFavorites(this.props.name,this.props.user)
    }

    state = { 
        open: false
     }
    
    show = (dimmer) => () => this.setState({ dimmer, open: true })
    close = () => this.setState({ open: false })
      
        
        
    render() {
    
    const { open, dimmer } = this.state


        return (

            <div>
                <Button className="babynames" color={this.props.name.gender === "MALE" ? 'blue' : 'pink'} onClick={this.show('blurring')}>
                    {this.props.name.first_name}
                </Button>
                <Modal dimmer={dimmer} open={open} onClose={this.close}>
                    <Modal.Header><h1>{this.props.name.first_name}</h1></Modal.Header>
                        <Modal.Content image>
                            <Image
                            wrapped
                            size='medium'
                            src={'https://i.pinimg.com/originals/59/57/75/595775041933aeb57cee83e4934d006b.png'}
                            />
                            <Modal.Description>
                                <h3>Gender: {this.props.name.gender}</h3>
                                {/* <h3>Ethnicity: {this.props.name.ethnicity}</h3> */}
                                <h3>Popularity Ranking: {this.props.name.rank}</h3>
                                <h4>In 2016 <u>{this.props.name.count}</u> parents chose this name</h4>

                            </Modal.Description>
                        </Modal.Content>
                        <Modal.Actions>
                            <Button color='black' onClick={this.close}>
                            Close
                            </Button>
                            <Button color='red' icon onClick={this.handleFavClick}>
                                <Icon name='heart' />
                            </Button>
 
                        </Modal.Actions>
                </Modal>
            </div>

        )
    }
}