function range(start, end, step) {
  let array = [];
  for (let i = start; i <= end; i += step) {  
    if(step <= 0) {
      break;
    }
    array.push(i);
  }
  return array;
}

console.log(range(-5, -3, -3));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));