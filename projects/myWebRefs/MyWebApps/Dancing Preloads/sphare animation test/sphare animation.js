/*
  The color effects and animation are done via CSS. This bit of JavaScript just lets you toggle the luminaires and turns a few on to start.
*/

$(function() {
  $('.luminaire:nth-child(2n)').addClass('on');
  $('.luminaire').on('click', function() {
    $(this).toggleClass('on');
  });
});
