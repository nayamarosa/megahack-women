import React, { useState, useEffect } from 'react';

import DataTable from '../../containers/DataTable';

const Entradas = () => {
  const [list, setList] = useState([]);
  
  useEffect(() => {
    const getData = async() => {
      await fetch(' https://demo6507195.mockable.io/megahack')
        .then(res => res.json())
        .then(data => setList(data.products))
    }
    getData();
  }, [])
  
  return (
    <main>
      <h2>Minhas entradas</h2>
      <table>
        <DataTable list={ list } />
      </table>
    </main>
  )
}

export default Entradas;