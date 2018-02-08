import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd'
import './singer.css'
import WrappedComponent from '../../hoc/index'
import Tab from '../../components/tab/tab'

class Singer extends React.Component{
  render(){
    return (
      <div>
        <Tab></Tab>
        <div className={this.props.smallScreen ? 'singer-type mbh': 'singer-type mbn'}>
          <div className="singer-group">
            <Link to={'/singer-info/88'}><span>热门歌手</span> <Icon className="icon" type="right"/></Link>
          </div>
          <div className="singer-group">
            <Link to={'/singer-info/1'}><span>华语男歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/2'}><span>华语女歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/3'}><span>华语组合</span> <Icon className="icon" type="right"/></Link>
          </div>
          <div className="singer-group">
            <Link to={'/singer-info/4'}><span>日韩男歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/5'}><span>日韩女歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/6'}><span>日韩组合</span> <Icon className="icon" type="right"/></Link>
          </div>
          <div className="singer-group">
            <Link to={'/singer-info/7'}><span>欧美男歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/8'}><span>欧美女歌手</span> <Icon className="icon" type="right"/></Link>
            <Link to={'/singer-info/9'}><span>欧美组合</span> <Icon className="icon" type="right"/></Link>
          </div>
        </div>
      </div>
    )
  }
}
Singer = WrappedComponent(Singer);
export default Singer