import React, { Component } from 'react';
import {Router,Route} from 'react-router-dom'
import Home from '../containers/home/home'
import Recommend from '../containers/recommend/recommend'
import Singer from '../containers/singer/singer'
import Rank from '../containers/rank/rank'
import Hot from '../containers/hot/hot'
import history from '../history'

class ROUTER  extends Component {
  render() {
    return (
      <div className="router">
        <Router history={history}>
          <div>
            <Home>
              <Route exact path="/" component={Recommend}/>
              <Route path="/singer" component={Singer}/>
              <Route path="/rank" component={Rank}/>
              <Route path="/hot" component={Hot}/>
            </Home>
          </div>
        </Router>
      </div>
    );
  }
}

export default ROUTER ;
