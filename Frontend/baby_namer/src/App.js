import React from 'react';

import { Route, withRouter} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './NavBar';
import Form from './Form';
// import Favorites from './Favorites';
// import Header from './Header';
import NameContainer from './NameContainer';
import './App.css';
import Favorites from './Favorites';


class App extends React.Component {

  state = {
    allNames: [],
    sessionUser:null,
    user:{},
    myFavorites:{}
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

  // handleSearchByGenderEthnicity=(gender,ethnicity,limit) => {
  //   fetch(`http://localhost:3000/babynames/search_by/${gender}/${ethnicity}/${limit}`)
  //   .then(res=>res.json())
  //   .then(pojos=>console.log(pojos))
  // }


  // handleSearchByName=(name) => {
  //   fetch(`http://localhost:3000/babynames/search/${name}`)
  //   .then(res=>res.json())
  //   .then(pojos=>console.log(pojos))
  // }

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
      return <Form formName="Login Form" handleSubmit={this.handleLoginSubmit}/>
    } 
    else if (routerProps.location.pathname === "/register") {
      return <Form formName="Register Form" handleSubmit={this.handleRegisterSubmit}/>
    }
  }


  handleFavorites=(nameObj, user) => {
    // console.log(nameObj,user)
    fetch('http://localhost:3000/favorites',{
      method: "POST",
      headers: {'Content-Type':'application/json'},
      body:JSON.stringify({
        babyname_id: nameObj.id,
        user_id: user.id
      })
    })
    .then(res=>res.json())
    .then(pojo=>this.setState({
      myFavorites:pojo
    }))
  }

  renderNameContainer = (routerProps) => {
    return <NameContainer handleFavorites={this.handleFavorites} user={this.state.user} allNames={this.state.allNames} />
  }

  render() {

    // console.log(this.state.user, "APP STATE")
    // console.log(this.props)
    return (
      <Router>
        <div className="App">
          <NavBar user={this.state.user}/>
        
          {/* <Header/> */}

            <Route path="/register" exact render={ this.renderForm } />
            <Route path="/login" exact render={ this.renderForm } />
            <Route path="/favorites" exact render={(props) => <Favorites {...props} user={this.state.user}/>} />
            <Route path="/" exact render={this.renderNameContainer} />
            
        
        </div>
      </Router>


    )
  }
}
export default withRouter(App);