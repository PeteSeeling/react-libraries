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

export function makeCountByGender(arr) {
  const countTotalColor = arr.reduce((acc, curr) => {
    if (acc[curr.id]){
      acc[curr.gender].count++;
      acc[curr.gender].total = acc[curr.id].total + curr.gender;
    } else {
      acc[curr.gender] = {};
      acc[curr.gender].count = 1;
      acc[curr.gender].total = curr.gender;
    }
    return acc;

  }, {});

  return Object.entries(countTotalColor)
    .map(entry => ({
      id: entry[0],
      gender: entry[1].total / entry[1].count,

    }));
}