import React from 'react';
import './App.css';
import Header from './Header'
import NameContainer from './NameContainer'


export default class App extends React.Component {

  state = {
    allNames: [{ id: 1, name: "Bob"},{ id: 2, name: "Jack"},{ id: 3, name: "Jill"},{ id: 4, name: "Job"},{ id: 5, name: "Back"},{ id: 6, name: "Bill"},{ id: 7, name: "Kobe"}]
  }

  // componentDidMount() {
  // fetch('localhost:3000/babynames')
  // .then(res => res.json())
  // .then(data => this.setState({allNames: data}));
  // }

  render() {

    return (
      <div>
        <Header/>
        <NameContainer allNames={this.state.allNames}/>
      </div>


    )
  }
}
