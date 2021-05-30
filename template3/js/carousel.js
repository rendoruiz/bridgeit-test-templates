const selectedItemFlag = 'selected'
const selectedItemTransformStyle = 'scale(1.15) translateY(-5%)';
let carouselList = document.querySelectorAll('.carousel > .carousel-item');
let currentSelectedItem = document.querySelector(`.carousel-item.${selectedItemFlag}`);
let transformMultiplier = null;

// add class flag to selected item
const setSelectedItem = (item) => {
  currentSelectedItem.classList.remove(selectedItemFlag);
  currentSelectedItem = item;
  return item.classList.add(selectedItemFlag);
}

// shift carousel items
const transformCarouselItems = (multiplier, carouselList) => {
  multiplier -= 1;
  carouselList.forEach(item => {
    const itemWidth = item.offsetWidth;
    const translateXOperation = multiplier >= 0 
      ? `-${itemWidth * multiplier}` 
      : itemWidth;
    let transformStyle = `translateX(${translateXOperation}px)`;

    if (item.className.includes(selectedItemFlag)) {
      transformStyle += ` ${selectedItemTransformStyle}`;
    }
    item.style.transform = transformStyle;
  })
}

// activates carousel transformations
const operateCarousel = (e => {
  const selectedItem = e.target;
  const itemIndex = [...carouselList].indexOf(selectedItem);
  transformMultiplier = itemIndex;

  if (selectedItem !== currentSelectedItem) {
    setSelectedItem(selectedItem);
    transformCarouselItems(itemIndex, carouselList);
  }
});

// initialize click event listeners
window.addEventListener('load', () => {
  [...carouselList].forEach((item) => {
    
    
    item.addEventListener('click', operateCarousel, true);
  });
});

// adjust transform values on resize
window.addEventListener('resize', () => {
  if (transformMultiplier !== null) {
    transformCarouselItems(transformMultiplier, carouselList);
  }
});