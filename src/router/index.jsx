import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom'
import App from '../App'
import New from '../containers/new/new'
import Singer from '../containers/singer/singer'
import Rank from '../containers/rank/rank'
import Hot from '../containers/hot/hot'
import history from '../history'

class ROUTER  extends Component {
  render() {
    return (
      <Router history={history}>
        <div>
          <App>
            {/*<ul>*/}
              {/*<li><Link to="/">newsong</Link></li>*/}
              {/*<li><Link to="/rank/11">rank</Link></li>*/}
              {/*<li><Link to="/rankInfo/11">info</Link></li>*/}
            {/*</ul>*/}
            <Route exact path="/" component={New}/>
            <Route path="/singer" component={Singer}/>
            <Route path="/rank" component={Rank}/>
            <Route path="/hot" component={Hot}/>
          </App>
        </div>
      </Router>
    );
  }
}

export default ROUTER ;
