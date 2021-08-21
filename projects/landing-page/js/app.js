/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active

Const sections = document.querySelectorAll('section')
Const my Ul = document.getElementById("navbar__list")
}  for (let i=0; I < sections.length; i++){
let newLi = document.creatElement("li")
let secName =
sections[i].getAttribute('data-nav);
}
let secLink = sections[i].getAttribute('id');
listUl.innerHTML = '< a class =
'menu__link'href = '#${secLink}'>$
{secName} </a>';
myUl.appendChild(listUl);
}
document.addEventListner('scroll, function ());

