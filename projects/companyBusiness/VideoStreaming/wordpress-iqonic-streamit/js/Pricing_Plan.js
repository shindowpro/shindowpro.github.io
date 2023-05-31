
/*---------------------------------------------------------------------
        Active Class for Pricing Table
   -----------------------------------------------------------------------*/
(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        callPricing();
    });
})(jQuery);

function callPricing() {
    if (jQuery('.iq-pricing-card #my-table').length > 0) {
        let activePlan = jQuery('.iq-pricing-card #my-table').data('active');
        jQuery('.iq-pricing-card #my-table tr .' + activePlan).children().addClass('active');
        let col = jQuery('.iq-pricing-card #my-table tr .' + activePlan).index();
        jQuery(".iq-pricing-card #my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
    }
    let actWrap = '.iq-pricing-card-two .iq-price-rate-wrap';
    if (jQuery(actWrap).length > 0) {
        let planIdOnLoad = jQuery(actWrap + '.active').data('paid-id');
        let planLink = jQuery('.iq-pricing-card-two .iq-button.secondary-btn').attr('href');
        jQuery('.iq-pricing-card-two .iq-button.secondary-btn').attr('href', planLink + '?subscription_plan=' + planIdOnLoad);
        jQuery(document).on('click', actWrap, function () {
            jQuery(actWrap).removeClass('active');
            let planId = jQuery(this).data('paid-id');
            jQuery('.iq-pricing-card-two .iq-button.secondary-btn').attr('href', planLink + '?subscription_plan=' + planId);
            jQuery(this).addClass('active');
        })

    }
    jQuery(".iq-pricing-card #my-table tr th").on("click", function () {
        jQuery('.iq-pricing-card #my-table tr th').children().removeClass('active');
        jQuery(this).children().addClass('active');
        jQuery(".iq-pricing-card #my-table td").each(function () {
            if (jQuery(this).hasClass('active')) {
                jQuery(this).removeClass('active')
            }
        });
        let col = jQuery(this).index();
        jQuery(".iq-pricing-card #my-table tr td:nth-child(" + parseInt(col + 1) + ")").addClass('active');
    });

}