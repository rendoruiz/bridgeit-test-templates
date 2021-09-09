import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { useState } from 'react';
import { faBuilding, faCamera, faPlayCircle, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DroneIcon from '../DroneIcon';

import styles from '../../styles/Services/ServicesNavigation.module.css'

const ServicesNavigation = ({ className }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  const setActive = (routeTo) => {
    return router.asPath.includes(routeTo) ? styles.active : null;
  }

  return ( 
    <div className={styles.container}>
      <button className={classNames(styles.toggle, isMenuOpen ? styles.active : null)} onClick={toggleMenu}>Menu</button>
      
      <div className={classNames(styles.menu, className, isMenuOpen ? styles.active : null)}>
        <Link href="/services/filmtv">
          <a className={classNames(styles.link, setActive('/services/filmtv'))}>
            <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
            <span className={styles.linkText}>Film & TV</span>
          </a>
        </Link>
        <div className={styles.separator} />
        <Link href="/services/fpv">
          <a className={classNames(styles.link, styles.svgIcon, setActive('/services/fpv'))}>
            <DroneIcon className={styles.icon} />
            <span className={styles.linkText}>FPV</span>
          </a>
        </Link>
        <div className={styles.separator} />
        <Link href="/services/construction">
          <a className={classNames(styles.link, setActive('/services/construction'))}>
            <FontAwesomeIcon icon={faTools} className={styles.icon} />
            <span className={styles.linkText}>Construction</span>
          </a>
        </Link>
        <div className={styles.separator} />
        <Link href="/services/realestate">
          <a className={classNames(styles.link, setActive('/services/realestate'))}>
            <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
            <span className={styles.linkText}>Commercial Real Estate</span>
          </a>
        </Link>
        <div className={styles.separator} />
        <Link href="/services/aerial">
          <a className={classNames(styles.link, setActive('/services/aerial'))}>
            <FontAwesomeIcon icon={faCamera} className={styles.icon} />
            <span className={styles.linkText}>Aerial Photography & Videography</span>
          </a>
        </Link>
      </div>
    </div>
  );
}
 
export default ServicesNavigation;