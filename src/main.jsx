import React from 'react';
import ReactDOM from 'react-dom/client';  // Ensure this is the correct import
import { App } from './app.jsx';  // Ensure this path is correct
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error('Target container is not a DOM element.');
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
