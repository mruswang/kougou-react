import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './tab.css'
class Tab extends Component {
  render() {
    return (
      <div> 
        <ul className="tab">
          <li><Link to="/">新歌</Link></li>
          <li><Link to="/rank">排行</Link></li>
          <li><Link to="/hot">热歌</Link></li>
          <li><Link to="/singer">歌手</Link></li>
        </ul>
      </div>
    );
  }
}

export default Tab;
