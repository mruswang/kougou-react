import React from 'react'
import Header from './components/header/header'
import Tab from './components/tab/tab'
import Player from './components/player/player'

class App extends React.Component {
    render() {
        return (
          <div>
         		<div className="header-box">
         			<Header></Header>
              <Tab></Tab>
         		</div> 
            <div className="content">{this.props.children}</div>
            <Player></Player>
          </div>
        )
    }
}
export default App
