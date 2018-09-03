/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
particlesJS.load('particles-js', 'particles.json', function() {
    console.log('callback - particles.js config loaded');
});


const hamburgerMenu = document.querySelector('.touch-nav__hamburger-menu');
const menuLink = document.querySelector('.touch-nav__menu-link');

hamburgerMenu.addEventListener('click', function() {
    menuLink.classList.toggle('hidden-toggle');
})

// slick

$('.client-review__slider').slick({
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 3000,
    cssEase: 'ease-in',
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    mobileFirst: true,
    responsive: [
      {
        breakpoint: 409,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 2,
        }
      },
    ]
});

const header = document.querySelector('#header');
console.log(header.children[2].childNodes[1]);
window.addEventListener('scroll', (e) => {
    if(window.scrollY >= (header.offsetHeight - 200) ) {
        header.children[1].classList.add('touch-nav--sticky');
        header.children[2].childNodes[1].classList.add('touch-nav--sticky');
    } else {
        header.children[1].classList.remove('touch-nav--sticky');
        header.children[2].childNodes[1].classList.remove('touch-nav--sticky');
    }
});

// console.log(header.children);

