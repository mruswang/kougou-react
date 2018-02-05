import React, { Component } from 'react';
import { Carousel,List,Icon } from 'antd';
import './new.css'
import $http from '../../axios'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as userInfoActionsFromOtherFile from '../../redux/action'

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
      console.log(this.props)
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
      <Item onClick={this.handleClick.bind(this,item)} className="list-item" key={index}>
        <div className="list-item-left">
          <h4>{item.remark}</h4>
          <span>{item.filename}</span>
        </div>
        <Icon type="right" />
      </Item>
    ))
    return (
      <div className="new">
        <Carousel autoplay>
          {carousel}
        </Carousel>
        <List className={this.props.show ? 'show': 'hide'}>
          {songList}
        </List>
      </div>
    );
  }
  handleClick(item){
    console.log(item);
    //将信息储存到redux中
    this.props.setPlayer.updata({
      player: {
        show: true
      }
    })
  }
}

function mapStateToProps(state) {
  console.log(state)
  return {
    show: state.tab_player.player.show
  }
}
function mapDispathToProps(dispath) {
  return {
    setPlayer: bindActionCreators(userInfoActionsFromOtherFile,dispath)
  }
}
export default connect(
    mapStateToProps,
    mapDispathToProps
)(New)
