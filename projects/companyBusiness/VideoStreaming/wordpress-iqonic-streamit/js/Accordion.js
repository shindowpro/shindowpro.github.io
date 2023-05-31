/*------------------------
Accordion
--------------------------*/
(function (jQuery) {
    "use strict";
    jQuery(document).ready(function () {
        callAccordion();
    });
})(jQuery);

function callAccordion() {
    jQuery('.iq-accordion .iq-accordion-block:first').addClass('iq-active').children().slideDown('slow');
    jQuery('.iq-accordion .iq-accordion-title').on("click", function () {
        let ele = jQuery(this).parent().hasClass('iq-active');
        jQuery('.iq-accordion .iq-accordion-block').removeClass('iq-active').children('div.iq-accordion-details').slideUp('slow');
        if (ele) {
            jQuery(this).parent().removeClass('iq-active');
        } else {
            jQuery(this).parent().addClass('iq-active').children('div.iq-accordion-details').slideDown('slow');
        }
    });
}