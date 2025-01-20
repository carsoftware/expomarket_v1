window.addEventListener('scroll', function() {
    const element = document.querySelector('.scroll-animate');
    const position = element.getBoundingClientRect();
  
    // Si el elemento está en el viewport
    if (position.top >= 0 && position.bottom <= window.innerHeight) {
      element.classList.add('visible');
    }
  });
  