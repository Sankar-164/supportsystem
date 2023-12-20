$(document).ready(function() {
    if (!Raphael.svg) {
        window.location = 'visual\notsupported.html';
    }

    // suppress select events
    $(window).bind('selectstart', function(event) {
        event.preventDefault();
    });

    // initialize visualization
    Panel.init();
    Controller.init();
});
