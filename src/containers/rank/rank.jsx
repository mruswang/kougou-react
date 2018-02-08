import React, { Component } from 'react';
import { List,Icon } from 'antd';
import $http from '../../axios'
import './rank.css'
import WrappedComponent from '../../hoc/index'
import Tab from '../../components/tab/tab'
import {Link} from 'react-router-dom'

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
      <Link to={'/rank-list/' + item.rankid } key={index}>
        <Item className="list-item">
          <div className="list-item-left">
            <img width='80' src={item.imgurl.replace('{size}', '400')} alt={item.rankname} />
            <span className="rankname">{item.rankname}</span>
          </div>
          <Icon type="right" />
        </Item>
      </Link>
    ))
    return (
      <div>
        <Tab></Tab>
        <List className={this.props.smallScreen ? 'rank mbh': 'rank mbn'}>
          {rankList}
        </List>
      </div>
      
    );
  }
}

Rank = WrappedComponent(Rank);
export default Rank