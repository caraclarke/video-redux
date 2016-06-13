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
        onChange={(event) => this.onInputchange(event.target.value)} />
      </div>
    );
  }

  onInputchange(term) {
    this.setState({term});

    this.props.onSearchTermChange(term);
  }

}

export default Searchbar;