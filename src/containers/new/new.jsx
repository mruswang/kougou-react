import React, { Component } from 'react';
import { Carousel } from 'antd';
import './new.css'
import $http from '../../axios'
var that;
class Recommend extends Component {
  constructor(){
    super();
    that = this;
    this.state = {
      bannerList:[]
    }
    $http.get('/proxy/?json=true').then(res => {
      console.log(res)
      that.setState({
        bannerList : res.data.banner
      })
    })
  }
  render() {
    var carousel = this.state.bannerList.map((item,index) => (
          <img
              src={item.imgurl}
              alt=""
              key={index}
              style={{ width: '100%', verticalAlign: 'top' }}
          />
    ))
    return (
      <div>
        <Carousel autoplay>
          {carousel}
        </Carousel>
      </div>
    );
  }
}

export default Recommend;

