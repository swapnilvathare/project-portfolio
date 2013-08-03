var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
var nPages = $('.page').length;
var bodyWidth = windowWidth*nPages;
$('.projectSlide').height(windowHeight);

$(document).ready(function(){

    $('body').css({
        height:windowHeight
//        width:bodyWidth
    });
    $('.page').css({
        height:windowHeight,
        width:windowWidth
    });
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
    });
    $(function() {
        $('.projectSlide').kwicks({
            maxSize: '35%',
            spacing : 0,
            behavior: 'menu',
            easing: 'easeInQuad'
        });
    });
    $('.mainMenu li:first-child').addClass('active');
    $('.mainMenu a').click(function(e){
        e.preventDefault();
        var targetLink = $(this).attr('href');
        $('.mainMenu li').removeClass('active');
        $(this).parents('li').addClass('active');
        $("body").mCustomScrollbar("scrollTo",targetLink);
        $('.leftMenu').animate({
            left: '-150px'
        },800,'easeOutBounce',function(){
            $('.navOpener').removeClass('active');
        })
    });
})
/*var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);
var nLi = $('.projectSlide li').length;*/

