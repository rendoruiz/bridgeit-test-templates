const selectedItemFlag = 'selected';
const selectedItemTransformStyle = 'scale(1.15)';
let carouselList = document.querySelectorAll('.carousel > .carousel-item');
let currentSelectedItem = document.querySelector(`.carousel-item.${selectedItemFlag}`);
const initialIndex = [...carouselList].indexOf(currentSelectedItem);
const carouselNavPrev = document.querySelector('.carousel-nav.prev');
const carouselNavNext = document.querySelector('.carousel-nav.next');
// console.log(initialIndex)



// shift carousel items
const transformCarouselItems = (selectedItem, carouselList) => {
  const selectedIndex = [...carouselList].indexOf(selectedItem);
  currentSelectedItem.classList.remove(selectedItemFlag);
  selectedItem.classList.add(selectedItemFlag)

  // console.log(`init: ${initialIndex} | sele: ${selectedIndex}`);

  const itemWidth = currentSelectedItem.offsetWidth;
  const translateXOperation = itemWidth * (initialIndex - selectedIndex);
  // console.log(translateXOperation);

  carouselList.forEach((item, index) => {
    item.style.transform = `translateX(${translateXOperation}px)`;
  })

  selectedItem.style.transform += ` ${selectedItemTransformStyle}`;

  currentSelectedItem = selectedItem;
}

const getSelectedIndex = () => {
  return [...carouselList].indexOf(currentSelectedItem);
}
console.log(getSelectedIndex());

const displayCarouselNavigation = () => {
  const selectedIndex = getSelectedIndex();
  if (selectedIndex === 0) {
    carouselNavPrev.style.display = 'none';
  } else {
    carouselNavPrev.style.display = 'inline-block';
  }
  if (selectedIndex === carouselList.length - 1) {
    carouselNavNext.style.display = 'none';
  } else {
    carouselNavNext.style.display = 'inline-block';
  }
}

// activates carousel transformations
const operateCarousel = (e => {
  const selectedItem = e.target;

  transformCarouselItems(selectedItem, carouselList);
  // currentSelectedItem = selectedItem;
  displayCarouselNavigation();
});

// initialize click event listeners
window.addEventListener('load', () => {
  [...carouselList].forEach((item) => {
    item.addEventListener('click', operateCarousel);
  });
});

// adjust transform values on resize
window.addEventListener('resize', () => {
    transformCarouselItems(currentSelectedItem, carouselList);
});

carouselNavPrev.addEventListener('click', (e) => {
  // console.log('prev');
  if (getSelectedIndex() > 0) {
    transformCarouselItems([...carouselList][getSelectedIndex() - 1], carouselList);
    displayCarouselNavigation();
  }
  console.log(getSelectedIndex());
});

carouselNavNext.addEventListener('click', (e) => {
  // console.log('next');
  if (getSelectedIndex() < carouselList.length) {
    transformCarouselItems([...carouselList][getSelectedIndex() + 1], carouselList);
    displayCarouselNavigation();
  }
});