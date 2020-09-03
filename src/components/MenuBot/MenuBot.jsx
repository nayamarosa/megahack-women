import React from 'react';

const MenuBot = (props) => {
  return (
    <section className="menu__home-bot">
      <p>Precisa de ajuda para cadastrar entradas e saídas?</p>
      <a href={props.href}>
        <i className="fas fa-robot menu__home-bot-icon"></i>
      </a>
      <p><span>Fale com a Diná</span></p>
    </section>
  )
}

export default MenuBot;