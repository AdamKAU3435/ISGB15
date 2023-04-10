'use strict';

function changeTextInDivs() {
    let newTextArray = Array("Ett", "Två", "Tre", "Fyra","Fem");

    // Hämtar alla div-element i container-fluid
    let divs = document.querySelectorAll(".container-fluid div");

    // Loopar över alla div-element
    for(let i = 0; i < divs.length; i++){
        // Tar bort alla barn-noder från div-elementet
        while (divs[i].firstChild) {
            divs[i].removeChild(divs[i].firstChild);
        }
        // Lägger till en ny textnod i div-elementet med texten från newTextArray
        divs[i].append(newTextArray[i]);
    }
}


changeTextInDivs();
