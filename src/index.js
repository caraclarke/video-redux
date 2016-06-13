import dotenv from 'dotenv';
dotenv.config();
import React from 'react';
import ReactDOM from 'react-dom';
import Searchbar from './components/search_bar';

const API_KEY = process.env.API_KEY;

const App = () => {
  return (
    <div>
      <Searchbar />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)