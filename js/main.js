var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projects').height(windowHeight);
$('.projectSlide').css({
    height:windowHeight
});


$('.projectSlide').mouseenter(function(){
    $(this).stop().animate({
        width:'40%'
    },slideSpeed);
})
$('.projectSlide').mouseleave(function(){
    $(this).stop().animate({
        width:'15%'
    },slideSpeed);
})
