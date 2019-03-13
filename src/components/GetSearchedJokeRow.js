import React, { Component } from 'react';
import Button from './Button/Button';
import Row from './Row/Row';
import RowItem from './Row/RowItem';

export default class SearchBar extends Component {
  render() {
    return (
      <Row>
        <RowItem>OR SEARCH JOKES:</RowItem>
        <RowItem>
          <input value={this.props.searchTerm} onChange={this.props.handleSearchTermChange} />
        </RowItem>
        <RowItem>
          <Button onClick={this.props.getSearchedJokes}>GET</Button>
        </RowItem>
      </Row>
    );
  }
}
