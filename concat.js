function concat(array1, array2) {
  let finalArray = array1;
  for (let i = 0; i < array2.length; i++) {
    finalArray.push(array2[i]);
  }
  return finalArray;
}

console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);