const panels = document.querySelectorAll('.panel');

// Add an event listener to the panels 
//array, and then remove the active 
//class from the panel that is clicked on.

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        removeActiveClasses();
        panel.classList.add('active');
    });
    }); 

// This function removes the 'active'
//class from all of the panels on the page.
// It does this by iterating over the panels 
// array and removing the 'active' class from each element.


function removeActiveClasses() {    
    panels.forEach((panel) => {
        panel.classList.remove('active');
    });
}
