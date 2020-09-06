import React, { useState } from 'react';
import './LoginRegister.css';
import logo from '../../assets/ieba-logo-invert.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import firebase from '../../firebaseConfig';
import "firebase/auth";
import "firebase/firestore";

const LoginRegister = () => { 
  const [active, setActive] = useState('');

  const handleNavOption = (e) => {
    e.preventDefault();
    let activeFilter = e.target;
    activeFilter.classList.add("login__nav--active");
    setActive(e.target);
    if (active !== e.target) {
      setActive(e.target);
    }
    if (active) {
      active.classList.remove("login__nav--active");
    }
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
        console.log(user.user.uid);
        firebase
          .firestore()
          .collection("user")
          .doc(user.user.uid)
          .get()
          .then(() => {
            window.location.href = "/"
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
              .then(alert("Cadastro efetuado, volte e faça o login."))
          );
      });
  }

  return (
    <main className="login">
      <h1 className="login__logo">
        <img src={logo} alt="Logo Iebá" />
      </h1>
      <nav className="login__nav">
        <ul>
          <li className="login__nav--active" onClick={(e) => handleNavOption(e)}>
            <a href="/login">
              Login
            </a>
          </li>
          <li onClick={(e) => handleNavOption(e)}>
            <a href="/login">
              Cadastro
            </a>
          </li>
        </ul>
      </nav>

      <section className="login__section">
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

      <section className="register__section">
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
    </main>
  )
}

export default LoginRegister;