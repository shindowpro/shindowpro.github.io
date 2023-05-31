/*------------------------
Banner Slider
--------------------------*/
(function (jQuery) {
    "use strict";
    if (jQuery('.iq-topten').length > 0) {
        callVerticleSlider();
    }
})(jQuery);
function callVerticleSlider() {
    let toptenSlider = jQuery('.iq-topten');
    toptenSlider.each(function () {
        if (jQuery(this).find('.top-ten-slider').hasClass('slick-slider')) return;
        let top_ten_slider = '#' + jQuery(this).find('.top-ten-slider').attr('data-rand');
        let top_ten_slider_nav = '#' + jQuery(this).find('.top-ten-slider-nav').attr('data-rand');

        jQuery(top_ten_slider).slick({
            slidesToShow: 1,
            arrows: false,
            fade: true,
            asNavFor: top_ten_slider_nav,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        asNavFor: false,
                        arrows: true,
                        nextArrow: '<button class="NextArrow"><i class="ri-arrow-right-s-line"></i></button>',
                        prevArrow: '<button class="PreArrow"><i class="ri-arrow-left-s-line"></i></button>',
                    }
                }
            ]
        });
        jQuery(top_ten_slider_nav).slick({
            slidesToShow: 3,
            asNavFor: top_ten_slider,
            dots: false,
            arrows: true,
            infinite: true,
            vertical: true,
            verticalSwiping: true,
            centerMode: false,
            nextArrow: '<button class="NextArrow"><i class="ri-arrow-down-s-line"></i></button>',
            prevArrow: '<button class="PreArrow"><i class="ri-arrow-up-s-line"></i></button>',
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        asNavFor: false,
                    }
                },
            ]
        });
    });
}