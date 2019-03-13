import React from 'react';
import PropTypes from 'prop-types';
import Joke from '../JokeItem/JokeItem';

import './JokeList.scss';

const JokeList = props => {
  console.log('joke list', props.jokes)
  return (
    <div className="joke-list">

      {props.jokes.length === 0 && <div>Sorry, no jokes found!</div>}
      {!!props.totalJokes && <div>Total jokes found: {props.totalJokes }</div>}
      {props.jokes.map(joke => (
        <Joke icon={joke.icon_url} key={joke.id} category={joke.category} url={joke.url} value={joke.value} />
      ))}
    </div>
  );
};

JokeList.propTypes = {
  jokes: PropTypes.shape({
    category: PropTypes.string,
    icon: PropTypes.string,
    id: PropTypes.string,
    url: PropTypes.string,
    value: PropTypes.string,
  }),
};

export default JokeList;
