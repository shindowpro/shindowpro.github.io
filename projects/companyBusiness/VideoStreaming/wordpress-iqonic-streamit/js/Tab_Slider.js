/*------------------------
Banner Slider
--------------------------*/
(function (jQuery) {
    "use strict";
    if (jQuery('.iq-trending-tabs').length > 0) {
        callTabSlider();
    }
})(jQuery);
function callTabSlider() {
    let tabSlider = jQuery('.iq-trending-tabs');
    tabSlider.each(function () {
        let trendingSlider = '#' + jQuery(this).find('.trending-slider').attr('data-rand');
        let trendingSliderNav = '#' + jQuery(this).find('.trending-slider-nav').attr('data-rand');
        jQuery(trendingSlider).slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: true,
            fade: true,
            draggable: false,
            swipe: false,
            touchMove: false,
            asNavFor: trendingSliderNav,
            nextArrow: '<a href="#" class="slick-arrow slick-next"><i class= "fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow slick-prev"><i class= "fa fa-chevron-left"></i></a>',
        });
        jQuery(trendingSliderNav).slick({
            slidesToShow: 5,
            slidesToScroll: 1,
            asNavFor: trendingSlider,
            dots: false,
            arrows: false,
            infinite: true,
            centerMode: true,
            centerPadding: 0,
            focusOnSelect: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        });
    });
}