/*
------------------------------------------------
Owl General
----------------------------------------------*/
(function (jQuery) {
    "use strict";
    callOwl();
})(jQuery);

function callOwl() {
    let loop = false,
        margin = 0,
        nav = false,
        autoplay = false,
        dots = false,
        responsive_desktop = 4,
        responsive_laptop = 3,
        stagePadding = 0,
        responsive_tab = 2,
        responsive_mobile = 1;

    jQuery('.owl-carousel-ajax').owlCarousel({
        loop: false,
        margin: 20,
        rewind: true,
        nav: true,
        navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            500: {
                items: 2
            },
            1000: {
                items: 4
            }
        }
    });
    jQuery('.owl-carousel').each(function () {
        nav = jQuery(this).data("nav") ? jQuery(this).data("nav") : nav;
        loop = jQuery(this).data("infinite") ? jQuery(this).data("infinite") : loop;
        dots = jQuery(this).data("dots") ? jQuery(this).data("dots") : dots;
        autoplay = jQuery(this).data("autoplay") ? jQuery(this).data("autoplay") : autoplay;
        stagePadding = jQuery(this).data('padding') ? jQuery(this).data('padding') : stagePadding;
        margin = jQuery(this).data('margin') ? jQuery(this).data('margin') : margin;

        responsive_desktop = jQuery(this).data("items") ? jQuery(this).data("items") : responsive_desktop;
        responsive_laptop = jQuery(this).data("items-laptop") ? jQuery(this).data("items-laptop") : responsive_laptop;
        responsive_tab = jQuery(this).data("items-tab") ? jQuery(this).data("items-tab") : responsive_tab;
        responsive_mobile = jQuery(this).data("items-mobile") ? jQuery(this).data("items-mobile") : responsive_mobile;



        jQuery(this).data("items-mobile")
        jQuery(this).owlCarousel({
            loop: loop,
            margin: margin,
            stagePadding: stagePadding,
            nav: nav,
            navText: ["<i class='ri-arrow-left-s-line'></i>", "<i class='ri-arrow-right-s-line'></i>"],
            dots: dots,
            autoplay: autoplay,

            responsive: {
                0: {
                    items: responsive_mobile
                },
                768: {
                    items: responsive_tab
                },
                1024: {
                    items: responsive_laptop
                },
                1200: {
                    items: responsive_desktop
                }
            }
        });
    });
}