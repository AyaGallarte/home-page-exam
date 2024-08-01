// import { render } from 'preact'
// import { App } from './app.jsx'
// import './index.css'

// render(<App />, document.getElementById('app'))


import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './app.jsx'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
