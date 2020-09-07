import React, { useState } from 'react';
import './LoginRegister.css';
import logo from '../../assets/ieba-logo-invert.png';
import detail from '../../assets/detalhe.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import firebase from '../../firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

const LoginRegister = () => { 
  const [active, setActive] = useState('');

  const handleNavOption = (e) => {
    e.preventDefault();
    let activeMenu = e.target;
    let activeMenuText = activeMenu.textContent;
    
    setActive(activeMenuText);
  }

  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const handleChange = (e, id) => {
    let inputValue = e.target.value;

    if (id === "loginEmail") {
      return setLoginEmail(inputValue)
    }
    if (id === "loginPassword") {
      return setLoginPassword(inputValue)
    }
    if (id === "registerName") {
      return setRegisterName(inputValue)
    }
    if (id === "registerEmail") {
      return setRegisterEmail(inputValue)
    }
    if (id === "registerPassword") {
      return setRegisterPassword(inputValue)
    }
  }

  const handleClickLogin = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(loginEmail, loginPassword)
      .then((user) => {
        firebase
          .firestore()
          .collection("user")
          .doc(user.user.uid)
          .get()
          .then(() => {
            const userId = firebase.auth().currentUser.uid;
            sessionStorage.setItem('user', userId);
            window.location.href = "/";
          });
      });
  }

  const handleClickRegister = (e) => {
    e.preventDefault();
    firebase
      .auth()
      .createUserWithEmailAndPassword(registerEmail, registerPassword)
      .then(() => {
        const userId = firebase.auth().currentUser.uid;
        firebase
          .firestore()
          .collection("user")
          .doc(userId)
          .set({
            id_user: userId,
            name: registerName,
            email: registerEmail,
          })
          .then(
            firebase
              .auth()
              .currentUser.updateProfile({
                name: registerName,
            })
          )
          .then(() => {
            sessionStorage.setItem('user', userId);
            window.location.href = "/";
          });
      });
  }

  return (
    <main className="login">
      <h1 className="login__logo">
        <img src={logo} alt="Logo Iebá" />
      </h1>
      <nav className="login__nav">
        <ul>
          <li>
            <a href="/login"  onClick={(e) => handleNavOption(e)}>
              <p className={'login__nav--active' && active === 'Cadastro' ? '' : 'login__nav--active'}>Login</p>
            </a>
          </li>
          <li>
            <a href="/login" onClick={(e) => handleNavOption(e)}>
              <p className={active === 'Cadastro' ? 'login__nav--active' : ''}>Cadastro</p>
            </a>
          </li>
        </ul>
      </nav>

    { 
      active === '' || active === 'Login'
      ? <section className={`register__section ${active === '' || active === 'Login' ? '' : 'login__nav--hidden'}`}>
          <form>
            <Input 
              htmlFor="login-email"
              label="E-mail"
              type="email" id="login-email" 
              placeholder="seuemail@provedor.com.br" 
              onChange={(e) => handleChange(e, "loginEmail")}
            />
            <Input 
              htmlFor="login-password"
              label="Senha"
              type="password" id="login-epasswordmail" 
              placeholder="Sua senha(mínimo 6 caracteres)" 
              onChange={(e) => handleChange(e, "loginPassword")}
            />
            <Button 
              text="Entrar"
              className="btn__primary btn__login"
              onClick={(e) => handleClickLogin(e)}
            />
          </form>
        </section>
      : <section className={`register__section ${active === 'Login' ? 'login__nav--hidden' : ''}`}>
          <form>
            <Input 
              htmlFor="login-name"
              label="Nome"
              type="text" id="login-name" 
              placeholder="Nome completo" 
              onChange={(e) => handleChange(e, "registerName")}
            />
            <Input 
              htmlFor="register-email"
              label="E-mail"
              type="email" id="register-email" 
              placeholder="seuemail@provedor.com.br" 
              onChange={(e) => handleChange(e, "registerEmail")}
            />
            <Input 
              htmlFor="register-password"
              label="Senha"
              type="password" id="register-epasswordmail" 
              placeholder="Sua senha(mínimo 6 caracteres)" 
              onChange={(e) => handleChange(e, "registerPassword")}
            />
            <Button 
              text="Cadastrar"
              className="btn__primary btn__login"
              onClick={(e) => handleClickRegister(e)}
            />
          </form>
        </section>
    }
      <img src={detail} alt=""  className="login__detail" />
    </main>
  )
}

export default LoginRegister;