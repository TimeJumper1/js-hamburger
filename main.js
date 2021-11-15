// quando clicco sull'amburger menu appare il menu active
const hamburger = document.getElementsByClassName('fas fa-bars');
console.log(hamburger);

const hamburgerMenu = document.getElementsByClassName('hamburger-menu');
console.log(hamburgerMenu);


hamburger[0].addEventListener('click',
    function() {
        const hamburgerMenu = document.getElementsByClassName('hamburger-menu');
        hamburgerMenu[0].classList.toggle('active');
        const xMenu = document.getElementsByClassName('');
    }
);
