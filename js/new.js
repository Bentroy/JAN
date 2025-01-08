"use strict";

let car = {
    name: "toyota",
};
/*assignment, building a simple calculator with html, css and javascript */

//Array Methods

//push adds one element to the array or adds elements to an empty array
let fruits = [];
fruits.push("apple", "banana", "mango", "orange", "pineapple");
console.log(fruits);



//pop basically removes the last element in the array
fruits.pop(2,1, "mango", "orange");
console.log(fruits);

//Shift removes the first element and brings the the others to a lower index
fruits.shift();
console.log(fruits);


//unshift add an element to the begining of an array
fruits.unshift("KIWI");
console.log(fruits);

//Splice adds, removes or replace an element on the array

//map 