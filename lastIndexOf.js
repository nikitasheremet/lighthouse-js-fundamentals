function lastIndexOf (array, num) {
  let index = (-1);
  for (i = 0; i < array.length; i++) {
    if (array[i] ===  num) {
      index = i;
    }
  }
  return index;
}

