import React from 'react';
import Button from './Button';

const Menu = props => {
    let buttons = this.props.map(button => {
      return(
        <Button
          key={button.id}
          title={button.name}
          id={button.id}
        />
      )
    })
}

export default Menu;
