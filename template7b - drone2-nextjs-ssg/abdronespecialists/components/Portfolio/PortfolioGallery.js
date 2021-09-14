import Image from '../Image';

import styles from '../../styles/Portfolio/PortfolioGallery.module.css'
import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import { useContainerDimensions } from '../../hooks/useContainerDimensions';

const PortfolioGallery = ({ className, data }) => {
  const [images, setImages] = useState({
    primary: 'https://cdn.pixabay.com/photo/2021/07/19/15/47/lily-6478427_1280.jpg',
    children: [
      'https://cdn.pixabay.com/photo/2020/01/01/18/13/train-4734126_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/08/07/08/49/building-6528075_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_1280.jpg'
    ]
  });
  const [isSwitching, setIsSwitching] = useState(false);


  const primaryRef = useRef();
  const secondaryRef = [useRef(),useRef(),useRef()];
  // secondaryRef =Array(3).fill(useRef());
  const { width: primaryWidth, height: primaryHeight } = useContainerDimensions(primaryRef);
  const { width: secondaryWidth, height: secondaryHeight } = useContainerDimensions(secondaryRef[0]);
  
  console.log(primaryWidth, primaryHeight);
  console.log(secondaryWidth, secondaryHeight);

  const switchImage = (fromIndex) => {
    if (!isSwitching) {
      // init status
      setIsSwitching(true);

      // animate switching
      animateSwitch(fromIndex).then(() => {
        // switch images
        // const copy = {...images};
        // copy.primary = images.children[fromIndex];
        // copy.children[fromIndex] = images.primary;
        // setImages(copy);
      });
      
      // update status
      setIsSwitching(false);
    }
  }

  const animateSwitch = async (itemIndex) => {
    // animate focused item bottom swap
    const gridGapPx = 20
    primaryRef.current.style.width = secondaryWidth + 'px';
    primaryRef.current.style.height = secondaryHeight + 'px';
    // primaryRef.current.style.transform = `translate(calc(${secondaryWidth + gridGapPx}px * ${itemIndex}), ${primaryHeight + gridGapPx}px) scale(1.05)`;
    primaryRef.current.style.transform = `translate(${(secondaryWidth + gridGapPx) * itemIndex}px, ${primaryHeight + gridGapPx}px) scale(1.05)`;
    primaryRef.current.style.transition = 'width 100ms ease-out, height 100ms ease-out, transform 200ms ease-out';
    
    secondaryRef[itemIndex].current.style.position = 'absolute';
    secondaryRef[itemIndex].current.style.width = primaryWidth + 'px';
    secondaryRef[itemIndex].current.style.height = primaryHeight + 'px';
    secondaryRef[itemIndex].current.style.transform = `translate(calc(calc(-100% - 20px) / 3 * ${itemIndex}), calc(-100% - 20px)) scale(1.05)`;
    secondaryRef[itemIndex].current.style.transition = 'width 100ms ease-out, height 100ms ease-out, transform 200ms ease-out';

    // post-bobbing animation 
    setTimeout(() => {
      // primaryRef.current.style.transform = `translate(calc(${secondaryWidth + gridGapPx}px * ${itemIndex}), ${primaryHeight + gridGapPx}px) scale(1.0)`;
      primaryRef.current.style.transform = `translate(${(secondaryWidth + gridGapPx) * itemIndex}px, ${primaryHeight + gridGapPx}px) scale(1.0)`;
      primaryRef.current.style.transition = 'transform 100ms ease-out';

      secondaryRef[itemIndex].current.style.transform = `translate(calc(calc(-100% - 0) / 3 * ${itemIndex}), calc(-100% - 0)) scale(1.0)`;
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

        const copy = {...images};
        copy.primary = images.children[itemIndex];
        copy.children[itemIndex] = images.primary;
        setImages(copy);
      }, 200);
    }, 300);
  }

  return ( 
    <div className={classNames(styles.content, className)}>
      <div 
        className={classNames(styles.image, styles.primary)} 
        ref={primaryRef}
      >
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.primary} alt="" />
      </div>
      <div 
        className={classNames(styles.image, styles.secondary)} 
        onClick={() => switchImage(0)} 
        ref={secondaryRef[0]}
      >
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[0]} alt="" />
      </div>
      <div 
        className={classNames(styles.image, styles.secondary)} 
        onClick={() => switchImage(1)}
        ref={secondaryRef[1]}
      >
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[1]} alt="" />
      </div>
      <div 
        className={classNames(styles.image, styles.secondary)} 
        onClick={() => switchImage(2)}
        ref={secondaryRef[2]}
      >
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[2]} alt="" />
      </div>
    </div>
  ); 
}
 
export default PortfolioGallery;