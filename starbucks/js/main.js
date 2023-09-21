// console.log("js has been loaded");

// variables, methods and functions

// 1. variables 
const myName = "Abdur Cheema" ;
//console.log(myName);
const myAge = "20" ;
const myCity = "NYC";

const introduction = `Hi, my name is ${myName}, I am ${myAge} years old and I live in ${myCity}.`;


//console.log(introduction);



// 2.methods

const menuBtn = document.getElementById("menuBtn");
const overlay = document.getElementById("overlay");
const closeBtn = document.getElementById("closeBtn");
const coffeeList = document.getElementById("coffeeList");
const ascendingBtn = document.getElementById("ascendingBtn")
const descendingBtn = document.getElementById("descendingBtn")

//console.log(menuBtn);

function purgeList(){
   coffeeList.innerHTML = "";

}

function sortList(sortDirection) {
   console.log({sortDirection});
}

ascendingBtn.addEventListener("click", function(){
   console.log("ascending button has been clicked");
   purgeList();
   sortList ("ascending");

})

descendingBtn.addEventListener("click", function(){
   console.log("descending button has been clicked");
   purgeList ();
   sortList ("descending");
})


// "event name", callback function
menuBtn.addEventListener("click", function() {
   // console.log("menu button has been clicked");
   overlay.classList.add("active");
}); // end of menuBtn click event

closeBtn.addEventListener("click", function(){
   overlay.classList.remove("active");
}); // end of closeBtn click event


const coffeeName = "Mocha";
const coffeeHeadline = document.createElement("h2");
coffeeHeadline.textContent = coffeeName;
//document.body.appendChild(coffeeHeadline);


//objects

const coffee = {
   name: "Mocha",
   price: 3.99,
   description: "This is a delicious cup of coffee"
};

//console.log(coffee.description);
const coffeeObjHeadline = document.createElement("h2");
coffeeObjHeadline.textContent = coffee.name;
//document.body.appendChild(coffeeObjHeadline);


// const coffees = [
//    {
//       name: "Mocha",
//       price: 3.99,
//       description: "This is a delicious cup of coffee",
//       image: {
//          fileName: "coffee.jpg",
//          width: 630,
//          height: 630,
//          altText: "A cup of coffee."
//       }
// }
// ,
// {

//    name: "Latte",
//    price: 3.99,
//    description: "This is a delicious cup of coffee",
//    image: {
//       fileName: "coffee.jpg",
//       width: 630,
//       height: 630,
//       altText: "A cup of coffee."
//    }
// }
// ,
// {
//    name: "Espresso",
//    price: 3.99,
//    description: "This is a delicious cup of coffee",
//    image: {
//       fileName: "coffee.jpg",
//       width: 630,
//       height: 630,
//       altText: "A cup of coffee."
//    }
// }

// ];


//console.log(coffees[0]);

function buildTextElement(element, className, content){
   const newElement = document.createElement(element);
   newElement.classList.add(className);
   newElement.textContent = content;
   return newElement;
}

const sortedCoffees = [...coffees].sort(function(a,b) {

if (a.title < b.title) {
   return -1;
}
if (a.title > b.title) {
   return 1;
}
if (a.title === b.title) {
   return 0;
}

})




coffees.forEach(function(coffee) {
   
   //const coffeeTitle = coffee;
   //const coffeeSecondaryHeadline = document.createElement("h2");
  // coffeeSecondaryHeadline.textContent = coffeeTitle;
//document.body.appendChild(coffeeSecondaryHeadline);


//1. deconstruct the coffee object
const {title, price, description, image} = coffee;


//2.create the html elements
const coffeeArticle = document.createElement("article")
coffeeArticle.classList.add("coffee-item");

const coffeeImage = document.createElement("img")
coffeeImage.src = `images/${image.fileName}`;
coffeeImage.textContent = title;
coffeeImage.width = image.width;
coffeeImage.height = image.height;
coffeeImage.alt = image.altText;

// const coffeeTitle = document.createElement("h2");
// coffeeTitle.classList.add("coffee-title");
// coffeeTitle.textContent = title;


// const coffeePrice = document.createElement("h3");
// coffeePrice.classList.add("coffee-price")
// coffeePrice.textContent = `$${price}`;

const coffeeDescription = document.createElement("p");
coffeeDescription.classList.add("coffee-description")
coffeeDescription.textContent = description;


const coffeeTitle = buildTextElement("h2", "coffeeTitle", title);


const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);


coffeeArticle.appendChild(coffeeImage);
coffeeArticle.appendChild(coffeeTitle);
coffeeArticle.appendChild(coffeePrice);
coffeeArticle.appendChild(coffeeDescription);

coffeeList.appendChild(coffeeArticle);


});

//basic array 
//const basicCoffees = ["mocha","latte", "espressor"];
//basicCoffees.forEach(function(basicCoffee){
  // console.log({basiccoffee});
//});

