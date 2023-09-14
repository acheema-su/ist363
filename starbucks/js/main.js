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
//console.log(menuBtn);


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


const coffees = [
   {
      name: "Mocha",
      price: 3.99,
      description: "This is a delicious cup of coffee",
      image: {
         fileName: "coffee.jpg",
         width: 630,
         height: 630,
         altText: "A cup of coffee."
      }
}
,
{

   name: "Latte",
   price: 3.99,
   description: "This is a delicious cup of coffee",
   image: {
      fileName: "coffee.jpg",
      width: 630,
      height: 630,
      altText: "A cup of coffee."
   }
}
,
{
   name: "Espresso",
   price: 3.99,
   description: "This is a delicious cup of coffee",
   image: {
      fileName: "coffee.jpg",
      width: 630,
      height: 630,
      altText: "A cup of coffee."
   }
}

];


//console.log(coffees[0]);


coffees.forEach(function(coffee) {
   
   //const coffeeTitle = coffee;
   //const coffeeSecondaryHeadline = document.createElement("h2");
  // coffeeSecondaryHeadline.textContent = coffeeTitle;
//document.body.appendChild(coffeeSecondaryHeadline);


//1. deconstruct the coffee object
const {name, price, description, image} = coffee;


//2.create the html elements
const coffeeArticle = document.createElement("article")

const coffeeImage = document.createElement("img")
coffeeImage.src = `images/${image.fileName}`;

const coffeeName = document.createElement("h2");
coffeeImage.textContent = name;
coffeeImage.width = image.width;
coffeeImage.height = image.height;
coffeeImage.alt = image.altText;


const coffeePrice = document.createElement("h3");
coffeePrice.textContent = price;

const coffeeDescription = document.createElement("p");
coffeeDescription.textContent = description;


coffeeArticle.appendChild(coffeeImage);
coffeeArticle.appendChild(coffeeName);
coffeeArticle.appendChild(coffeePrice);
coffeeArticle.appendChild(coffeeDescription);


document.body.appendChild(coffeeArticle);


});
