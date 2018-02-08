import React, { Component } from 'react';
import './header.css'
import {Icon} from 'antd'
import {Link} from 'react-router-dom'

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<img className="logo" alt="logo" src={require("./logo.png")} />
      	<Link to={'/search'} ><Icon type="search" /></Link>
      </div>
    );
  }
}

export default Header;
