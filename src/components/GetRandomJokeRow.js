import React from 'react';
import Button from './Button/Button';
import Row from './Row/Row';
import RowItem from './Row/RowItem';

const GetRandomJokeRow = props => {
  const { getRandomJoke, categories, selectedCategory, handleCategoryChange } = props;
  return (
    <Row>
      <RowItem>GET RAMDON JOKE: category </RowItem>{' '}
      <RowItem>
        <select value={selectedCategory || 'All'} onChange={handleCategoryChange}>
          <option value="all">All</option>
          {categories.map((cat, i) => (
            <option value={cat} key={i}>
              {cat}
            </option>
          ))}
        </select>{' '}
      </RowItem>
      <RowItem>
        <Button onClick={getRandomJoke}>Get random joke</Button>
      </RowItem>
    </Row>
  );
};

export default GetRandomJokeRow;
