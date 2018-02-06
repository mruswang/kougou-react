import React, { Component } from 'react';
import {Icon} from 'antd'
import './player.css'
import WrappedComponent from '../../hoc/index'

class Player extends Component {
  render() {
    return (
      <div className={this.props.smallScreen ? 'show player': 'hide player'}>
        <audio src={this.props.singer.playUrl} id="audioPlayer" onEnded={this.props.nextSong}  autoPlay className="audioPlayer"></audio>
        <div className="p-left">
          <img width="80" onClick={this.props.toDtails.bind(this,true)} src={this.props.singer.imgurl} alt=""/>
          <div>
            <span className="name">{this.props.singer.songName}</span>
            <span className="author">{this.props.singer.authorName}</span>
          </div>
        </div>
        <div className="p-right">
          <Icon type="step-backward" onClick={this.props.prevSong}/>
          <Icon type={this.props.playing ? "pause" : "caret-right" }   onClick={this.props.playState} />
          <Icon type="step-forward" onClick={this.props.nextSong} />
        </div>
      </div>
    );
  }
}

Player = WrappedComponent(Player);
export default Player

