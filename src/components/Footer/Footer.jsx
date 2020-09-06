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
              <a href="/">
                Dúvidas
              </a>
              <a href="/">
                Contato
              </a>
            </section>
            <p>Grupo 4</p>
          </div>
        </footer>
    : false
    }
    </>
  )
}

export default Footer;