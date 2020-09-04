import React from 'react';
import './DataTable.css';

import DataTableItem from '../../components/DataTableItem';

const DataTable = ({ list }) => {
  const path = window.location.pathname;

  return (
    <>
      <thead className="data__table-head">
        <tr>
          <td>Data</td>
          <td>Produto/ <br/>Serviço</td>
          <td>Valor <br/>unitário</td>
          <td>Qntde.</td>
          <td>Valor <br/>total</td>
        </tr>
      </thead>
      <tbody className={`data__table-body ${path === "/minhas-entradas" ? "data__table-body--entries" : ""} ${path === "/minhas-saidas" ? "data__table-body--outs" : ""}`}>
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