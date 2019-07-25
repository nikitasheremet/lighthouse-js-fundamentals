function merge(array1, array2) {
  let arrFin = array1.join() + "," + array2.join();
  arrFin = arrFin.split(",").map(Number).sort().filter(function (num) {return num > 0;});
  return arrFin;
}

console.log(merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]), "=?", [ 1, 2, 3, 4, 4, 5, 6 ]);
console.log(merge([ 4 ], [ 2, 5, 8 ]), "=?", [ 2, 4, 5, 8 ]);
console.log(merge([ 1, 2, 6 ], []), "=?", [ 1, 2, 6 ]);