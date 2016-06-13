import React, { Component } from 'react';

class Searchbar extends Component {
  // define state in class based component
  constructor(props) {
    // call parent method by calling super
    super(props);

    this.state = { term: '' };
  }

  render() {
    return (
      <div className="search-bar">
        <input
        value={this.state.term}
        onChange={event => this.setState({ term: event.target.value })} />
      </div>
    );
  }

}

export default Searchbar;