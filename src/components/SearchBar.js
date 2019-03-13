import React, { Component } from 'react';
import Button from './Button';

export default class SearchBar extends Component {
  render() {
    return (
      <div>
        <input value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
        <Button onClick={this.props.getSearchedJokes}>GET</Button> 
       
      </div>
    )
  }
}
