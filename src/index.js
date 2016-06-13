import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';

const API_KEY = process.env.API_YOUTUBE;

YTSearch({key: API_KEY, term: 'surfboard'}, function(data) {
  console.log(data);
});

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