import React from 'react';

const Button = props => {
  return (
    <li><a href={'/words/'+props.id}>{props.title}</a></li>
  )
}

export default Button;
