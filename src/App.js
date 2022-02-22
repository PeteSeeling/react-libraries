import React from 'react';
import DataGrid from 'react-data-grid';
import data from './data';
import './App.css';
import { generateColumns } from './data-utils';
import { VictoryBar } from 'victory';

function App() {
  return <>
    <DataGrid
      columns={generateColumns(data)}
      rows={data}
    />



  </>;}
export default App;
