import React from 'react';

import {Switch, Route, withRouter} from 'react-router';
import {BrowserRouter as Router,Link,} from 'react-router-dom';
import NavBar from './NavBar';
import Form from './Form'
// import Header from './Header';
import NameContainer from './NameContainer';
import './App.css';


class App extends React.Component {

  state = {
    allNames: [],
    sessionUser:null,
    user:{}
  }

  componentDidMount() {
  fetch('http://localhost:3000/babynames')
  .then(res => res.json())
  .then(data => this.setState({allNames: data}));
  }



  handleLoginSubmit = (userInfo) => {
    console.log("Login form has been submitted")
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(
        userInfo
      )
    })
    .then(r => r.json())
    .then(data => {
      // console.log(data);
      if (!data.error) {
        localStorage.setItem("token", data.token)
        this.setState({
          user: data.user,
          sessionUser: data.token
        },()=>{this.props.history.push("/")})
      }
    })
  }


  handleRegisterSubmit = (userInfo) => {
      fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
          "content-type": "application/json"
        },
        body: JSON.stringify(
          userInfo
        )
      })
      .then(r => r.json())
      .then(data => {
        if (!data.error) {
          localStorage.setItem("token", data.token)
          this.setState({
            user: data.user,
            sessionUser: data.token
          }, () => {
            this.props.history.push("/")
          })
        }
      })
  }

  renderForm = (routerProps) => {
    if(routerProps.location.pathname === "/login"){
      // console.log(routerProps)
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } 
    else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  handleFavorites=(nameObj,user) => {
    // console.log(nameObj,user)
    fetch('http://localhost:3000/favorites',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        babyname_id:nameObj.id,
        user_id:user.id
      })
    })
    .then(res=>res.json())
    .then(pojo=>console.log(pojo))

  }

  renderNameContainer = (routerProps) => {
    return <NameContainer handleFavorites={this.handleFavorites} user={this.state.user} allNames={this.state.allNames} />
  }

  render() {

    console.log(this.state.user, "APP STATE")
    console.log(this.props)
    return (
      <Router>
        <div className="App">
          <NavBar/>
        
          {/* <Header/> */}
            <Route path="/register" render={ this.renderForm } />
            <Route path="/login" render={ this.renderForm } />
            <Route path="/" render={this.renderNameContainer} />
        
        </div>
      </Router>


    )
  }
}
export default withRouter(App);