import Image from '../Image';

import styles from '../../styles/Portfolio/PortfolioGallery.module.css'
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const PortfolioGallery = ({ className, data }) => {
  const [images, setImages] = useState({
    primary: 'https://cdn.pixabay.com/photo/2021/07/19/15/47/lily-6478427_1280.jpg',
    children: [
      'https://cdn.pixabay.com/photo/2020/01/01/18/13/train-4734126_1280.jpg',
      'https://cdn.pixabay.com/photo/2021/08/07/08/49/building-6528075_1280.jpg',
      'https://cdn.pixabay.com/photo/2020/07/21/16/24/landscape-5426755_1280.jpg'
    ]
  });

  const switchImage = (fromIndex) => {
    const copy = {...images};
    copy.primary = images.children[fromIndex];
    copy.children[fromIndex] = images.primary;
    setImages(copy);
  }

  return ( 
    <div className={classNames(styles.content, className)}>
      <div className={classNames(styles.image, styles.primary)}>
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.primary} alt="" />
      </div>
      <div className={classNames(styles.image)} onClick={() => switchImage(0)}>
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[0]} alt="" />
      </div>
      <div className={classNames(styles.image)} onClick={() => switchImage(1)}>
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[1]} alt="" />
      </div>
      <div className={classNames(styles.image)} onClick={() => switchImage(2)}>
        {/* <Image 
          prefix={primaryMedia} noMd noLg
        /> */}
        <img src={images.children[2]} alt="" />
      </div>
    </div>
  ); 
}
 
export default PortfolioGallery;