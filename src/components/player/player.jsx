import React, { Component } from 'react';
import {Icon} from 'antd'
import './player.css'
import { connect } from 'react-redux'

class Player extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className={this.props.show ? 'show player': 'hide player'}>
        <div className="p-left">
          <img width="80" src="http://singerimg.kugou.com/uploadpic/softhead/200/20171115/20171115185314769.jpg" alt=""/>
          <div>
            <span className="name">在无风的时光遇见你</span>
            <span className="author">五音Jw</span>
          </div>
        </div>
        <div className="p-right">
          <Icon type="step-backward" />
          <Icon type="pause" />
          <Icon type="step-forward" />
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    show: state.tab_player.player.show
  }
}
function mapDispathToProps(dispath) {
  return {}
}
export default connect(
    mapStateToProps,
    mapDispathToProps
)(Player)
