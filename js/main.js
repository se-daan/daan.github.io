$(document).ready(function() {

  // Screen transitions
  Barba.Pjax.start();

  if ($(window).width() > 639) {
    Barba.Prefetch.init();
  }

  // Reveal objects on scroll
  window.sr = ScrollReveal({ mobile: false });
  sr.reveal('.work-list-item', {
    duration: 500,
    easing: 'ease-out',
    scale: 0.9,
    distance: '100px',
    viewFactor: 0.5,
  });

});

function language(self) {
  if (self.value === 'kr') {
    document.querySelector('.kr').style.display = 'block';
    document.querySelector('.en').style.display = 'none';
    self.value = 'en';
  } else {
    document.querySelector('.en').style.display = 'block';
    document.querySelector('.kr').style.display = 'none';
    self.value = 'kr';
  }
}

function setPng24(obj) { 
    obj.width=obj.height=1; 
    obj.className=obj.className.replace(/\bpng24\b/i,''); 
    obj.style.filter = 
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
    obj.src='';  
    return ''; 
} 




var targetOffset, currentPosition,
    body = document.body,
    button = document.getElementByClassName('hint'),
    animateTime = 900;

function getPageScroll() {
  var yScroll;

  if (window.pageYOffset) {
    yScroll = window.pageYOffset;
  } else if (document.documentElement && document.documentElement.scrollTop) {
    yScroll = document.documentElement.scrollTop;
  } else if (document.body) {
    yScroll = document.body.scrollTop;
  }
  return yScroll;
}

button.addEventListener('click', function (event) {

  targetOffset = document.getElementById(event.target.hash.substr(1)).offsetTop;
  currentPosition = getPageScroll();

  body.classList.add('in-transition');
  body.style.WebkitTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.MozTransform = "translate(0, -" + (targetOffset - currentPosition) + "px)";
  body.style.transform = "translate(0, -" + (targetOffset - currentPosition) + "px)";

  window.setTimeout(function () {
    body.classList.remove('in-transition');
    body.style.cssText = "";
    window.scrollTo(0, targetOffset);
  }, animateTime);

  event.preventDefault();

}, false);
