//= require js/plugins/astro.min.js
//= require js/plugins/stickynav.js
//= require js/plugins/lazysizes.min.js

// Dropdown menu
astro.init();

// Sticky navigation
var stickyNavigation = stickyNav(document.querySelector('#nav'), 28, 'small');

// Dropdownmenu close on hashchange
window.addEventListener('hashchange', function() {
    document.querySelector('#nav > ul').classList.remove('active');
    document.querySelector('#nav > a').classList.remove('active');
});

// Click / touch
var clickEvent = (function() {
    if ('ontouchstart' in document === true)
        return 'touchstart';
    else
        return 'click';
});

// Contact buttons form subject changer
var contactButtons = document.querySelectorAll("a.button[href='/#contact']");
for (i = 0; i < contactButtons.length; i++) { 
    contactButtons[i].addEventListener(clickEvent(), function(e) {
        if (e.target.hash == '#contact') {
            if (scroll) {
                scroll.animateScroll(document.querySelector(e.target.hash));
            }
            document.querySelector('#contact select[name="onderwerp"').value = e.target.text
        }
    });
}







