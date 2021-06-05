const selectedItemFlag = 'selected';
const selectedItemTransformStyle = 'scale(1.15) translateY(-5%)';
let carouselList = document.querySelectorAll('.carousel > .carousel-item');
let currentSelectedItem = document.querySelector(`.carousel-item.${selectedItemFlag}`);
const initialIndex = [...carouselList].indexOf(currentSelectedItem);
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
}

// activates carousel transformations
const operateCarousel = (e => {
  const selectedItem = e.target;

  transformCarouselItems(selectedItem, carouselList);
  currentSelectedItem = selectedItem;
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