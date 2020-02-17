const autoprefixer = require("autoprefixer");


$(document).ready(function () {
  //WaterV Carousel init
  changeSlider();
  
  //Slick Customers
  $('.customers-slider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: 0,
    prevArrow: '<a class="customers-arrows customers-prev" href="#"><i class="fas fa-long-arrow-alt-left"></i></a>',
    nextArrow: '<a class="customers-arrows customers-next" href="#"><i class="fas fa-long-arrow-alt-right"></i></a>',
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          centerMode: false,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          prevArrow: false,
          nextArrow: false,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          prevArrow: false,
          nextArrow: false,
        }
      },
      {
        breakpoint: 100,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          prevArrow: false,
          nextArrow: false,
        }
      },
    ],
  });


  function changeSlider(){
    if ($(document).width() > 1200){
      let carousel = $("#carousel").waterwheelCarousel({
        flankingItems: 3,
      });
    
      $('#prev').bind('click', function () {
        carousel.prev();
        return false
      });
    
      $('#next').bind('click', function () {
        carousel.next();
        return false;
      });

    }
    else {
      $('#carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: 0,
        prevArrow: '<a class="screenshots-arrows" href="#" id="prev"><i class="fas fa-long-arrow-alt-left"></i></<a>',
        nextArrow: '<a class="screenshots-arrows" href="#" id="next"><i class="fas fa-long-arrow-alt-right"></i></a>',
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              infinite: true,
              slidesToShow: 3,
              centerMode: false,
            }
          },
          {
            breakpoint: 768,
            settings: {
              infinite: true,
              slidesToShow: 2,
              centerMode: false,
              prevArrow: false,
              nextArrow: false,
            }
          },
          {
            breakpoint: 576,
            settings: {
              infinite: true,
              slidesToShow: 1,
              centerMode: false,
              prevArrow: false,
              nextArrow: false,
            }
          },
        ],
      });
    }
  }
});

