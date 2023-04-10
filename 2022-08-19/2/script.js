'use strict'

// Create an object called `oList` with several properties and methods related to creating an ordered list of gaming consoles.
let oList = {
  // Create a property called `divRef` that is set to the DOM element with an ID of `newContent`.
  divRef: document.querySelector("#newContent"),

  // Create a method called `myCreateElement` that takes an array of consoles as an argument.
  myCreateElement: function(consoles) {
    // Create an ordered list (`ol`).
    let ol = document.createElement("ol")

    // Log the number of consoles in the array to the console for debugging purposes.
    console.log(this.myNumberOfConsoles(consoles))

    // Iterate over each console in the array, create a list item (`li`) for each console, add the console's content to the list item, and append the list item to the ordered list.
    for (let i = 0; i < this.myNumberOfConsoles(consoles); i++) {
      let e = consoles[i]
      let li = document.createElement("li")
      li.innerHTML = e.innerHTML
      ol.appendChild(li)
    }

    // Append the ordered list to the `divRef` element.
    this.divRef.appendChild(ol)
  },

  // Create a method called `myNumberOfConsoles` that takes an array of consoles as an argument and returns the number of consoles in the array.
  myNumberOfConsoles(consoles) {
    return consoles.length
  },

  // Create a method called `myCallMethodToCreate`.
  myCallMethodToCreate() {
    // Select all DOM elements that have a `data-console` attribute of `modern` and save them to the `modernConsoles` variable.
    let modernConsoles = document.querySelectorAll("span[data-console=modern]")

    // Select all DOM elements that have a `data-console` attribute of `retro` and save them to the `retroConsoles` variable.
    let retroConsoles = document.querySelectorAll("span[data-console=retro]")

    // Call the `myCreateElement` method twice, once with the `modernConsoles` array and once with the `retroConsoles` array.
    this.myCreateElement(modernConsoles)
    this.myCreateElement(retroConsoles)
  },
}

// Call the `myCallMethodToCreate` method on the `oList` object, which creates the ordered lists of consoles.
oList.myCallMethodToCreate()
