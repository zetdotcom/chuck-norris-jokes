import React from 'react';

import './JokeItem.scss';

const JokeItem = props => {
  const { icon, category, url, value } = props;
  return (
    <div className="joke">
      <div className="joke__left-side">
        <div className="joke__image">
          <img src={icon} />
        </div>
        <div className="joke__category">{category && <div>category: {category[0]}</div>}</div>
        <div className="joke_url">
          <div>
            <a href={url} target="blank">
              Link
            </a>
          </div>
        </div>
      </div>
      <div className="joke__right-side">
        <div className="joke__value">
          {value}
        </div>
      </div>
    </div>
  );
};

export default JokeItem;
