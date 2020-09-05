import React from 'react';

import botImage from '../../assets/maiara-bot.png';

const MenuBot = (props) => {
  return (
    <section className="menu__home-bot">
      <p>Precisa de ajuda para cadastrar entradas e saídas?</p>
      <a href={props.href}>
        <img src={botImage} alt="Fale com a Maiara" />
      </a>
      <p><span>Fale com a Maiara</span></p>
    </section>
  )
}

export default MenuBot;