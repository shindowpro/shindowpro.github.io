/*------------------------
Banner Slider
--------------------------*/
(function (jQuery) {
    "use strict";
    callBannerSlider(jQuery('.iq-home-banner-slider .home-slider'));
})(jQuery);

function callBannerSlider(item) {

    item.each(function () {
        let jQuerySlider = jQuery(this);
        if (jQuerySlider.hasClass('slick-slider')) return;
        jQuery(jQuerySlider).slick({
            cssEase: 'ease-in-out',
            lazyLoad: 'progressive',
            dots: false,
            arrows: jQuerySlider.data("nav"),
            infinite: false,
            speed: jQuerySlider.data("speed"),
            infinite: jQuerySlider.data("infinite"),
            autoplay: jQuerySlider.data("autoplay"),
            autoplaySpeed: jQuerySlider.data("autoplay-speed"),
            prevArrow: '<div class="slick-nav prev-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
            nextArrow: '<div class="slick-nav next-arrow"><i></i><svg><use xlink:href="#circle"></svg></div>',
            responsive: [{
                breakpoint: 1024,
                settings: {
                    dots: true,
                    arrows: false,
                }
            }]
        }).slickAnimation();
        jQuery('.slick-nav').on('click touch', function (e) {

            e.preventDefault();

            let arrow = jQuery(this);

            if (!arrow.hasClass('animate')) {
                arrow.addClass('animate');
                setTimeout(() => {
                    arrow.removeClass('animate');
                }, 1600);
            }

        });
    });
}