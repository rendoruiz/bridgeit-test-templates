import Image from '../Image';

import styles from '../../styles/Portfolio/PortfolioGallery.module.css'
import { useEffect, useState } from 'react';
import classNames from 'classnames';

const PortfolioGallery = ({ className, data }) => {
  const [primaryMedia, setPrimaryMedia] = useState(null);
  const [secondaryMediaA, setSecondaryMediaA] = useState(null);
  const [secondaryMediaB, setSecondaryMediaB] = useState(null);
  const [secondaryMediaC, setSecondaryMediaC] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data) {
      console.log(data)
      setPrimaryMedia(data.primaryMedia.imagePrefix);
      setSecondaryMediaA(data.secondaryMediaList[0].imagePrefix);
      setSecondaryMediaB(data.secondaryMediaList[1].imagePrefix);
      setSecondaryMediaC(data.secondaryMediaList[2].imagePrefix);
      setIsLoading(false)
    }
  }, [data])

  return isLoading ? null : ( 
    <div className={classNames(styles.content, className)}>
      <div className={classNames(styles.image, styles.primary)}>
        <Image 
          prefix={primaryMedia} noMd noLg
        />
      </div>
      <div className={classNames(styles.image)}>
        <Image 
          prefix={primaryMedia} noMd noLg
        />
      </div>
      <div className={classNames(styles.image)}>
        <Image 
          prefix={primaryMedia} noMd noLg
        />
      </div>
      <div className={classNames(styles.image)}>
        <Image 
          prefix={primaryMedia} noMd noLg
        />
      </div>
    </div>
  ); 
}
 
export default PortfolioGallery;