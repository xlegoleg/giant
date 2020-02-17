import './plugins/jquery.waterwheelCarousel.min.js'
import 'slick-carousel/slick/slick.js';
import './views/videopauser.js';
import './views/sliders.js';
import './views/hover.js';
import './views/burger.js';

//Scrolling
const anchors = document.querySelectorAll('a[href*="#"]')

for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault()
    
    const blockID = anchor.getAttribute('href').substr(1)
    
    document.getElementById(blockID).scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    })
  })
};
