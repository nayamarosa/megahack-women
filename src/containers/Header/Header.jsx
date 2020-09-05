import React from 'react';
import './Header.css';
import logo from '../../assets/ieba-logo.png';

const Header = () => {

  const handleOpenMenu = (state) => {
    const handleMenu = document.querySelector('.header__nav');

    if (state) {
      handleMenu.classList.add('header__nav--open');
      handleMenu.classList.remove('header__nav--closed');
    } else if (!state){
      handleMenu.classList.add('header__nav--closed');
      handleMenu.classList.remove('header__nav--open');
    }
  }


  return (
    <header className="header">
      <div className="container header__group">
        <div onClick={() => handleOpenMenu(true)}>
          <i className="fas fa-bars header__menu-hamburger"></i>
        </div>
        <div className="container header__nav header__nav--closed">
          <nav>
            <div onClick={() => handleOpenMenu(false)}>
              <i className="fas fa-times"></i>
            </div>
            <ul>
              <li>Minhas entradas</li>
              <li>Minhas saídas</li>
              <li>Meu fluxo de caixa</li>
              <li>Meu plano de negócios</li>
              <li></li>
              <li></li>
            </ul>
          </nav>
        </div>
        <h1 className="header__logo">
          <img src={logo} alt="Logo Iebá" />
        </h1>
        <a href="/">
          <i className="fas fa-user-circle"></i>
        </a>
      </div>
    </header>
  )
}

export default Header;