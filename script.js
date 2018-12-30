// var menu = document.querySelector('#menu');
var menu = $('#menu');
// var menu2 = document.querySelector('.menu2');
var menu2 = $('.menu2');
// var overlay = document.querySelector(".overlay");
var overlay = $(".overlay");
// var button = document.querySelector('.button');
var button = $('.button');

var modal = $('#modal');
var close = $('#close');

$(document).ready(function() {
    modal.css('visibility', 'visible');
});

close.on('click', function() {
    modal.css('visibility', 'hidden');
    modal.css('transition', '0s');
});

menu.on('click', function() {
    console.log('menu clicked!');
    menu2.addClass("on");
    overlay.addClass("on");
});

overlay.on('click', function() {
    menu2.removeClass("on");
    overlay.removeClass("on");
});

button.on('click', function() {
    menu2.removeClass("on");
    overlay.removeClass("on");

});
