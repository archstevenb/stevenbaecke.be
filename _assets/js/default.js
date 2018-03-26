//= require js/plugins/astro.min.js
//= require js/plugins/lazysizes.min.js

astro.init();


var selectEvents = (function() {
    if ('ontouchstart' in document === true)
        return 'touchstart';
    else
        return 'click';
})();


var dropdown = document.querySelector('#nav > ul');
dropdown.addEventListener(selectEvents, function() {
    dropdown.classList.remove('active');
    document.querySelector('#nav > a').classList.remove('active');
});



// Sticky Navigation
var stickyNav = function(nav, y, c) {

    // vars
    var nav = nav, y = y, c = c;
    var sticky = 0;

    // handler
    var eventHandler = function() {
        if (document.documentElement.scrollTop > y) {
            if (sticky === 0) {
                nav.classList.add(c);
                sticky = 1;
            }
        }
        else {
            nav.classList.remove(c);
            sticky = 0;
        }
    }

    // init
    stickyNav.init = function() {
        eventHandler();
        window.addEventListener('scroll', eventHandler, false);
    }

    return stickyNav.init();
}


var stickyNavigation = stickyNav(document.querySelector('#nav'), 28, 'small');


