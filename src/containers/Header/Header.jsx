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

  const path = window.location.pathname;

  return (
    <>
    {
      path !== "/login"
      ? <header className="header">
      <div className="header__group">
        {
          path !== "/"
          ? <>
            <div onClick={() => handleOpenMenu(true)}>
              <i className="fas fa-bars header__menu-hamburger"></i>
            </div>
            <div className="header__nav header__nav--closed">
              <nav>
                <div onClick={() => handleOpenMenu(false)} className="header__closed">
                  <i className="fas fa-times"></i>
                </div>
                <ul>
                  <li><a href="/minhas-entradas">Minhas entradas</a></li>
                  <li><a href="/minhas-saidas">Minhas saídas</a></li>
                  <li><a href="/meu-fluxo-de-caixa">Meu fluxo de caixa</a></li>
                  <li><a href="/unavaliable">Meu modelo de negócio</a></li>
                </ul>
              </nav>
            </div>
            </>
          : false
        }
          <a href="/">
            <h1 className="header__logo">
              <img src={logo} alt="Logo Iebá" />
            </h1>
          </a>
        <a href="/">
          <i className="fas fa-user-circle"></i>
        </a>
      </div>
    </header>
    : false
  }
  </>
    
  )
}

export default Header;