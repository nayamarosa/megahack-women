import React from 'react';
import './Button.css';

const Button = (props) => {
  return (
    <button id={props.id} className={`btn ${props.className}`} type={props.type} onClick={props.onClick}>
      {props.text}
    </button>
  )
}

export default Button;