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
