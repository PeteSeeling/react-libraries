



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

export function makeCountByGender(data) {
  const totalGender = data.reduce((acc, customer)=>{
    if (acc[customer.gender]){
      acc[customer.gender]++;
    }
    else {
      acc[customer.gender] = 1;
    }
    return acc;
  }, {});
  return totalGender;
}

 
