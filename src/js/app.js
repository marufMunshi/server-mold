/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});


const hamburgerMenu = document.querySelector('.hamburger-menu');
const menuLink = document.querySelector('.menu-link');

hamburgerMenu.addEventListener('click', function() {
    menuLink.classList.toggle('hidden-toggle');
    // console.log('clicked');
})
