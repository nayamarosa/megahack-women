import React from 'react';
import './Footer.css';

const Footer = () => {
  const path = window.location.pathname;

  return (
    <>
    {
      path !== "/login"
      ? <footer className="footer">
          <div className="container footer__info">
            <section className="footer__info-contact">
              <a href="http://bit.ly/ieba-duvidas-megahack">
                Acesso às pesquisas
              </a>
            </section>
            <p>Time Aruanda - Grupo 4</p>
          </div>
        </footer>
      : false
    }
    </>
  )
}

export default Footer;