function range(start, end, step) {
  let array = [];
  for (let i = (start); i <= end; i += step) {  
  array.push(i);
  }
  return array;
}

console.log(range(-5, 2, 3));