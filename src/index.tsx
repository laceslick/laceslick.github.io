import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css';
import CorruptionCalc from './CorruptionCalc';
import NavBar from './NavBar';

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <CorruptionCalc />
  </React.StrictMode>,
  document.getElementById('root')
);