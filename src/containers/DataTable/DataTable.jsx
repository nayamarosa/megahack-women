import React from 'react';
import './DataTable.css';

import DataTableItem from '../../components/DataTableItem';

const DataTable = ({ list }) => {
  return (
    <>
      <thead>
        <tr>
          <td>Data</td>
          <td>Produto/ Serviço</td>
          <td>Valor unitário</td>
          <td>Qntde.</td>
          <td>Valor total</td>
        </tr>
      </thead>
      <tbody>
        {list.map(item => 
          <DataTableItem 
            key={item.code}
            item={item}
          />
        )}
      </tbody>
    </>
  )
}

export default DataTable;