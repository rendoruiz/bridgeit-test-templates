import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import styles from '../styles/DroneCard.module.css';
import Image from './Image';

const DroneCard = ({ imagePrefix, imageTitle, heading, body, href, fileExtension }) => {
  return ( 
    <div className={styles.droneCard}>
      <div className={styles.imageContainer}>
        <Image 
          prefix={imagePrefix} 
          title={imageTitle} 
          fileExtension={fileExtension}
          noMd
          noLg
          isContained
        />
      </div>
      
      <Link href={href}>
        <a className={styles.text}>
          <h3 className={styles.heading}>{ heading }</h3>
          <p className={styles.body}>{ body }</p>
          <FontAwesomeIcon 
            icon={faAngleRight}
            className={styles.icon} 
          />
        </a>
      </Link>
    </div> 
  );
}
 
export default DroneCard;