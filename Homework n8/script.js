//First way I found out how to do it.

/*
let phone = 119.95;     //1 phone cost without tax.
          
let percentToGet = 5;   //The percent that we want to get. i.e. We want to get 5% of 119.95.
                         
let percent = (percentToGet / 100) * phone;   //Calculate the percent.
                     
let _1phone = phone + percent;    //Calculate 1 phone + tax(5% of 119.95)
                      
alert("For 30 phones it's going to cost you $" + _1phone * 30);    //Print and calculate the final result of 30 phones with an alert
*/

//Second way I found out how to do it with a function.

/*
let perc = myFunction(119.95, 5);   // Function is called, return value will end up in perc
let phone = 119.95;
let total = perc + phone;

function myFunction(num, per) {
    return (per / 100) * num;        // Function returns the product of num and per
}

alert("For 30 phones it's going to cost you $" + total * 30);
*/

//Third way I found out how to do it is by selecting any number of phones and calculating the value. Pretty much similar to the first solution but with a free choice instead of the limited 30 phones.

/*
let number = prompt("How many phones do you want to buy?");

let phone = 119.95;

let percentToGet = 5;

let percent = (percentToGet / 100) * phone;

let _1phone = phone + percent;
    
    alert("For your selected number of phones it's going to cost you $" + _1phone * number);
*/
