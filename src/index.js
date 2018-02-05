import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ROUTER  from './router/index';
import {Provider} from 'react-redux'
import configureStore from './redux/index'
import registerServiceWorker from './registerServiceWorker';

const store = configureStore()
ReactDOM.render(
	<Provider store={store}>
    <ROUTER/>
  </Provider>, 
  document.getElementById('root'));
registerServiceWorker();
