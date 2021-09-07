import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames';
import Link from 'next/link';

import styles from '../styles/DroneCard.module.css';
import Image from './Image';

const DroneCard = ({ imagePrefix, imageTitle, heading, shortText, longText, href, fileExtension, isLongText }) => {

  const getCard = () => {
    if (isLongText) {
      return (
        <div className={styles.textCard}>
          <h3 className={styles.heading}>{ heading }</h3>
          { longText.map((text, index) => <p key={heading+index} className={styles.body}>{text}</p> ) }
        </div>
      )
    } else {
      return (
        <Link href={href} shallow>
          <a className={styles.actionCard}>
            <h3 className={styles.heading}>{ heading }</h3>
            <p className={styles.subtitle}>{ shortText }</p>
            <FontAwesomeIcon 
              icon={faAngleRight}
              className={styles.icon} 
            />
          </a>
        </Link>
      )
    }
  }

  return ( 
    <div className={classNames(styles.drone, isLongText ? styles.longLayout : null)}>
      <div className={styles.droneImage}>
        <Image 
          prefix={imagePrefix} 
          title={imageTitle} 
          fileExtension={fileExtension}
          noMd
          noLg
          isContained
        />
      </div>
      { getCard() }
    </div> 
  );
}
 
export default DroneCard;