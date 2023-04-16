const anchorButtons = document.querySelectorAll('.nav__link');

for(const anchorButton of anchorButtons) {
  anchorButton.addEventListener('click', function(e){
    e.preventDefault();

    if (this.classList.contains('nav__link')) {
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
}
