import React from 'react';

import Menu from '../../containers/Menu';

const Home = () => {
  if(sessionStorage.getItem('user')){
    sessionStorage.getItem('id');       
  } else{
    window.location = '/login';
  }
  
  return (
    <Menu />
  )
}

export default Home;