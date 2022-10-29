document.addEventListener('DOMContentLoaded', function () {

    // MENU
    if (document.querySelector('nav')) {

        function toggleMenu() {
            if (!menuButton.classList.contains('active')) {
                menuButton.classList.add('active');
                links.classList.add('open');
                links.classList.remove('visually-hidden');
            } else {
                closeMenu();
            }
        }

        function closeMenuOnOutsideClick(event) {
            if (!links.contains(event.target) && !menuButton.contains(event.target)) {
                closeMenu();
            }
        }

        function closeMenu() {
            menuButton.classList.remove('active');
            links.classList.add('visually-hidden');
            links.addEventListener("animationend", function () {
                links.classList.remove('open');
            }, false);
        }

        var menuButton = document.querySelector('.menu-button');
        var links = document.querySelector('nav').querySelector('.links');

        menuButton.addEventListener("click", toggleMenu, false);
        document.addEventListener('click', closeMenuOnOutsideClick, false);
        document.addEventListener('touchstart', closeMenuOnOutsideClick, false);
    }

    // SLIDER
    if (document.querySelector('.slider')) {
        setTimeout(function() {

            let logosWidth = document.querySelector('.slider .logos').offsetWidth;
            document.querySelector('.slider').animate([
                // keyframes
                {transform: 'translateX(0)'},
                {transform: 'translateX(-' + logosWidth + 'px)'}
            ], {
                // timing options
                duration: 25000,
                iterations: Infinity
            });

            let logos = document.querySelector(".slider .logos").cloneNode(true);
            document.querySelector('.slider').appendChild(logos);

        }, 20);
    }

});
