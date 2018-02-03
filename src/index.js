import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ROUTER  from './router/index';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ROUTER />, document.getElementById('root'));
registerServiceWorker();
