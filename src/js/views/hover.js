$(document).ready(function () {
  // Prices card hover-effect
  (function() {
    //Events
    $('.prices-card__button').mouseover(function(e) {
      classChanger($(e.target).parent());
    });

    $('.prices-card__button').mouseout(function(e) {
      classChanger($(e.target).parent());
    });

    //Changer
    function classChanger(parent) {
      parent.toggleClass('prices-card_active');
      parent.children('.prices-card__price').toggleClass('prices-card__price_active');
      parent.children('.prices-card__triangle').toggleClass('prices-card__triangle_active');
      parent.children('.prices-card__button').toggleClass('prices-card__button_active');
    }
  }());  


  // Download card hover-effect
  (function() {
    //Events
    $('.download-button').mouseover(function(e) {
      classChanger($(this).find('i'));
    });

    $('.download-button').mouseout(function(e) {
      classChanger($(this).find('i'));
    });

    //Changer
    function classChanger(icon) {
      icon.toggleClass('download-button__icon_active');
    }
  }()); 
});
