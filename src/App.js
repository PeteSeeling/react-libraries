import React from 'react';
import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns } from './data-utils';
import { VictoryBar, VictoryChart, VictoryPie } from 'victory';

function App() {
  return <>
    <DataGrid
      columns={generateColumns(data)}
      rows={data}
    />
    <VictoryBar></VictoryBar>
    <VictoryPie></VictoryPie>
    <VictoryChart></VictoryChart>



  </>;}
export default App;
