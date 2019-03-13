import React from 'react'
import Button from './Button';

const GetRandomJokeRow = props => {
  const {getRandomJoke, categories, selectedCategory, handleCategoryChange} = props
  return (
    <div>
      <Button onClick={getRandomJoke}>Get random joke</Button> from{' '}
      <select value={selectedCategory || 'All'} onChange={handleCategoryChange}>
        <option value='all'>All</option>
        {categories.map((cat, i) => (
          <option value={cat} key={i}>
            {cat}
          </option>
        ))}
      </select>{' '}
      category
        </div>
  )
}

export default GetRandomJokeRow
