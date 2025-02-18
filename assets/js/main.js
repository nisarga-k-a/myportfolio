/*===== MENU SHOW =====*/ 
// Function to toggle the visibility of the menu on mobile devices
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    // Check if toggle and nav elements exist
    if(toggle && nav){
        // Add click event listener to toggle the 'show' class on the nav element
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
// Call showMenu function with specific IDs for the toggle and nav menu
showMenu('nav-toggle','nav-menu')

/*==================== REMOVE MENU MOBILE ====================*/
// Select all links in the navigation menu
const navLink = document.querySelectorAll('.nav__link')

// Function to close the mobile menu after clicking a link
function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // Remove the 'show' class from nav menu when a link is clicked
    navMenu.classList.remove('show')
}
// Add click event listener to each nav link to trigger the linkAction function
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
// Select all sections with an ID attribute for active link highlight
const sections = document.querySelectorAll('section[id]')

// Function to add an active class to the current section's link based on scroll position
const scrollActive = () =>{
    const scrollDown = window.scrollY

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58, // Offset for header height
              sectionId = current.getAttribute('id'),
              sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
        
        // Add active-link class if the section is in view
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add('active-link')
        }else{
            sectionsClass.classList.remove('active-link')
        }                                                    
    })
}
// Listen to scroll events to update active link in the nav menu
window.addEventListener('scroll', scrollActive)

/*===== SCROLL REVEAL ANIMATION =====*/
// Scroll reveal settings for animations on elements
const sr = ScrollReveal({
    origin: 'top', // Animation origin
    distance: '60px', // Animation distance
    duration: 2000, // Animation duration
    delay: 200, // Delay before animation starts
    // reset: true // Uncomment to make animations repeat on scroll
});

// Apply scroll reveal animations to specific elements with delays
sr.reveal('.home__data, .about__img, .skills__subtitle, .skills__text',{}); 
sr.reveal('.home__img, .about__subtitle, .about__text, .skills__img',{delay: 400}); 
sr.reveal('.home__social-icon',{ interval: 200}); 
sr.reveal('.skills__data, .work__img, .contact__input',{interval: 200}); 

/*===== DOM CONTENT LOADED EVENT LISTENER =====*/
// Event listener to add the 'visible' class to the .about__container after page load
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".about__container").classList.add("visible");
});

// Event listener to animate skill bars after page load
document.addEventListener("DOMContentLoaded", () => {
    const skillBars = document.querySelectorAll('.skills__bar');
    skillBars.forEach((bar) => {
      bar.classList.add('animate'); // Add 'animate' class to each skill bar
    });
});
