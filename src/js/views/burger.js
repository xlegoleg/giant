$(document).ready(function(){
  let burger = $('.banner-header__hamburger');
  let lines = $('.banner-header__hamburger-line');
  let nav = $('.banner-header__nav');

  burger.on('click', function(e) {
    lines.each((index, line) => {
      $(line).toggleClass('banner-header__hamburger-line_active');
    });
    $(nav).toggleClass('banner-header__nav_active');
  })
})