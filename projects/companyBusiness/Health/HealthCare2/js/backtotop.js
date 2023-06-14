/*
Theme : ESS Health Care
Author Name: Naveen Kumar Verma
Description: Healthcare - Responsive theme and desgin
Version: 1.0
license: https://euclidesoftwaresolutions.com/
Copyright 2021 ESS Authors
*/

$(document).ready(function() {
    $(window).on("scroll", function(){
        if ($(this).scrollTop() > 20) {
        $('#toTopBtn').fadeIn();
        } else {
        $('#toTopBtn').fadeOut();
        }
    });

    $('#toTopBtn').on("click", function(){
        $("html, body").animate({
        scrollTop: 0
        }, 500);
        return false;
    });
    $(".hiring-button").on("click", function(){
        $('html, body').animate({
            scrollTop: $("#opening-positions").offset().top
        }, 2000);
        return false;
    });
});

      
         
      