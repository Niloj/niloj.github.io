'use strict';
//on site 
$(function () {
    // smooth scrolling for text rows
    $('.text-row-link, .down-button a, .tom-details a, .down-button-press a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top - 90
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });

    // smooth scrolling for full page rows
    $('.full-page-link, .down-button-photos a').bind('click', function () {
        $('html, body').stop().animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});