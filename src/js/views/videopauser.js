//Video pauser
(function(){
  let videoBlock = document.getElementById('video-block');
  let vid = document.getElementById('vid');
  let button = document.getElementById('video-button');
  //Event
  videoBlock.addEventListener('click', function(e){
    if(vid.paused){
      vid.play();
      videoBlock.classList.toggle('paused');
      button.classList.toggle('paused-button');
    }
    else{
      vid.pause();
      videoBlock.classList.toggle('paused');
      button.classList.toggle('paused-button');
    }
  })

  vid.addEventListener('ended', function(e){
    videoBlock.classList.toggle('paused');
    button.classList.toggle('paused-button');
    console.log('vse');
  })
}())