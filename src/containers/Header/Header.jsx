import React from 'react';
import './Header.css';
import logo from '../../assets/ieba-logo.png';
import botImage from '../../assets/maiara-bot.png';

import firebase from '../../firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

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

  const handleClickLogout = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signOut()
      .then(() => {
        sessionStorage.clear();
        window.location.href = "/login";
      })
  }

  const path = window.location.pathname;

  return (
    <>
    {
      path !== "/login"
      ? <header className="header">
      <div className="container-header header__group">
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
                  <li className="header__menu-bot">
                    <a href="/fale-com-a-maiara">
                      Fale com a Maiara
                      <div>
                        <img src={botImage} alt="Fale com a Maiara" />
                      </div>
                    </a>
                  </li>
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
        <a href="/" onClick={(e) => handleClickLogout(e)}>
          <i className="fas fa-user-times"></i>
        </a>
      </div>
    </header>
    : false
  }
  </>
    
  )
}

export default Header;