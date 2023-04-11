'use strict';
//Koden här fungerar inte.

window.addEventListener("load", function() {

    let form = this.document.querySelector("form");
    form.addEventListener("submit", validate);

    function validate(event){
        event.preventDefault();
        let errorDiv = document.querySelector("#error");

        try{
            let person = document.querySelector("input[type=text]");
            console.log(person.value.length)
            if(person.value.length < 11){
                throw {element:person, message:"Personnummer är för kort!"}
            }
            errorDiv.textContent = "";
            //person.style.border = "";

            let select = document.querySelector("select");
            let storlek = document.querySelector("input[type=value]");

            console.log(storlek.value +" Värde för Storlek");
            if(storlek.value <= 39 && select.value > 1){
                throw {element:person, message:"Personnummer är för kort!"}
                //throw {element:select, message:"Vald lägenhet finns ej på detta våningsplan"}
            }
            
        }
        catch(error){
            event.preventDefault();
            error.element.style.border = "1px solid red";
            errorDiv.textContent = error.message;
        }
    }


  });
  

