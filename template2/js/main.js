const imageInstance = document.querySelector('.equal-size');
const initialImageWidth = imageInstance.width;

const equalizeImageDimensions = (e) => {
  const image = document.querySelector('.equal-size');
  image.height = image.width;
  console.log('resizing');
}


window.addEventListener('load', equalizeImageDimensions);

window.addEventListener('resize', (e) => {
  if (initialImageWidth != imageInstance.width) {
    equalizeImageDimensions(e);
  }
});