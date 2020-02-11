import React from 'react';
import './App.css';
import Header from './Header'
import NameContainer from './NameContainer'


export default class App extends React.Component {

  state = {
    allNames: []
  }

  componentDidMount() {
  fetch('http://localhost:3000/babynames')
  .then(res => res.json())
  .then(data => this.setState({allNames: data}));
  }
  
 
  render() {

    return (
      <div>
        <Header/>
        <NameContainer allNames={this.state.allNames}/>
      </div>


    )
  }
}
