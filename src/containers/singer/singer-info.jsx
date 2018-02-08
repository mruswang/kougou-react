import React, { Component } from 'react';
import WrappedComponent from '../../hoc/index'
import $http from '../../axios'
import {Icon,List} from 'antd'
import './singer-info.css'
import {Link} from 'react-router-dom'


const Item = List.Item;
class RankList extends Component {
	constructor(props){
    super(props);
    this.state = {
      info:'',
      singerList: []
    }
  }
  componentDidMount(){
    $http.get('/proxy/singer/list/?json=true',{
      params:{
        classid:this.props.match.params.id,
        page:1
      }
    }).then(res => {
      console.log(res)
      this.setState({
        info : res.data.classname,
        singerList: res.data.singers.list.info
      })
    })
  }
  back(){
    window.history.back()
  }
  render() {
    let singerList = this.state.singerList && this.state.singerList.map((item,index) => (
      <Link to={'/singer-list/' + item.singerid } key={index}>
        <Item className="list-item" >
          <div className="list-item-left">
            <img width="80" src={item.imgurl.replace('{size}', '400')} alt={item.singername}/>
            <span>{item.singername}</span>
          </div>
          <Icon type="right" />
        </Item>
      </Link>
    ))
    return (
      <div className="singer-list">
        <div className="top">
          <Icon type="left" onClick={this.back}/>
          <span>{this.state.info}</span>
        </div>
        <List className={this.props.smallScreen ? 'singer-content mbh': 'singer-content mbn'}>
          {singerList}
        </List>
      </div>
      
    );
  }
}

RankList = WrappedComponent(RankList);
export default RankList