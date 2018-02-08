import React, { Component } from 'react';
import SongList from '../../components/songlist/song-list'
import WrappedComponent from '../../hoc/index'
import $http from '../../axios'
import {Icon} from 'antd'

class RankList extends Component {
	constructor(props){
    super(props);
    this.state = {
      info:{},
      songList: []
    }
  }
  componentDidMount(){
    $http.get('/proxy/singer/info/?json=true',{
      params:{
        singerid:this.props.match.params.id,
        page:1
      }
    }).then(res => {
      console.log(res)
      this.setState({
        info : res.data.info,
        songList: res.data.songs.list
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
      <div className="rank-list">
        <div className="top">
          <Icon type="left" onClick={this.back}/>
          <span>{this.state.info.singername}</span>
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