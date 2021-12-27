let sum = [500, 200, 30, 50, 20].reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
};

if (typeof sum !== 'number') {
  document.getElementById("sum").textContent =
    " One of the entries is not a number, enter a number please.";
} else {
  document.getElementById("sum").textContent = sum;
}; 

