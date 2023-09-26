//console.log("coffeeApps!");

const ascendingBtn = document.getElementById("ascendingBtn");
const descendingBtn = document.getElementById("descendingBtn");
const coffeeList = document.getElementById("coffeeList");


const purgeList = () => {
    coffeeList.innerHTML = "";
 
}

const sortListByDirection = (direction, arr)  => {
    console.log({direction});
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
function buildTextElement(element, className, content){
    const newElement = document.createElement(element);
    newElement.classList.add(className);
    newElement.textContent = content;
    return newElement;
 }
const displayList = (arr) => {
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


ascendingBtn.addEventListener("click", function(){
    //console.log("ascending button has been clicked");
    purgeList();
    const sortedList  = sortListByDirection ("ascending", coffees);
    console.log({sortedList});
    displayList (sortedList);

});
 
descendingBtn.addEventListener("click", function(){
    //console.log("descending button has been clicked");
    purgeList ();
    const sortedList = sortListByDirection ("descending", coffees);
    console.log({sortedList});

    displayList (sortedList);

 });

 displayList(coffees);
