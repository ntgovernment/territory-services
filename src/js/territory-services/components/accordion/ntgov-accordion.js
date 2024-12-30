$(document).ready(function() {
    const accordionTogglers = document.querySelectorAll(".accordion-toggler");

    if(accordionTogglers.length > 0) {
        accordionTogglers.forEach(function(toggler) {    
            var classNameToFind = 'accordion';
    
            toggler.querySelector("a.open").addEventListener("click",(e) => {
                e && e.preventDefault();
                var currentElement = toggler.nextElementSibling;
    
                while (currentElement && currentElement.classList.contains(classNameToFind)) {
                  // Do something with the currentElement, for example, add a class
                  $(currentElement.querySelector('.collapse')).collapse('show');
                  
                  // Move to the next sibling
                  currentElement = currentElement.nextElementSibling;
                }
            });

            
            toggler.querySelector("a.close").addEventListener("click",(e) => {
                e && e.preventDefault();
                var currentElement = toggler.nextElementSibling;

                while (currentElement && currentElement.classList.contains(classNameToFind)) {
                    // Do something with the currentElement, for example, add a class
                    $(currentElement.querySelector('.collapse')).collapse('hide');
                    
                    // Move to the next sibling
                    currentElement = currentElement.nextElementSibling;
                }
            });
    
        })
        
    } 
});