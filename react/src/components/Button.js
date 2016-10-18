import React from 'react';

const Button = props => {
  return (
    <div onClick={props.onClick}>
    {props.title}
    </div>
  )
}

export default Button;
