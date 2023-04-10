/*'use strict';

let oHeadings = {
    hRef : null,
    hTextRef : null,
    divRef : document.querySelector("div[class=container-fluid]"),

    checkNbr : function(nbr) {
        if(nbr >= 1 && nbr <= 6) {
            return true;
        }
        else{
            return false;
        }
    }
};

oHeadings.createHeadings = function (nbr) {
if(oHeadings.checkNbr == true){
    oHeadings.hRef = document.createElement("h"+nbr);
    console.log(oHeadings.hRef);
    oHeadings.hTextRef = document.createTextNode(nbr);
    oHeadings.divRef.appendChild(oHeadings.hTextRef);
    oHeadings.divRef.appendChild(oHeadings.hRef);
}
else{
    console.log("Felaktig indata!")
}

};

for(let i = 0; i < 8; i++){
oHeadings.createHeadings(i);
}*/

'use strict';

// Skapar ett objekt som innehåller information om rubrikerna.
let oHeadings = {
    hRef : null,  // Variabel som håller referensen till den nya skapade rubriken.
    hTextRef : null,  // Variabel som håller referensen till den nya skapade rubrikens text.
    divRef : document.querySelector("div[class=container-fluid]"),  // Referensen till <div> elementet där rubrikerna ska läggas till.

    // Funktion som kontrollerar att inparametern är en siffra mellan 1 och 6.
    checkNbr : function(nbr) {
        if(nbr >= 1 && nbr <= 6) {
            return true;
        }
        else{
            return false;
        }
    }
};

// Funktion som skapar rubriker och lägger till dem i <div> elementet.
oHeadings.createHeadings = function (nbr) {
    if(oHeadings.checkNbr(nbr) === true){  // Kollar om inparametern är mellan 1 och 6.
        oHeadings.hRef = document.createElement("h"+nbr);  // Skapar en ny rubrik av typen <h1> - <h6>.
        oHeadings.hTextRef = document.createTextNode(nbr);  // Skapar en textnod med rubrikens nummer.
        oHeadings.hRef.appendChild(oHeadings.hTextRef);  // Lägger till textnoden i rubriken.
        oHeadings.divRef.appendChild(oHeadings.hRef);  // Lägger till rubriken i <div> elementet.
    }
    else{
        console.log("Felaktig indata!")  // Skriver ut ett felmeddelande om inparametern inte är mellan 1 och 6.
    }

};

// Loopar igenom alla siffror från 1 till 6 och skapar rubriker med respektive siffra som text.
for(let i = 1; i <= 6; i++){
    oHeadings.createHeadings(i);  // Anropar funktionen som skapar rubriker och lägger till dem i <div> elementet.
}

