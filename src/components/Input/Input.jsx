import React from 'react';
import './Input.css';

const Input = (props) => {
  return (
    <label htmlFor={props.htmlFor} className="input input__label">
      {props.label}
      <input 
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
        onChange={props.onChange}
        required={props.required}
      />
    </label>
  )
}

export default Input;