import React from 'react';
import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns, makeCountByGender } from './data-utils';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';


function App() {
  return <>
    <DataGrid
      columns={generateColumns(data)}
      rows={data}
    />
    <VictoryBar
     
    />
    <VictoryPie data={[{ y:'gender', x:{ makeCountByGender } }]} />
    <VictoryChart></VictoryChart>



  </>;}
export default App;
