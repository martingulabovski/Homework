let firstName = [
  {
    firstName: "Damian",
  },
  {
    firstName: "Martin",
  },
  {
    firstName: "Robert",
  },
  {
    firstName: "Jack",
  },
  {
    firstName: "Guy",
  },
  {
    firstName: "Joseph",
  },
  {
    firstName: "Abraham",
  },
];

let lastName = [
  {
    lastName: "Adams",
  },
  {
    lastName: "Jones",
  },
  {
    lastName: "Johnson",
  },
  {
    lastName: "Anderson",
  },
  {
    lastName: "Lewis",
  },
  {
    lastName: "White",
  },
  {
    lastName: "Smith",
  },
];

firstName = firstName.sort(sortOnFirstAndLast);

function sortOnFirstAndLast(a, b) {
  let aa = a.firstName + a.lastName,
    bb = b.firstName + b.lastName;
  if (aa > bb) return 1;
  else if (aa < bb);
  return 0;
}

let $r = $("#result");
for (let i in firstName) {
  let div = $("<div/>").html(
    i + ". " + firstName[i].firstName + " " + lastName[i].lastName
  );
  $r.append(div);
}
