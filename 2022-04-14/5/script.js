'use strict'

// Creating an array of car data objects
let data = [
    {namn: "Volvo", modell: "V70", typ: "manuell", pris: 39999},
    {namn: "Volvo", modell: "720", typ: "manuell", pris: 59999},
    {namn: "Volvo", modell: "XC40", typ: "manuell", pris: 299999},
    {namn: "Volvo", modell: "V70", typ: "manuell", pris: 399999},
];

// Generating a list of car information on the webpage
function generateCarInformation(){
    // Finding the element with ID "list" on the webpage
    let list = document.querySelector("#list");
    // Creating an unordered list element to hold the car information
    let ul = document.createElement("ul");

    // Looping through each car in the data array
    for(let i = 0 ; i <data.length; i++){
        // Creating a new list item for the car
        let li = createCarListItem(i + 1);
        // Adding the car information to the list item
        createCarInformation(ul,li, data[i]);
    }
    // Adding the list of cars to the webpage
    list.appendChild(ul);
}

// Creating a list item for a car
function createCarListItem(id){
    // Creating a new list item element
    let li = document.createElement("li");
    // Adding a class and data ID attribute to the list item
    li.setAttribute("class", "car car-container");
    li.setAttribute("data-id", "car-" + id);

    return li;
}

// Adding the car information to a list item
function createCarInformation(list, listItem, data){
    // Adding text content to the list item with car information
    listItem.textContent = (
        "Namn: " + data.namn + " " + data.modell + " " + 
        "Typ: " + data.typ + " " +
        "Pris: " + data.pris
    );

    // Adding the list item with car information to the unordered list
    list.appendChild(listItem);

}

// Calling the function to generate the list of car information on the webpage
generateCarInformation();
