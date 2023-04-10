'use strict'
function ConsoleIsModernOrRetro() {
    // Get all td elements with data-console attribute
    let tdRefs = document.querySelectorAll("td[data-console]")
    
    // Loop through all the td elements
    for(let i = 0; i<tdRefs.length; i++) {
        let td = tdRefs[i]
        
        // Create a text node with the value of the data-console attribute
        let tn = document.createTextNode(td.dataset.console)
        
        // If the td element already has a child node, replace it with the new text node
        if(td.firstChild != null) {
            td.replaceChild(tn, td.firstChild)
            continue
        }
        // If the td element does not have a child node, append the new text node to it
        td.appendChild(tn)
    }  
}

// Call the function to execute the code
ConsoleIsModernOrRetro();
