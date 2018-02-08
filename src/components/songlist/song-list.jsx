import React, { Component } from 'react';
import { List,Icon } from 'antd';
import WrappedComponent from '../../hoc/index'
import './song-list.css'

const Item = List.Item;
class SongList extends Component {
  constructor(props){
    super(props); 
    console.log(this.props)  
  }
  render() {
    let songList = this.props.songList && this.props.songList.map((item,index) => (
      <Item onClick={this.props.play.bind(this,this.props.songList,item.hash,index)} className="list-item" key={index}>
        <div className="list-item-left">
          <h4>{item.remark}</h4>
          <span>{item.filename}</span>
        </div>
        <Icon type="right" />
      </Item>
    ))
    return (
      <div className="song-list">
        <List className={this.props.smallScreen ? 'mbh': 'mbn'}>
          {songList}
        </List>
      </div>
    );
  }
}

SongList = WrappedComponent(SongList);
export default SongList
