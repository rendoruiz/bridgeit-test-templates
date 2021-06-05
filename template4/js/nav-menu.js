const navToggledFlag = 'menu-visible';
const documentBody = document.querySelector('body');
const mainNav = document.querySelector('.main-nav');
const navToggle = document.querySelector('.nav-toggle');

navToggle.addEventListener('click', (e) => {
  if (!documentBody.classList.contains(navToggledFlag)) {
    documentBody.classList.add(navToggledFlag);
  }
});
mainNav.addEventListener('click', (e) => {
  if (documentBody.classList.contains(navToggledFlag)) {
    documentBody.classList.remove(navToggledFlag);
  }
});