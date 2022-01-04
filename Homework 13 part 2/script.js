let array = [40, 23, 35, 49];
let sum = 0;

for (let i = 0; i < array.length; i++) {
    sum += array[i];
}

document.getElementById("sumOfNumbers").innerText = `${array[0]} + ${array[1]} + ${array[2]} + ${array[3]} = ${sum}`;

