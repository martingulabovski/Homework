let userName = "Martin";
let pinNumber = 3241;
let logIn = prompt("Enter your pin number Mr." + userName);
if (logIn != pinNumber) {
  alert("Incorrect pin! Refresh page to try again.");
}

function withdrawlMoney(amount) {
  let balance = 2000;
  if (amount > balance) {
    alert("Not enough funds on your account!");
    return false;
  } else if (isNaN(amount)) {
    alert("That is not an amount.");
  
  } else if ((balance = balance - amount)) {
    alert(
      "Successful withdrawal of: US $" +
        amount +
        "\nAvailable Balance is: US $" +
        balance
    );
  }
}

function enterAmount() {
  let amount = document.getElementById("amount").value;
  withdrawlMoney(amount);
}
document.getElementById("enter").addEventListener("click", enterAmount);
