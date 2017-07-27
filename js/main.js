/**
 * Fullpage.js
 */
$(document).ready(function () {
    $('#fullpage').fullpage({
        //Navigation
        anchors: ['home', 'bio', 'etudes', 'projets', 'contact', 'credits'],
        slidesNavigation: true,
        lazyLoading: true,
        verticalCentered: true
    });
});