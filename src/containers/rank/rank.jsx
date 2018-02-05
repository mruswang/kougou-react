import React, { Component } from 'react';
import { List,Icon } from 'antd';
import $http from '../../axios'
import './rank.css'
let that;
const Item = List.Item;
class Rank extends Component {
	constructor(){
    super();
    that = this;
    this.state = {
      rankList:[]
    }
    $http.get('/proxy/rank/list&json=true').then(res => {
      console.log(res)
      that.setState({
        rankList : res.data.rank.list
      })
    })
  }
  render() {
  	let rankList = this.state.rankList.map((item,index) => (
      <Item className="list-item" key={index}>
        <div className="list-item-left">
          <img width='80' src={item.imgurl.replace('{size}', '400')} alt={item.rankname} />
          <span className="rankname">{item.rankname}</span>
        </div>
        <Icon type="right" />
      </Item>
    ))
    return (
      <List className="rank">
        {rankList}
      </List>
    );
  }
}

export default Rank;
