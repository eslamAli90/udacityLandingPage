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
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

const navBarList = document.getElementById("navbar__list");
const sections = document.getElementsByTagName("section");
const fragment = document.createDocumentFragment();
const header = document.querySelector(".page__header");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * @description add class for hilighting the section in the viewport
 * @constructor
 * @param {array} itemLinks - each link in navBar list
 */
// ! Function to add class for hilighting the section in the viewport
let addActiveClass = (itemLinks) => {
  for (const section of sections) {
    if (
      section.getBoundingClientRect().top > 0 &&
      section.getBoundingClientRect().top < 250
    ) {
      section.classList.add("your-active-class");
      for (let itemLink of itemLinks) {
        if (itemLink.dataset.link === section.id) {
          itemLink.classList.add("active");
        } else {
          itemLink.classList.remove("active");
        }
      }
    } else {
      section.classList.remove("your-active-class");
    }
  }
};

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
let buildNavBarList = () => {
  // ! loop on sections in html page
  for (const section of sections) {
    // ! create item list for each link
    var listItem = document.createElement("li");
    //! add link to each section to each item list
    listItem.innerHTML = `<a  class=menu__link href=#${section.id} data-link=${section.id}>${section.dataset.nav}<a/>`;
    // ! add items list to the navegation bar
    fragment.appendChild(listItem);
    // ! Smooth Scroll to section on link click
    listItem.addEventListener("click", (event) => {
      event.preventDefault();
      section.scrollIntoView({ behavior: "smooth" });
    });
  }
  navBarList.append(fragment);
};

// ! Invoke Build Nav Function
buildNavBarList();
// Add class 'active' to section when near top of viewport
window.addEventListener("scroll", (event) => {
  var itemLinks = document.querySelectorAll(".menu__link");
  addActiveClass(itemLinks);
});

// Scroll to anchor ID using scrollTO event

let topButton = document.querySelector(".top");
window.addEventListener("scroll", (event) => {
  if (window.scrollY > 400) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
});

// ! Button for scrolling to top of the page
topButton.addEventListener("click", (event) => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu

// Scroll to section on link click

// Set sections as active

// Listen for scroll events

let counter;
window.addEventListener("scroll", () => {
  window.clearTimeout(counter);
  header.style.display = "block";
  counter = setTimeout(() => {
    header.style.display = "none";
  }, 4000);
});
