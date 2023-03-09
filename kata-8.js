const repeatNumbers = function(data) {
  let nums = '';
  for (let i = 0; i < data[0][1]; i++) {
    nums += data[0][0];
  }
  if (data.length > 1) {
    for (let i = 1; i < data.length; i++) {
      nums += ', ';
      for (let j = 0; j < data[i][1]; j++) {
        nums += data[i][0];
      } 
    }
  }
  return nums;
};

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));