import React from 'react';

const DataTableItem = ({ item }) => {
  const { name, price, sales } = item;

  return (
    <>
    {sales.map((sale, index) => {
      return (
        <tr key={`${index}-${name}`}>
          <td>{sale.saleDate}</td>
          <td>{name}</td>
          <td>{price.sale}</td>
          <td>{sale.saleQuantity}</td>
          <td>{sale.saleTotal}</td>
        </tr>
      )
    }
    )}
    </>
  )
}

export default DataTableItem;