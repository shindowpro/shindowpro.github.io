/*------------------------
Tab On Change Class
--------------------------*/
(function (jQuery) {
    "use strict";
    callTab();

    jQuery('.iq-tv_show-episodes').one('click', function () {
        var btn = jQuery(this);
        var season_no = 0;
        var episode = jQuery(this).data('episodes');
        var seasons = jQuery(this).data('')
        var target = btn.parents('.trending-custom-tab').find('.episodes-contens');
        var data = {
            'action': 'loadmore_tvshow_episodes',
            'data': episode,
            'season': season_no
        };
        jQuery.ajax({
            url: streamit_loadmore_params.ajaxurl, // AJAX handler
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {

            },
            success: function (res) {
                let json_res = JSON.parse(res);
                if (json_res['success']) {
                    var lenght = 0;
                    jQuery.each(target.find('.owl-item'), function (key, value) {
                        if (typeof json_res['result'][key] === 'undefined') {
                            jQuery(this).remove();
                            return;
                        }
                        jQuery(this).find('.block-image').append(json_res['result'][key]['block_img']);
                        jQuery(this).find('.skeleton').removeClass('skeleton');
                        jQuery(this).find('.block-image').addClass('animate');

                        jQuery(this).find('.episodes-description').append(json_res['result'][key]['block_contnt']);
                        jQuery(this).find('.episodes-description').addClass('animate');

                        length = key + 1;
                    });

                    if (length < json_res['result'].length) {
                        let carousel = target.find('.owl-carousel-ajax').owlCarousel({
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

                        for (let index = length; index < json_res['result'].length; index++) {
                            const element = json_res['result'][index];
                            let a = target.find('.owl-item .e-item').last();

                            carousel.trigger('add.owl.carousel', a.clone()).trigger('refresh.owl.carousel');


                            target.find('.owl-item:last .block-image').empty().append(json_res['result'][index]['block_img'])
                            target.find('.owl-item:last .episodes-description').empty().append(json_res['result'][index]['block_contnt'])
                        }
                    }
                }
            }
        });

    });
})(jQuery);

function callTab() {
    jQuery('.season-select').on('change', function () {

        let loaded = false; // Variable For Not Call Ajax Again For Already Load Content

        var btn = jQuery(this);
        var episode = btn.parents('.trending-custom-tab').find('.iq-tv_show-episodes').data('episodes');
        var season_no = jQuery(this).val();
        var target = btn.parents('.trending-custom-tab').find('.episodes-contens');

        // Loop To Find Content Already Exisest 
        target.children().each(function () {
            if (jQuery(this).data('display') == season_no) {
                loaded = true;
            }
        });
        if (loaded) {

            jQuery(this).parent('.iq-custom-select').next('.episodes-contens').children('.owl-carousel').each(function () {
                jQuery(this).removeClass('active show');
                if (jQuery(this).attr('data-display') == season_no) {
                    jQuery(this).addClass('active show');
                }
            });
            return
        }
        var data = {
            'action': 'loadmore_tvshow_episodes',
            'data': episode,
            'season': season_no
        };

        jQuery.ajax({
            url: streamit_loadmore_params.ajaxurl, // AJAX handler
            data: data,
            type: 'POST',
            beforeSend: function (xhr) {
                let a = `<div class="owl-carousel-ajax  owl-carousel owl-theme  episodes-slider1 list-inline p-0 mb-0 ajax-owl-load   active show" data-display="` + season_no + `">
                            <div class="e-item animated fadeInUp ajax	">
                                <div class="block-image position-relative card-img skeleton ">

                                </div>
                                <div class="episodes-description text-body iq-ltr-direction card-body ">

                                </div>
                            </div>
                            <div class="e-item animated fadeInUp ajax	">
                                <div class="block-image position-relative card-img skeleton ">

                                </div>
                                <div class="episodes-description text-body iq-ltr-direction card-body ">

                                </div>
                            </div>
                            <div class="e-item animated fadeInUp ajax	">
                                <div class="block-image position-relative card-img skeleton ">

                                </div>
                                <div class="episodes-description text-body iq-ltr-direction card-body ">

                                </div>
                            </div>
                            <div class="e-item animated fadeInUp ajax	">
                                <div class="block-image position-relative card-img skeleton ">

                                </div>
                                <div class="episodes-description text-body iq-ltr-direction card-body ">

                                </div>
                            </div>
                        </div>`;

                target.append(a);
                callOwl();
            },
            success: function (res) {
                let json_res = JSON.parse(res);
                if (json_res['success']) {
                    var lenght = 0;
                    jQuery.each(target.find('.owl-carousel-ajax[data-display=' + season_no + '] .owl-item.active'), function (key, value) {
                        if (typeof json_res['result'][key] === 'undefined') {
                            jQuery(this).remove();
                            return;
                        }
                        jQuery(this).find('.block-image').append(json_res['result'][key]['block_img']);
                        jQuery(this).find('.block-image').removeClass('skeleton');
                        jQuery(this).find('.block-image').addClass('animate');
                        jQuery(this).find('.episodes-description').append(json_res['result'][key]['block_contnt']);
                        jQuery(this).find('.episodes-description').addClass('animate');

                        lenght = key;
                    });

                    if (length < json_res['result'].length) {
                        let carousel = target.find('.owl-carousel-ajax').owlCarousel({
                            loop: false,
                            rewind: true,
                            margin: 20,
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

                        for (let index = length; index < json_res['result'].length; index++) {
                            const element = json_res['result'][index];
                            let a = target.find('.owl-item .e-item').last();

                            carousel.trigger('add.owl.carousel', a.clone()).trigger('refresh.owl.carousel');


                            target.find('.owl-item:last .block-image').empty().append(json_res['result'][index]['block_img'])
                            target.find('.owl-item:last .episodes-description').empty().append(json_res['result'][index]['block_contnt'])
                        }
                    }
                }
            }
        });

        jQuery(this).parent('.iq-custom-select').next('.episodes-contens').children('.owl-carousel').each(function () {
            jQuery(this).removeClass('active show');
            if (jQuery(this).attr('data-display') == season_no) {
                jQuery(this).addClass('active show');
            }

        });

    });
}