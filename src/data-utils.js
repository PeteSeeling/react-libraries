import React from 'react';



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


