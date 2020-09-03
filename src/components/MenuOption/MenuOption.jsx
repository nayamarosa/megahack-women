import React from 'react';

const MenuOption = (props) => {
  return (
    <li className="menu__home-nav-list-item">
      <a href={props.href} className="menu__home-nav-list-item-link">
        <i className={`${props.icon} menu__home-nav-icon`}></i>
        <p>{props.text}</p>
      </a>
    </li>
  )
}

export default MenuOption;