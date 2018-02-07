import React, { Component } from 'react';
import { Carousel,List,Icon } from 'antd';
import './new.css'
import $http from '../../axios'
import WrappedComponent from '../../hoc/index'
import Tab from '../../components/tab/tab'

let that;
const Item = List.Item;
class New extends Component {
  constructor(props){
    super(props);
    that = this;
    this.state = {
      bannerList:[],
      songList: []
    }
    $http.get('/proxy/?json=true').then(res => {
      that.setState({
        bannerList : res.data.banner,
        songList: res.data.data
      })
    })
  }
  render() {
    let carousel = this.state.bannerList.map((item,index) => (
      <img
          src={item.imgurl}
          alt=""
          key={index}
          style={{ width: '100%', verticalAlign: 'top' }}
      />
    )) 
    let songList = this.state.songList.map((item,index) => (
      <Item onClick={this.props.play.bind(this,this.state.songList,item.hash,index)} className="list-item" key={index}>
        <div className="list-item-left">
          <h4>{item.remark}</h4>
          <span>{item.filename}</span>
        </div>
        <Icon type="right" />
      </Item>
    ))
    return (
      <div className="new">
        <Tab></Tab>
        <Carousel autoplay>
          {carousel}
        </Carousel>
        <List className={this.props.smallScreen ? 'mbh': 'mbn'}>
          {songList}
        </List>
      </div>
    );
  }
}

New = WrappedComponent(New);
export default New
