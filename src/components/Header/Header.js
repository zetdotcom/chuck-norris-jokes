import React from 'react';
import chuckImage from '../../images/chuck.jpg';

import './Header.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header-image">
        <img src={chuckImage} />
      </div>
      <div className="header-title">Appparently Chuck Norris knows all the jokes</div>
    </div>
  );
};

export default Header;
