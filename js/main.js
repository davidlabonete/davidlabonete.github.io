var el = document.scrollingElement || document.documentElement;
var header_height = 80;
var sticky_header_height = $('#sticky-header').outerHeight();
var scroll_offset = header_height / 2;

$(window).on('load resize scroll', function(){
    if (el.scrollTop >= scroll_offset){
        $('#sticky-header').removeClass('fadeOutUp').css('display', 'flex').addClass('fadeInDown');;
    } else {
        $('#sticky-header').removeClass('fadeInDown').addClass('fadeOutUp');
    }
});