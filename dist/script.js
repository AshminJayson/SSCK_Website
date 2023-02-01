"use strict"

const primaryNav = document.querySelector('.primary-navigation');
const navToggle = document.querySelector('.nav-toggle')

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible')
    
    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    }
    else {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
})


const navLinks = document.querySelectorAll('.nav-link')

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () =>  {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    })
})

