import React from 'react';
import './Unavaliable.css';

const Unavaliable  = () => {
  if(sessionStorage.getItem('user')){
    sessionStorage.getItem('id');       
  } else{
    window.location = '/login';
  }
  
  return (
    <main className="container unavaliable">
      <h2>
        Opção ainda não disponível para você. <br/><span>Tente novamente em alguns dias!</span>
      </h2>
    </main>
  )
}

export default Unavaliable;