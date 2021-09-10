import classNames from 'classnames';
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router';
import { faBuilding, faCamera, faPlayCircle, faTools } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DroneIcon from '../DroneIcon';

import styles from '../../styles/Portfolio/PortfolioNavigation.module.css'

const PortfolioNavigation = ({ className }) => {
  const router = useRouter();

  const setActiveMenuItem = (id) => {
    if (!router.query.id && id === 0) {
      return styles.active;
    }
    else if (router.query.id == id) {
      return styles.active;
    }
    return null;
  }

  return ( 
    <div className={classNames(styles.menu, className)}>
      <Link href="/portfolio?id=0" shallow>
        <a className={classNames(styles.link, setActiveMenuItem(0))}>
          <FontAwesomeIcon icon={faPlayCircle} className={styles.icon} />
          <span className={styles.linkText}>Film & TV</span>
        </a>
      </Link>
      <div className={styles.separator} />
      <Link href="/portfolio?id=1" shallow>
        <a className={classNames(styles.link, setActiveMenuItem(1))}>
          <DroneIcon className={classNames(styles.icon, styles.svgIcon)} />
          <span className={styles.linkText}>FPV</span>
        </a>
      </Link>
      <div className={styles.separator} />
      <Link href="/portfolio?id=2" shallow>
        <a className={classNames(styles.link, setActiveMenuItem(2))}>
          <FontAwesomeIcon icon={faTools} className={styles.icon} />
          <span className={styles.linkText}>Construction</span>
        </a>
      </Link>
      <div className={styles.separator} />
      <Link href="/portfolio?id=3" shallow>
        <a className={classNames(styles.link, setActiveMenuItem(3))}>
          <FontAwesomeIcon icon={faBuilding} className={styles.icon} />
          <span className={styles.linkText}>Commercial Real Estate</span>
        </a>
      </Link>
      <div className={styles.separator} />
      <Link href="/portfolio?id=4" shallow>
        <a className={classNames(styles.link, setActiveMenuItem(4))}>
          <FontAwesomeIcon icon={faCamera} className={styles.icon} />
          <span className={styles.linkText}>Aerial Photography & Videography</span>
        </a>
      </Link>
    </div>
  );
}
 
export default PortfolioNavigation;