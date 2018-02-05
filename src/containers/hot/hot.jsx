import React, { Component } from 'react';
import { List,Icon } from 'antd';
import $http from '../../axios'
import './hot.css'
let that;
const Item = List.Item;
class Hot extends Component {
	constructor(){
    super();
    that = this;
    this.state = {
      HotList:[]
    }
    $http.get('/proxy/plist/index&json=true').then(res => {
      console.log(res)
      that.setState({
        HotList : res.data.plist.list.info
      })
    })
  }
  render() {
  	let HotList = this.state.HotList.map((item,index) => (
      <Item className="list-item" key={index}>
        <div className="list-item-left">
          <img width='80' src={item.imgurl.replace('{size}', '400')} alt={item.specialname} />
          <div className="desc">
	          <span className="">{item.specialname}</span>
	          <span className=""><img src={require('./icon_music.png')} alt="收听图标"/>{item.playcount}</span>
          </div>
        </div>
        <Icon type="right" />
      </Item>
    ))
    return (
      <List className="hot">
        {HotList}
      </List>
    );
  }
}

export default Hot;
