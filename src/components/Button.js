import React from 'react';

import './Button.scss';

const Button = props => {
  return (
    <button className={`button ${props.disabled ? 'button--disabled' : ''}`} onClick={props.onClick}>
      {props.children}
    </button>
  )
}

export default Button
