
  // Hämta formuläret och lägg till en lyssnare på submit-eventet
  document.querySelector("form").addEventListener("submit", validate);

// Funktion som validerar formuläret
function validate(event) {
  // Förhindra att formuläret skickas till servern
  event.preventDefault();

  try {
    // Hämta email-inputen och kontrollera att värdet är minst 6 tecken långt
    let email = document.querySelector("#email");
    if (email.value.length < 6) {
      // Kasta ett fel-objekt med meddelande om att email-inputen måste innehålla minst 6 tecken
      throw { element: email, message: "E-postadressen måste innehålla minst 6 tecken." };
    }

    // Hämta radioknapparna och kontrollera att "fish" är vald
    const fishRadio = document.querySelector('input[value="fish"]');
    if (!fishRadio.checked) {
      // Kasta ett fel-objekt med meddelande om att "fish" måste väljas
      throw { element: fishRadio, message: "Välj 'Kontakta mig om fiske' för att fortsätta." };
    }

    // Hämta select-elementet och kontrollera att "klockan 8:00-8:30" är valt
    const klockslagSelect = document.querySelector("#klockslag");
    if (klockslagSelect.value !== "8") {
      // Kasta ett fel-objekt med meddelande om att "klockan 8:00-8:30" måste väljas
      throw { element: klockslagSelect, message: "Välj 'klockan 8:00-8:30' för att fortsätta." };
    }

    // Om ingen validerings-fel har kastats, skicka formuläret till servern
    event.target.submit();
  } catch (error) {
    // Markera det element som orsakade valideringsfelet med en röd kantlinje
    error.element.style.border = "1px solid red";
    // Visa felmeddelandet i div-elementet med id "error"
    document.querySelector("#error").textContent = error.message;
    // Förhindra att formuläret skickas till servern
    event.preventDefault();
  }
}
