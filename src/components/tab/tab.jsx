import React, { Component } from 'react';
import {Link} from 'react-router-dom'
import './tab.css'


const tabs = [
  { title: '新歌',href: '/' },
  { title: '排行' ,href: '/rank' },
  { title: '热歌' ,href: '/hot' },
  { title: '歌手' ,href: '/singer' },
];

class Tab extends Component {
  constructor(props){
    super(props);
    this.state = {
      path: window.location.pathname
    }
    console.log(this.props)
  }
  select(item){
    this.setState({
      path: item.href
    })
  }
  render() {
    const links = tabs.map((item,index) => (
        <Link to={item.href} key={index} onClick={this.select.bind(this,item)} className={this.state.path === item.href ? 'tab-active' : ''}> {item.title} </Link>
    ))
    return (
      <div className={this.props.fullScreen ? 'tab tabhide' : 'tab'}>
        {links}
      </div>
    );
  }
}

export default Tab;
