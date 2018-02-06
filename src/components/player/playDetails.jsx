import React, { Component } from 'react';
import {Icon} from 'antd'
import WrappedComponent from '../../hoc/index'
import './playDetails.css'

class PlayerDetails extends Component {
  render() {
    return (
      <div className="player-details">
        <div>
          <Icon type="left" />
          <span>名字</span>
        </div>
        
      </div>
    );
  }
}

PlayerDetails = WrappedComponent(PlayerDetails);
export default PlayerDetails

