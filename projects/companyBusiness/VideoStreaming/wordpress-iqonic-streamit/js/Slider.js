/*------------------------
Banner Slider
--------------------------*/
(function (jQuery) {
    "use strict";
    callSlider(jQuery('.favorites-slider'));
})(jQuery);
// Call Slider Function  
function callSlider(item) {
    item.each(function () {
        var jQuerySlider = jQuery(this);
        if (jQuerySlider.hasClass('slick-slider')) return;
        jQuerySlider.slick({
            dots: false,
            arrows: jQuerySlider.data("nav"),
            infinite: jQuerySlider.data("loop"),
            speed: jQuerySlider.data("speed"),
            centerPadding: '100px',
            autoplay: jQuerySlider.data("autoplay"),
            autoplaySpeed: jQuerySlider.data("autoplay-speed"),
            slidesToShow: jQuerySlider.data("items"),
            nextArrow: '<a href="#" class="slick-arrow animated slick-next"><i class= "fa fa-chevron-right"></i></a>',
            prevArrow: '<a href="#" class="slick-arrow animated slick-prev"><i class= "fa fa-chevron-left"></i></a>',
            responsive: [
                {
                    breakpoint: 1601,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-laptop-lg"),
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1366,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-laptop"),
                        infinite: true,
                        dots: false
                    }
                },
                {
                    breakpoint: 1199,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-tab")
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-mobile")
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: jQuerySlider.data("items-mobile-sm"),
                        arrows: false
                    }
                },

            ]
        });
    });
}