var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);

$(function() {
    $('.projectSlide').kwicks({
        maxSize: '50%',
        spacing : 0,
        behavior: 'menu',
        easing: 'easeInQuad'
    });
});
$(document).ready(function(){

    $('.projectSlide li').css({
        height: windowHeight
    });

})
/*var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);
var nLi = $('.projectSlide li').length;*/

