import React from 'react';
import { cursorContainerMixin } from 'victory';



export function generateColumns(arr){
  const keys = Object.keys(arr[0]);

  const columns = keys.map(key => {
    return {
      key: key,
      name: key.split('_')
     
    };
  })
  ;
  return columns;
}

export function makeCountByColor(arr) {
  const countTotalColor = arr.reduce((acc, curr) => {
    if (acc[curr.id]){
      acc[curr.id].count++;
      acc[curr.id].total = acc[curr.id].total + curr.gender;
    } else {
      acc[curr.id] = {};
      acc[curr.id].count = 1;
      acc[curr.id].total = curr.gender;
    }
    return acc;

  }, {});

  return Object.entries(countTotalColor)
    .map(entry => ({
      id: entry[0],
      gender: entry[1].total / entry[1].count,

    }));
}