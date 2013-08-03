var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);

$(function() {
    $('.projectSlide').kwicks({
        maxSize: '35%',
        spacing : 0,
        behavior: 'menu',
        easing: 'easeInQuad'
    });
});
$(document).ready(function(){

    $('.projectSlide li').css({
        height: windowHeight
    });
    $('a.navOpener').click(function(){
        if($(this).hasClass('active')){
            $('.leftMenu').animate({
                left: '-150px'
            },800,'easeOutBounce',function(){
                $('.navOpener').removeClass('active');
            })
        }else{
            $('.leftMenu').animate({
                left: 0
            },800,'easeOutBounce',function(){
                $('.navOpener').addClass('active');
            })
        }
        return false;
    })

})
/*var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);
var nLi = $('.projectSlide li').length;*/

