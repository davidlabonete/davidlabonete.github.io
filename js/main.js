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

$(document).ready(function () {
    // Define the marquee behavior
    function startMarquee() {
        var $container = $('.marquee-container');
        var $content = $('.marquee-content');

        // Duplicate content for seamless scrolling
        $content.append($content.html());

        // Calculate animation duration based on content width
        var contentWidth = $content.width();
        var animationDuration = contentWidth / 50; // Adjust speed by changing '50'

        // Animate the scrolling
        $content.css({ left: '0%' }).animate(
            { left: `-${contentWidth / 2}px` },
            animationDuration * 1000,
            'linear',
            function () {
                startMarquee(); // Loop animation
            }
        );
    }

    // Initialize the marquee
    startMarquee();
});