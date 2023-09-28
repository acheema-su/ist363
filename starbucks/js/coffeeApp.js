//console.log("coffeeApps!");

const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList = document.getElementById("coffeeList");
const priceRanges = document.getElementById("priceRanges");
let filteredCoffees = [...coffees];
let sortDirection = "ascending";

const buildTextElement = (element, className, content) => {
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
 }
const displayList = (arr) => {
    purgeList();
    arr.forEach( (coffee) => {
   
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
     
    
     
        const coffeeTitle = buildTextElement("h2", "coffeeTitle", title);
     
     
        const coffeePrice = buildTextElement("h3", "coffee-price", `$${price}`);
     
        const coffeeDescription = buildTextElement("p", "coffee-description", description);

        coffeeArticle.appendChild(coffeeImage);
        coffeeArticle.appendChild(coffeeTitle);
        coffeeArticle.appendChild(coffeePrice);
        coffeeArticle.appendChild(coffeeDescription);
     
        coffeeList.appendChild(coffeeArticle);
     
     
     });

}
const getFilteredCoffees = (minValue,maxValue) => {
    const filteredArr = coffees.filter((coffee) => {
        const { price } = coffee;
        return price >= minValue && price <= maxValue;
    })
    console.log({filteredArr})
    return filteredArr;    
}
const purgeList = () => {
    coffeeList.innerHTML = "";
 
}

const sortListByDirection = (direction, arr)  => {
    //console.log({direction});
    sortDirection = direction;
    const sortedListArr = [...arr].sort((a,b) => {
        if (direction == 'ascending' ) {
            if (a.title < b.title) {
                return -1;
            }

        } else {
            if (a.title > b.title) {
                return -1;
            }
        }
    });
    return sortedListArr;
}

ascendingBtn.addEventListener("click", function(){
    //console.log("ascending button has been clicked");
    //purgeList();
    const sortedList  = sortListByDirection ("ascending", filteredCoffees);
   // console.log({sortedList});
    displayList (sortedList);

});
 
descendingBtn.addEventListener("click", function(){
    //console.log("descending button has been clicked");
    //purgeList ();
    const sortedList = sortListByDirection ("descending", filteredCoffees);
    //console.log({sortedList});
    displayList (sortedList);

 });

 priceRanges.addEventListener("change", (event) => {
    console.log("Price Range has been changed");
    console.log(event.target.value);

    const selectedRange = event.target.value;
    if (selectedRange === "all") {
        //purgeList();
        //displayList(coffees);

        filteredCoffees = sortListByDirection(sortDirection, [...coffees]);

    }
    else{
        
        const [minValue, maxValue] = selectedRange.split("-");
        const tempFilteredCoffees = getFilteredCoffees(minValue, maxValue);

        filteredCoffees = sortListByDirection(sortDirection, tempFilteredCoffees);

       // purgeList();
        
    }
    //"2-3" becomes [2,3]
    displayList(filteredCoffees);


 })

//initilization
const sortedStarterList  = sortListByDirection ("ascending", filteredCoffees);
    displayList (sortedStarterList);


 displayList(coffees);

 