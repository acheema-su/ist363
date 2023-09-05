// console.log("js has been loaded");

// variables, methods and functions

// 1. variables 
const myName = "Abdur Cheema" ;
console.log(myName);
const myAge = "20" ;
const myCity = "NYC";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;


console.log(introduction);



// 2.methods

const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
console.log(menuBtn);


// "event name", callback function
menuBtn.addEventListener("click", function() {
   // console.log("menu button has been clicked");
   overlay.classList.add("active");
}); // end of menuBtn click event



