[...document.querySelectorAll('a')].forEach((link) => {
  if (link.dataset.scrollTo) {
    link.addEventListener('click', (e) => {
      const scrollTarget = document.querySelector(`section.${e.target.dataset.scrollTo}`);
      scrollTarget.scrollIntoView({behavior: 'smooth'});
    })
  }
});