import React, { useState, useEffect } from 'react';
import './CashFlow.css';

import Chart from "react-google-charts";

import Loading from '../../components/Loading';

const CashFlow  = () => {
  const [list, setList] = useState([]);

  useEffect(() => {
    const getData = async() => {
      await fetch(' https://demo6507195.mockable.io/megahack')
        .then(res => res.json())
        .then(data => setList(data.products))
    }
    getData();
  }, []);

  const filter = (type, month) => {
    let arrReducer = [];
    if(type === "sale") {
      list.filter(item => {
        const mapObj = item.sales.map(i => {
          return {date: i.saleDate, value: i.saleTotal}
        })
        const mapValue = mapObj.map(i => {
          if(i.date.slice(3, 5) === month) {
            return i.value;
          } else {
            return 0;
          }
        })
        return arrReducer.push(mapValue.reduce(( acumulador, valorAtual ) => acumulador + valorAtual, 0))
      })
    }
    if(type === "buy") {
      list.filter(item => {
        const mapObj = item.buys.map(i => {
          return {date: i.buyDate, value: i.buyTotal}
        })
        const mapValue = mapObj.map(i => {
          if(i.date.slice(3, 5) === month) {
            return i.value;
          } else {
            return 0;
          }
        })
        return arrReducer.push(mapValue.reduce(( acumulador, valorAtual ) => acumulador + valorAtual, 0))
      })
    }
    return arrReducer.reduce(( acumulador, valorAtual ) => acumulador + valorAtual, 0)
  }

  return (
    <>
    <main className="container chart">
      <h2>Meu fluxo de caixa</h2>
      <Chart
        width={'100%'}
        chartType="Bar"
        loader={<Loading />}
        data={[
          ['Mês', 'Entradas', 'Saídas'],
          ['Fevereiro', filter("sale", "02"), filter("buy", "02")],
          ['Março', filter("sale", "03"), filter("buy", "03")],
          ['Abril', filter("sale", "04"), filter("buy", "04")],
        ]}
        options={{
          // Material design options
          colors: ['#788C50', '#C85F3C'],
          legend: { position: 'none' }
        }}
      />
      <div className="chart__legend">
        <div className="chart__legend--entries">
          <p>Entradas</p>
        </div>
        <div className="chart__legend--outs">
          <p>Saídas</p>
        </div>
      </div>
  </main>
  </>
  )
}

export default CashFlow;