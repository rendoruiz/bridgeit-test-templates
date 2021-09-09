import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button'
import classNames from 'classnames';
import Link from 'next/link'

import styles from '../../styles/Services/ServiceCard.module.css'
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

const ServiceCard = ({ className, title, body, icon, routeTo }) => {
  return ( 
    <Link href={routeTo ?? "/404"}>
      <a className={classNames(styles.card, className)}>
        <FontAwesomeIcon 
          icon={icon} 
          className={styles.icon} 
        />
        <h3 className={styles.heading}>{ title }</h3>
        <p className={styles.body}>{ body }</p>
        <span className={styles.linkText}>
          {"Explore " + title}
          <FontAwesomeIcon 
            icon={faAngleRight} 
            className={styles.linkTextIcon}
          />
        </span>
      </a>
    </Link>
  );
}
 
export default ServiceCard;