import React from 'react';
import ReactDOM from "react-dom";
// import App from './App';

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
      React.createElement( 'div', null, 'Hello World!'),
      // <App />, 上をこれに変えるとエラー
      document.getElementById('root')
  )
});