import React from 'react';
import './Menu.css';

import MenuOption from '../../components/MenuOption';
import MenuBot from '../../components/MenuBot';

const HamburgerMenu = () => {
  return (
    <main className="container menu__home">
      <nav className="menu__home-nav">
        <ul className="menu__home-nav-list">
          <MenuOption 
            href="/minhas-entradas"
            icon="fas fa-sign-in-alt"
            text="Minhas entradas"
          />
          <MenuOption 
            href="/minhas-saidas"
            icon="fas fa-sign-out-alt"
            text="Minhas saídas"
          />
          <MenuOption 
            href="/unavaliable"
            icon="fas fa-cash-register"
            text="Meu fluxo de caixa"
          />
          <MenuOption 
            href="/unavaliable"
            icon="fas fa-store"
            text="Meu plano de negócios"
          />
        </ul>
      </nav>
      <MenuBot href="/fale-com-a-dina"/>
    </main>
  )
}

export default HamburgerMenu;