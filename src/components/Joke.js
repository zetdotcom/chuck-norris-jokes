import React from 'react';

const Joke = props => {
  const { icon, category, url, value } = props;
  return (
    <div>
      <img src={icon} />
      {category && <div>category: {category[0]}</div>} 
      <div>url: {url}</div>
      <div>{value}</div>
    </div>
  );
};

export default Joke;
