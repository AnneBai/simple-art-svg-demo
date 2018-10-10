import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ChildNode from './react-art-demo.js';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <ChildNode/>, 
  document.getElementById('root')
);
registerServiceWorker();
