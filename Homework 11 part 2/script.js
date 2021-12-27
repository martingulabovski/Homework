let sum = [250, 200, 30, 50, 20].reduce(add, 0);

function add(accumulator, a) {
  return accumulator + a;
};

if (isNaN(sum)) {
  document.getElementById("sum").textContent =
    " One of the entries is not a number, enter a number please.";
} else {
  document.getElementById("sum").textContent = sum;
}; 

