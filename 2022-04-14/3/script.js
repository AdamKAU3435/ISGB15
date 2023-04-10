'use strict';

// Hämta formuläret från HTML-dokumentet
let form = document.querySelector("form");

// Lägg till en händelsehanterare för formulärets "submit" händelse
form.addEventListener("submit", validate);

// Hämta radio-knappen med värdet "fish" (i test-syfte)
let radio = document.querySelector("input[type=radio][value=fish]");

// Händelsehanterarfunktion för formulärets "submit" händelse
function validate(event) {
  try {
    // Hämta e-postadress-fältet från formuläret
    let email = document.querySelector("#email");

    // Om e-postadressen är kortare än 6 tecken, kasta ett undantag med ett felmeddelande och hänvisa till fältet.
    if (email.value.length < 6) {
      throw { element: email, message: "E-postadressen måste innehålla minst 6 tecken." };
    }
    email.style.border = "";

    // Hämta radioknappen med värdet "fish" från formuläret
    let knapp = document.querySelector("input[value=fish]");

    // Om radioknappen inte är markerad, kasta ett undantag med ett felmeddelande och hänvisa till knappen.
    if (!knapp.checked) {
      throw { element: knapp, message: "Knappen är inte ifylld." };
    }
    knapp.style.border = "";

    // Hämta tidsfältet från formuläret
    let klocka = document.querySelector("#klockslag");

    // Om det valda värdet i tidsfältet inte är "8", kasta ett undantag med ett felmeddelande och hänvisa till fältet.
    if (klocka.value !== "8") {
      throw { element: klocka, message: "Fel tid har valts." };
    }
    klocka.style.border = "";

    // Om allt är OK, skicka formuläret (skicka det till servern).
    event.target.submit();
  }
  catch (error) {
    // Om något av undantagen kastades, förhindra formuläret från att skickas och visa felmeddelandet för användaren.
    event.preventDefault();
    error.element.style.border = "1px solid red";
    document.querySelector("#error").textContent = error.message;
    //errorDiv.innerHTML = "";
    //errorDiv.append(error.message);
  }
}
