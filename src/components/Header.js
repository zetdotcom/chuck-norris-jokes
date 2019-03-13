import React from 'react';
import chuckImage from '../images/chuck.jpg';


const Header = () => {
  return (
    <div>
      <div className="header">
        <div className="header-title">
          Appparently Chuck Norris knows all the jokes
          </div>
        <div className="header-image">
          <img src={chuckImage} />
        </div>

      </div>
    </div>
  )
}

export default Header
