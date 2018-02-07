import React from 'react'
import Header from './components/header/header'
import Player from './components/player/player'

class App extends React.Component {
  render() {
    return (
      <div>
        <Header></Header>
        <div>{this.props.children}</div>
        <Player></Player>
      </div>
    )
  }
}

export default App

