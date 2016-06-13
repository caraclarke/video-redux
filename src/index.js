import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import Searchbar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = process.env.API_YOUTUBE;

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { videos: [] };

    YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
      this.setState({ videos });
      // same as this.setState({ videos: videos });
      // only if key and prop are same var name
    });
  }

  render() {
    return (
      <div>
        <Searchbar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)