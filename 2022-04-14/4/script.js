function addClickListenersToButtons(){

// Hämtar inköpslistan från HTML-dokumentet.
let list = document.getElementById("list");

// Hämtar alla knappar med attributet "data-add" från HTML-dokumentet.
let buttons = document.querySelectorAll("[data-add]");

// Loopar genom alla knappar med attributet "data-add".
for (let i = 0; i < buttons.length; i++) {

  // Sparar aktuell knapp i variabeln button.
  let button = buttons[i];

  // Lägger till klick-lyssnare på knappen.
 

  button.addEventListener("click", function (event) {

    event.preventDefault(); // avbryt default-beteendet

    // Skapar ett nytt div-element som ska innehålla varan som lades till.
    let item = document.createElement("div");

    // Hämtar texten från knappens "data-add"-attribut och sätter den som text-innehåll i div-elementet.
    item.textContent = button.getAttribute("data-add");

    // Lägger till en mus-over-lyssnare på varan för att ändra dess font-weight till bold.
    item.addEventListener("mouseover", function () {
      item.style.fontWeight = "bold";
    });

    // Lägger till en mus-out-lyssnare på varan för att återställa dess font-weight.
    item.addEventListener("mouseout", function () {
      item.style.fontWeight = "";
    });

    // Skapar en knapp för att ta bort varan.
    let removeButton = document.createElement("button");
    removeButton.textContent = "-";

    // Lägger till klick-lyssnare på ta-bort-knappen för att ta bort varan från inköpslistan.
    removeButton.addEventListener("click", function () {
      item.remove();
    });

    // Lägger till ta-bort-knappen som ett child-element till varan.
    item.appendChild(removeButton);

    // Lägger till varan som ett child-element till inköpslistan.
    list.appendChild(item);
  });
}
  
}
addClickListenersToButtons();
