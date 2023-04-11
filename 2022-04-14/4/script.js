    'use strict';

    // Add click event listeners to all buttons with a data-add attribute
    function addClickListenerstoButtons() {

        // Get the list that will contain all the items
        let list = document.getElementById("foodlist");

        // Select all the buttons that have a data-add attribute
        let buttons = list.querySelectorAll("[data-add]");

        // Loop through each button
        for (let i = 0; i < buttons.length; i++) {

            // Get the current button
            let button = buttons[i];

            // Add a click event listener to the current button
            button.addEventListener("click", function (event) {
                event.preventDefault(); // Prevent the default button click behavior

                // Create a new div element for the new item
                let item = document.createElement("div");

                // Get the value of the data-add attribute from the clicked button
                let addValue = button.getAttribute('data-add');

                // Create a new text node with the addValue and append it to the item div
                let text = document.createTextNode(addValue);
                item.appendChild(text);

                // Add a mouseover event listener to the item div to change the font weight to bold
                item.addEventListener("mouseover", function () {
                    item.classList.add('font-weight-bold');
                });

                // Add a mouseout event listener to the item div to remove the bold font weight
                item.addEventListener("mouseout", function () {
                    item.classList.remove('font-weight-bold');
                });

                // Create a new button to remove the item
                let removeButton = document.createElement("button");
                removeButton.textContent = "-";

                // Add a click event listener to the remove button to remove the item
                removeButton.addEventListener("click", function () {
                    item.remove();
                });

                // Append the remove button to the item div
                item.appendChild(removeButton);

                // Append the item div to the list
                list.appendChild(item);
            });
        }
    }

    // Call the function to add click event listeners to the buttons
    addClickListenerstoButtons();
