$(function() {

    $('#my-menu').mmenu({
        extensions: [ 'widescreen', 'theme-black', 'effect-menu-slide', 'pagedim-black' ],
        navbar: {
            title: '<img src="../img/logo-1.svg" alt="Салон красоты Смитлер" style="width:128px; height:auto; position:relative; padding: 0">'
        },
        offCanvas: {
            position  : 'right'
        }
    });

    var api = $('#my-menu').data('mmenu');
    api.bind('opened', function(){
        $('.hamburger').addClass('is-active');
    }).bind('closed', function(){
        $('.hamburger').removeClass('is-active');
    });
});