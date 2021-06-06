const jumpClassFlag = '.scroller';
const jumpLinks = document.querySelectorAll(jumpClassFlag);
jumpLinks.forEach((link) => {
  const hrefTag = link.getAttribute('href') ?? null;
  const dataTag = link.dataset.scrollTo ?? null
  if (hrefTag.includes('#') || dataTag) {
    const jumpTarget = dataTag ?? hrefTag.includes('#') ? hrefTag.replace('#', '') : null; 
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const scrollTarget = document.querySelector(`.${jumpTarget}`);
      scrollTarget.scrollIntoView({behavior: 'smooth', block: 'end', inline: 'nearest'});
    })
  }
});