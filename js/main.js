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

function popupBackground(){
    document.querySelector('.popup-background2').style.opacity = '1';
  }

function removePopupBackground() {
  document.querySelector('.popup-background2').style.opacity = '0';
}

function setPng24(obj) { 
    obj.width=obj.height=1; 
    obj.className=obj.className.replace(/\bpng24\b/i,''); 
    obj.style.filter = 
    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');" 
    obj.src='';  
    return ''; 
} 
