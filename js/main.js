$(document).ready(function () {
    console.log('its working');

    $('#menuToggle').click(function () {
        console.log('was clicked')
        $('#menu').toggleClass('display-menu');
    });


});