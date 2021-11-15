// quando clicco sull'amburger menu appare il menu active
const hamburger = document.querySelector('.fa-bars');
console.log(hamburger);

const hamburgerMenu = document.querySelector('.hamburger-menu');
console.log(hamburgerMenu);

const xMenu = document.querySelector('.fa-times');

hamburger.addEventListener('click',
    function() {
        const hamburgerMenu = document.querySelector('.hamburger-menu');
        hamburgerMenu.classList.add('active');
    }
);
xMenu.addEventListener('click',
    function() {
        const xMenu = document.querySelector('.fa-times');
        console.log(xMenu);
        hamburgerMenu.classList.remove('active');
    
    }
);