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
    $('a.team').click(function(){
        $('.mCSB_container').scrollTo( '#teamPage', 1000, {axis:'x'} );
        return false;
    })
    /*$(window).load(function(){
        $("body").mCustomScrollbar({
            horizontalScroll: true
        });
    });*/

})
/*var windowHeight = $(window).height();
var windowWidth = $(window).width();
var PS = 5;
var slideSpeed = 800
var projectSlideWidth = windowWidth/PS;
$('.projectSlide').height(windowHeight);
var nLi = $('.projectSlide li').length;*/

