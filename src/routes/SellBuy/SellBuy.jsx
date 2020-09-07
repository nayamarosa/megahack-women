import React, { useState, useEffect } from 'react';

import Button from '../../components/Button';
import DataTable from '../../containers/DataTable';
import Loading from '../../components/Loading';

const SellBuy = () => {
  if(sessionStorage.getItem('user')){
    sessionStorage.getItem('id');       
  } else{
    window.location = '/login';
  }
  
  const [list, setList] = useState([]);
  
  useEffect(() => {
    setTimeout(() => {
      const getData = async() => {
        await fetch(' https://demo6507195.mockable.io/megahack')
          .then(res => res.json())
          .then(data => setList(data.products))
      }
      getData();
    }, 1000);
  }, []);

  const path = window.location.pathname;
  
  const handleClick = (e) => {
    e.preventDefault();
    let path = window.location.href = "/unavaliable"
    return path;
  }
  
  return (
    <>
  {
    path === "/minhas-entradas" && list.length !== 0
    ? <main className="container-table data">
        <h2>Minhas entradas</h2>
        <table className="data__table" cellSpacing="0" cellPadding="0">
          <DataTable list={ list } />
        </table>
        <Button 
          className="btn__primary btn__primary--rose"
          text="Cadastrar novo produto/serviço"
          onClick={(e) => handleClick(e)}
        />
        <Button 
          className="btn__primary btn__primary--green"
          text="Nova entrada"
          onClick={(e) => handleClick(e)}
        />
      </main>
    : path === "/minhas-saidas" && list.length !== 0
      ? <main className="container-table data">
          <h2>Minhas saídas</h2>
          <table className="data__table" cellSpacing="0" cellPadding="0">
            <DataTable list={ list } />
          </table>
          <Button 
            className="btn__primary btn__primary--rose"
            text="Cadastrar novo produto/serviço"
            onClick={(e) => handleClick(e)}
          />
          <Button 
            className="btn__primary btn__primary--orange"
            text="Nova saída"
            onClick={(e) => handleClick(e)}
          />
        </main>
      : <Loading/>
  }
  </>
  )
}

export default SellBuy;