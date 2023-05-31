(function (jQuery) {
	"use strict";

	/*------------------------
	 More Menu
	 --------------------------*/

	if (jQuery('.has-more-menu-attr').length > 0) {
		let menumoreItems = jQuery('.has-more-menu-attr .header-default-menu');
		menumoreItems.each(function () {
			let max_elem = jQuery(this).data("items");
			let max_text = jQuery(this).data("text");
			let items = jQuery(this).find('.menu-all-pages-container ul.sf-menu > li');
			let surplus = items.slice(max_elem, items.length);
			surplus.wrapAll('<li class="category more_menu" id="more_menu"><ul class="top-menu more_sub_menu sub-menu">');
			jQuery(this).find('.menu-all-pages-container ul.sf-menu .more_menu').prepend('<a href="#" class="sf-with-ul" data-depth="0"><span class="pull-xs-right hidden-md-up"><span data-target="#top_moremenu" data-toggle="collapse" class="navbar-toggler collapse-icons"><i class="material-icons add">&#xE313;</i><i class="material-icons remove">&#xE316;</i></span></span></span>' + max_text + '</a>');

			jQuery(this).find('.menu-all-pages-container ul.sf-menu .more_menu').mouseover(function () {
				jQuery(this).children('div').css('display', 'block');
			})
				.mouseout(function () {
					jQuery(this).children('div').css('display', 'none');
				});
		});
	}

	callSuperfish();

	jQuery('.css_prefix-navigation-burger nav.mobile-menu .sub-menu').css('display', 'none ');
	jQuery('.css_prefix-navigation-burger nav.mobile-menu .top-menu li .dropdown').hide();
	jQuery('.css_prefix-navigation-burger nav.mobile-menu .sub-menu').prev().prev().addClass('submenu');
	jQuery('.css_prefix-navigation-burger nav.mobile-menu .sub-menu').before('<span class="toggledrop"><i class="fas fa-plus menu-open"></i><i class="fas fa-minus menu-close"></i></span>');

	jQuery('.css_prefix-navigation-burger nav.mobile-menu .top-menu .menu-item .toggledrop').off('click');
	jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item span.toggledrop').on('click', function () {
		if (jQuery(this).closest(".menu-is--open").length == 0) {
			jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item').removeClass('menu-is--open');
		}
		if (jQuery(this).parent().find("ul").length > 1) {
			jQuery(this).parent().addClass('menu-is--open');
		}
		jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item:not(.menu-is--open) .children,.css_prefix-navigation-burger nav.mobile-menu .menu-item:not(.menu-is--open) .sub-menu').slideUp();
		if (!jQuery(this).next('.children, .sub-menu').is(':visible') || jQuery(this).parent().hasClass("menu-is--open")) {
			jQuery(this).next('.children, .sub-menu').slideToggle();
		}
		jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item:not(.menu-is--open) .toggledrop').not(jQuery(this)).removeClass('active');
		jQuery(this).toggleClass('active');

		jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item').removeClass('menu-clicked');
		jQuery(this).parent().addClass('menu-clicked');

		jQuery('.css_prefix-navigation-burger nav.mobile-menu .menu-item').removeClass('current-menu-ancestor');
	});


	jQuery('nav.mobile-menu .widget i,nav.mobile-menu .top-menu i').on('click', function () {
		jQuery(this).next('.children, .sub-menu').slideToggle();
	});
})(jQuery);
function callSuperfish() {
	/*------------------------
			superfish menu
	--------------------------*/
	jQuery('ul.sf-menu').superfish({
		delay: 500,
		onBeforeShow: function (ul) {
			var elem = jQuery(this);
			var elem_offset = 0,
				elem_width = 0,
				ul_width = 0;
			// Add class if menu at the edge of the window
			if (elem.length == 1) {
				var page_width = jQuery('#page.site').width(),
					elem_offset = elem.parents('li').eq(0).offset().left,
					elem_width = elem.parents('li').eq(0).outerWidth(),
					ul_width = elem.outerWidth();

				if (elem.hasClass('iqonic-megamenu-container')) {
					if (elem.hasClass('iqonic-full-width')) {
						jQuery('.iqonic-megamenu-container.iqonic-full-width').css({
							'left': -elem_offset,
						});
					}
					if (elem.hasClass('iqonic-container-width')) {
						let containerOffset = (elem.closest('.elementor-container').length > 0) ? elem.closest('.elementor-container').offset() : elem.parents('li').eq(0).closest('header .container-fluid nav,header .container nav').offset();
						jQuery('.iqonic-megamenu-container.iqonic-container-width').css({
							'left': -(elem_offset - containerOffset.left)
						});
					}
				}
				if (elem_offset + elem_width + ul_width > page_width - 20 && elem_offset - ul_width > 0) {
					elem.addClass('open-submenu-main');
					elem.css({
						'left': 'auto',
						'right': '0'
					});
				} else {
					elem.removeClass('open-submenu-main');
					elem.css({});
				}
			}
			if (elem.parents("ul").length > 1) {
				var page_width = jQuery('#page.site').width();
				elem_offset = elem.parents("ul").eq(0).offset().left;
				elem_width = elem.parents("ul").eq(0).outerWidth();
				ul_width = elem.outerWidth();

				if (elem_offset + elem_width + ul_width > page_width - 20 && elem_offset - ul_width > 0) {
					elem.addClass('open-submenu-left');
					elem.css({
						'left': 'auto',
						'right': '100%'
					});
				} else {
					elem.removeClass('open-submenu-left');
				}
			}
		},
	});
}