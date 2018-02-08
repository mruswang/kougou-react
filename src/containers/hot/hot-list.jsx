import React, { Component } from 'react';
import SongList from '../../components/songlist/song-list'
import WrappedComponent from '../../hoc/index'
import $http from '../../axios'
import {Icon} from 'antd'
import './hot-list.css'

class RankList extends Component {
	constructor(props){
    super(props);
    this.state = {
      info:{},
      songList: []
    }
  }
  componentDidMount(){
    $http.get('/proxy/plist/list/?json=true',{
      params:{
        specialid:this.props.match.params.id,
        page:1
      }
    }).then(res => {
      console.log(res)
      this.setState({
        info : res.data.info.list,
        songList: res.data.list.list.info
      })
    })
  }
  back(){
    window.history.back()
  }
  render() {
    let imgurl = this.state.info.imgurl
    if(imgurl){
      imgurl = imgurl.replace('{size}', '400')
    }
    return (
      <div className="hot-list">
        <div className="top">
          <Icon type="left" onClick={this.back}/>
          <span>{this.state.info.specialname}</span>
        </div>
        <div className="bg">
          <img src={imgurl} alt={this.state.info.rankname} />
        </div>
        <SongList songList={this.state.songList}></SongList>
      </div>
      
    );
  }
}

RankList = WrappedComponent(RankList);
export default RankList