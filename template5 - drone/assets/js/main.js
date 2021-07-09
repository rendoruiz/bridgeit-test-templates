[...document.querySelectorAll('.scroller')].forEach((link) => {
  const scrollTarget = link.dataset.scrollTo;
  if (scrollTarget) {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollTargetElement = document.querySelector(`.${scrollTarget}`);
      scrollTargetElement.scrollIntoView({behavior: 'smooth'});
    })
  }
});