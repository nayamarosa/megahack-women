import React, { useState } from 'react';
import './LoginRegister.css';
import logo from '../../assets/ieba-logo-invert.png';

import Input from '../../components/Input';
import Button from '../../components/Button';

import firebase from '../../firebaseConfig';
import withFirebaseAuth from 'react-with-firebase-auth';

const firebaseAppAuth = firebase.auth();
const database = firebase.firestore();

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
  
  const getUser = async(id) => {
    const doc = await database.collection("users").doc(id).get();
    const user = doc.data();
    console.log(user)
    return user;
  }
  
  
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [registerName, setRegisterName] = useState('');
  const [registerEmail, setRegisterEmail] = useState('');
  const [registerPassword, setRegisterPassword] = useState('');

  const [login, setLogin] = useState({loginEmail, loginPassword});
  const [register, setRegister] = useState({registerName, registerEmail, registerPassword});

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

  const handleClick = (e, id) => {
    e.preventDefault();

    if (id === "login") {
      return setLogin({loginEmail, loginPassword});
    }
    if(id === "register") {
      return setRegister({registerName, registerEmail, registerPassword});
    }
  }


  const createUser = () => {
    login.createUserWithEmailAndPassword(registerEmail, registerPassword)
    .then(resp => {
      const id = resp.user.uid;
      database.collection("users").doc(id).set({
        name: registerName,
        email: registerEmail,
      });
      // sessionStorage.setItem('user', id);
      // sessionStorage.setItem('name', this.state.name);
      // sessionStorage.setItem('type', this.state.type);
    })
    .then(() => {
      window.location = '/';
    })
  }
  
  const signIn = (obj) => {
    obj.signInWithEmailAndPassword(loginEmail, loginPassword)
    .then(() => {
      const id = firebaseAppAuth.currentUser.uid;
      getUser(id)
      // .then((data) => {
      //   sessionStorage.setItem('user', id);
      //   sessionStorage.setItem('name', data.name);
      //   sessionStorage.setItem('type', data.type);
      //   window.location = '/';
      // })
    })
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
            onClick={(e) => handleClick(e, "login")}
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
            onClick={(e) => handleClick(e, "register")}
          />
        </form>
      </section>
    </main>
  )
}

export default withFirebaseAuth({firebaseAppAuth,})(LoginRegister);