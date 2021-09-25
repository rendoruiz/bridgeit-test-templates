
import { useRef, useState } from 'react';
import classNames from 'classnames';

import { useContainerDimensions } from '../../hooks/useContainerDimensions';

import styles from '../../styles/Portfolio/PortfolioGallery.module.css'

const PortfolioGallery = ({ className, data }) => {
  const [images, setImages] = useState({
    primary: data.primaryMedia,
    children: data.secondaryMedia.slice(0, 3)
  });
  const [isSwitching, setIsSwitching] = useState(false);

  const primaryRef = useRef();
  const secondaryRef = [useRef(),useRef(),useRef()];
  // secondaryRef =Array(3).fill(useRef());
  const { width: primaryWidth, height: primaryHeight } = useContainerDimensions(primaryRef);
  const { width: secondaryWidth, height: secondaryHeight } = useContainerDimensions(secondaryRef[0]);
  
  // console.log(primaryWidth, primaryHeight);
  // console.log(secondaryWidth, secondaryHeight);

  const switchImage = (fromIndex) => {
    if (!isSwitching) {
      // init status
      setIsSwitching(true);

      // animate switching, then switch images
      animateSwitch(fromIndex);
    }
  }

  const animateSwitch = (itemIndex) => {
    // animate focused item bottom swap
    const gridGapPx = 20
    const gridColumns = 3;
    primaryRef.current.style.width = secondaryWidth + 'px';
    primaryRef.current.style.height = secondaryHeight + 'px';
    primaryRef.current.style.transform = `translate(${(secondaryWidth + gridGapPx) * itemIndex}px, ${primaryHeight + gridGapPx}px) scale(1.05)`;
    primaryRef.current.style.transition = 'width 100ms ease-out, height 100ms ease-out, transform 200ms ease-out';
    
    secondaryRef[itemIndex].current.style.position = 'absolute';
    secondaryRef[itemIndex].current.style.width = primaryWidth + 'px';
    secondaryRef[itemIndex].current.style.height = primaryHeight + 'px';
    secondaryRef[itemIndex].current.style.transform = `translate(${(((primaryWidth * -1) - 20) / gridColumns) * itemIndex}px, ${(primaryHeight * -1) - gridGapPx}px) scale(1.02)`;
    secondaryRef[itemIndex].current.style.transition = 'width 100ms ease-out, height 100ms ease-out, transform 200ms ease-out';

    // post-bobbing animation 
    setTimeout(() => {
      primaryRef.current.style.transform = `translate(${(secondaryWidth + gridGapPx) * itemIndex}px, ${primaryHeight + gridGapPx}px) scale(1.0)`;
      primaryRef.current.style.transition = 'transform 100ms ease-out';

      secondaryRef[itemIndex].current.style.transform = `translate(${(((primaryWidth * -1) - 20) / gridColumns) * itemIndex}px, ${(primaryHeight * -1) - gridGapPx}px) scale(1.0)`;
      secondaryRef[itemIndex].current.style.transition = 'transform 100ms ease-out';

      // reset & set
      setTimeout(() => {
        // reset property changes & animation
        primaryRef.current.style.width = '100%';
        primaryRef.current.style.height = '100%';
        primaryRef.current.style.transform = 'unset';
        primaryRef.current.style.transition = 'none';

        secondaryRef[itemIndex].current.style.position = 'static';
        secondaryRef[itemIndex].current.style.width = '100%';
        secondaryRef[itemIndex].current.style.height = '100%';
        secondaryRef[itemIndex].current.style.transform = 'unset';
        secondaryRef[itemIndex].current.style.transition = 'none';

        // switch images
        const copy = {...images};
        copy.primary = images.children[itemIndex];
        copy.children[itemIndex] = images.primary;
        setImages(copy);

        // update status
        setIsSwitching(false);
      }, 200);
    }, 300);
  }

  return ( 
    <div className={classNames(styles.content, className)}>
      <div 
        className={classNames(styles.image, styles.primary)} 
        ref={primaryRef}
      >
        <img 
          src={'/images/' + images.primary.prefix + '-md.jpg'} 
          alt={images.primary.title}
        />
      </div>

      { images.children.map((secondary, index) => (
        <div
          key={secondary.title + '-gallery-' + index}
          className={classNames(styles.image, styles.secondary)} 
          onClick={() => switchImage(index)} 
          ref={secondaryRef[index]}
        >
          <img 
            src={'/images/' + images.children[index].prefix + '-md.jpg'} 
            alt={images.children[index].title}
          />
        </div>
      ))}
    </div>
  ); 
}
 
export default PortfolioGallery;