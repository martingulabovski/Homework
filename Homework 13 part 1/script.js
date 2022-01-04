document.querySelector("div.aDiv").style.backgroundColor = "brown";
let test = document.getElementById("first");

test.addEventListener(
  "mouseenter",
  function (event) {
    event.target.style.color = "purple";

    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

test.addEventListener(
  "mouseover",
  function (event) {
    event.target.style.color = "orange";

    setTimeout(function () {
      event.target.style.color = "";
    }, 500);
  },
  false
);

document.getElementById("myTitle").innerText = "This is the first h1 tag";
document.querySelector("p").innerText = "This is the first p tag.";
document.querySelector("p.paragraphSecond").innerText = "This is the second p tag";
document.querySelector("div.anotherDiv").style.backgroundColor = "blue";
document.querySelector("text").innerText = "This is a text tag";
document.getElementsByTagName("h3")[0].innerText = "This is an h3 tag";
document.getElementsByTagName("h1")[1].innerText = "This is the second h1 tag";
