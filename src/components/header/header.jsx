import React, { Component } from 'react';
import './header.css'

class Header extends Component {
  render() {
    return (
      <div className="header">
      	<img className="logo" alt="logo" src={require("./logo.png")} />
      </div>
    );
  }
}

export default Header;
