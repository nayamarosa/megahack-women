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
              <td>{price.sale}</td>
              <td>{sale.saleQuantity}</td>
              <td>{sale.saleTotal}</td>
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
            <td>{price.purchase}</td>
            <td>{buy.buyQuantity}</td>
            <td>{buy.buyTotal}</td>
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