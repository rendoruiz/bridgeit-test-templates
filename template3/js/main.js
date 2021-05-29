[...document.querySelectorAll('.scroller')].forEach((link) => {
  if (link.dataset.scrollTo) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollTarget = document.querySelector(`section.${e.target.dataset.scrollTo}`);
      scrollTarget.scrollIntoView({behavior: 'smooth'});
    })
  }
});