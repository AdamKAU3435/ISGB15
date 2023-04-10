'use strict'

window.addEventListener("load", function() {

    let form = this.document.querySelector("form");
    form.addEventListener("submit", validate);

    function validate(event){
        event.preventDefault();
        console.log("Fungerar!!")

        try{
            let person = document.querySelector("input[type=text]");
            console.log(person.value.length)
            if(person.value.length < 11){
                throw {element:person, message:"Personnummer är för kort!"}
            }
            let errorDiv = document.querySelector("#error");
            errorDiv.textContent = "";
            person.style.border = "";

            /*let select = document.querySelector("#floor");
            let storlek = document.querySelector("input[type=value");
            let våning = document.querySelector("select option");
            if(storlek < 39 && option.value > 1){
                throw {element: select, message:"Vald lägenhet finns ej på detta våningsplan"}
            }*/
            
        }
        catch(error){
            event.preventDefault();
            error.element.style.border = "1px solid red";
            let errorDiv = document.querySelector("#error");
            errorDiv.textContent = error.message;
        }
    }


  });
  

