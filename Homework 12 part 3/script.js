function getArrayMax(array) {
  return Math.max.apply(null, array);
}
function getArrayMin(array) {
  return Math.min.apply(null, array);
}
let numbers = [111, 54, 32, 92];
console.log(getArrayMax(numbers));
console.log(getArrayMin(numbers));
console.log(getArrayMax(numbers) + getArrayMin(numbers));


