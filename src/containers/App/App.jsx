import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Routes from '../../routes';
import './App.css';

import Header from '../../containers/Header';
import Footer from '../../components/Footer';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
