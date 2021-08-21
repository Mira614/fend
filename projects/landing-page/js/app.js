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


//global variable for ul
const navbarUl = document.getElementById(‘navbar__list’);

//global variable for sections
const sections = document.querySelectorAll(‘section’);
for(let i =1; i <= sections.length; i++) {

//defining variables

const fragment = document.createDocumentFragment();

const list =document.createElement('li');

const anchor = document.createElement('a');

let dataNav = section.getAttribute('data-nav');

anchor.setAttribute('href', `"#section${sections.length}"`);
//appending

anchor.innerHTML = dataNav;

anchor.classList.add('menu__link');

list.appendChild(anchor);

fragment.appendChild(list);
//eventlistener to scroll when clicked

const sections = document.querySelectorAll('section');

anchor.addEventListener('click', function(event){

    event.preventDefault()
