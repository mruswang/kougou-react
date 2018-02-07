import React, { Component } from 'react';
import {Icon,Slider} from 'antd'
import WrappedComponent from '../../hoc/index'
import './playDetails.css'

class PlayerDetails extends Component {
  songLrc(){
    if (this.props.singer.lyrics) {
      var temp = this.props.singer.lyrics.split('\r\n');
      temp = temp.splice(0, temp.length - 1);
      temp = temp.map((value)=> {
        var time = value.substr(1, 5);
        var seconds = parseInt(time.split(':')[0],10) * 60 + parseInt(time.split(':')[1],10);
        var lrcContent = value.substr(10);
        return {
          seconds,
          lrcContent
        }
      });
      return temp;
    }
  }
  // 时间转换秒数
  formatTime = (timeTemp) => {
      let m = Math.floor(timeTemp / 60);
      let s = Math.floor(timeTemp % 60);
      return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s : s);
  };
  render() {
    const songLyrics = this.songLrc();
    const currentLength = this.props.singer.currentLength;
    const currentTime = this.formatTime(currentLength);
    const duration = this.formatTime(this.props.singer.songLength)
    //歌词列表
    const SongList =  songLyrics && songLyrics.map((item,index) => (
      <p className={item.seconds >= currentLength ? 'isCurrentLrc' : ''} key={index}>
        {item.lrcContent}
      </p>
    ))
    const offset = songLyrics && (songLyrics.length - document.querySelectorAll('.isCurrentLrc').length - 2) * (-22)
    return (
      <div className={this.props.fullScreen ? 'show player-details': 'hide player-details'}>
        <div className="detail-content">
          <div className="top">
            <Icon type="left" onClick={this.props.back}/>
            <span>{this.props.singer.songName}</span>
          </div>
          <div className="singerImg">
            <img style={{'animation':this.props.playing ? 'mymove 5s linear infinite' : 'stop'}} src={this.props.singer.imgurl} alt="singerImg"/>
          </div>
          <div className="lyrics">
            <div style={{marginTop: offset + 'px'}}>
               {SongList}
            </div>
          </div>
          <div className="slider-wrap">
            <div className="current-time">{currentTime}</div>
            <div className="slider">
              <Slider
                max={Math.floor(this.props.singer.songLength) ? Math.floor(this.props.singer.songLength) : 0 }
                min={0}
                style={{ marginLeft: 16, marginRight: 16 }}
                defaultValue={0}
                value={this.props.singer.currentLength}
                tipFormatter={null}
                handleStyle={{
                    borderColor:'#ccc',
                    height:'14px',
                    width:'14px',
                    marginLeft:'-7px',
                    marginTop:'-5.5px',
                    backgroundColor:'#ccc'
                }}
                onChange={this.props.change.bind(this,true)}
              />
            </div>
            <div className="duration">{duration}</div>
          </div>
          <div className="p-right">
            <Icon type="step-backward" onClick={this.props.prevSong}/>
            <Icon type={this.props.playing ? "pause" : "caret-right" }   onClick={this.props.playState} />
            <Icon type="step-forward" onClick={this.props.nextSong} />
          </div>
        </div>
      </div>
    );
  }
}

PlayerDetails = WrappedComponent(PlayerDetails);
export default PlayerDetails

