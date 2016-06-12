import React from 'react';
import ReactDOM from 'react-dom';

require('dotenv').config();

const API_KEY = process.env.YOUTUBE_KEY;

const App = () => {
  return <div>tesT</div>
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)