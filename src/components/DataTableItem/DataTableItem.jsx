import React from 'react';

const DataTableItem = ({ item }) => {
  const { name, price, sales, buys } = item;
  const path = window.location.pathname;

  return (
    <>
    {
    path === "/minhas-entradas"
    ? sales.map((sale, index) => {
          return (
            <tr key={`${index}-${name}`} className="data__table-item">
              <td>{sale.saleDate}</td>
              <td>{name}</td>
              <td>R$ {price.sale},00</td>
              <td>{sale.saleQuantity}</td>
              <td>R$ {sale.saleTotal},00</td>
            </tr>
          )
        }
      )
    : path === "/minhas-saidas"
      ? buys.map((buy, index) => {
        return (
          <tr key={`${index}-${name}`} className="data__table-item">
            <td>{buy.buyDate}</td>
            <td>{name}</td>
            <td>R$ {price.purchase},00</td>
            <td>{buy.buyQuantity}</td>
            <td>R$ {buy.buyTotal},00</td>
          </tr>
        )
      }
    )
      : false
  }
    
    </>
  )
}

export default DataTableItem;