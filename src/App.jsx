import React from 'react'
import Header from './components/header/header'
import Tab from './components/tab/tab'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Tab></Tab>
                <div className="content">{this.props.children}</div>
            </div>
        )
    }
}
export default App
