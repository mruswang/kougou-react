import React, { Component } from 'react';
import { List,Icon } from 'antd';
import $http from '../../axios'
import './hot.css'
import WrappedComponent from '../../hoc/index'
import Tab from '../../components/tab/tab'
import { Link } from 'react-router-dom'

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
      <Link to={'/hot-list/' + item.specialid} key={index}>
        <Item className="list-item">
          <div className="list-item-left">
            <img width='80' src={item.imgurl.replace('{size}', '400')} alt={item.specialname} />
            <div className="desc">
  	          <span className="">{item.specialname}</span>
  	          <span className=""><img src={require('./icon_music.png')} alt="收听图标"/>{item.playcount}</span>
            </div>
          </div>
          <Icon type="right" />
        </Item>
      </Link>
    ))
    return (
      <div>
        <Tab></Tab>
        <List className={this.props.smallScreen ? 'hot mbh': 'hot mbn'}>
          {HotList}
        </List>
      </div>
    );
  }
}

Hot = WrappedComponent(Hot);
export default Hot
