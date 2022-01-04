let ingridientsList = [];
let question = prompt("What would be the name of your recipe?");

let input = prompt(
  "What would you like to do? new ingridients, delete ingridients or quit so you can check out your saved ingridients?"
);

while (input !== "quit") {
  if (input === "new") {
    addingridientsList();
  } else if (input === "delete") {
    deleteingridientsList();
  }

  input = prompt(
    "What would you like to do? new ingridients, delete ingridients or quit so you can check out your saved ingridients?"
  );
}
document.querySelector("h5").innerText =
  "Okay I guess those are all the ingridients we need!";

function listingridientsList() {
  ingridientsList.forEach(function (ingridientsList, i) {
    document.createTextNode(i + ": " + ingridientsList);
  });
}

function addingridientsList() {
  let newingridientsList = prompt("Enter new ingridient");
  ingridientsList.push(newingridientsList);
  alert("Added new ingridient");
}

function deleteingridientsList() {
  let index = prompt("Enter index of ingridient to delete");
  ingridientsList.splice(index, 1);
  alert("Deleted ingridient");
}

function myFunction() {
  let x = document.createElement("UL");
  x.setAttribute("id", "myUL");
  document.body.appendChild(x);

  let y = document.createElement("LI");
  let t = document.createTextNode(ingridientsList);
  y.appendChild(t);
  document.getElementById("myUL").appendChild(y);
}

document.querySelector("h1").innerText = question;
