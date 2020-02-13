import React from 'react';
import {NavLink} from 'react-router-dom';
import babynamerlogo from './babynamerlogo.png'
import {Divider, Image, Menu, MenuItem} from 'semantic-ui-react'


const NavBar = () => {
  return(
    <>
      <center>
        <Menu borderless secondary className="nav" >
          <Menu.Menu position='right'>
            <Image src={babynamerlogo} alt='babynamerlogo' size='large' /> 
          </Menu.Menu>
          <Menu.Menu position='right'>
            <MenuItem>
              <NavLink to="/">Home</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/login">Login</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/register">Register</NavLink>
            </MenuItem>
            <MenuItem>
              <NavLink to="/favorites">Names</NavLink>
            </MenuItem>
          </Menu.Menu>
        </Menu>
        <Divider hidden/>
      </center>
    </>
  )
};

export default NavBar;