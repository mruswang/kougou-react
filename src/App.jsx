import React from 'react'
import Header from './components/header/header'
import Tab from './components/tab/tab'
import Player from './components/player/player'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

class App extends React.Component {
    render() {
        return (
          <div>
         		<div className="header-box">
         			<Header></Header>
              <Tab fullScreen={this.props.fullScreen}></Tab>
         		</div> 
            <div style={{"marginBottom" : this.props.fullScreen ? '0' : '90px'}}>{this.props.children}</div>
            <Player></Player>
          </div>
        )
    }
}
function mapStateToProps(state) {
  return {
      fullScreen: state.changePlayer.fullScreen
  }
}
function mapDispatchToProps(dispatch) {
  return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
