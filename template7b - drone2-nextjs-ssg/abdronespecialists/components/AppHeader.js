import { faBars, faBookmark, faCamera, faEnvelope, faHome, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/AppHeader.module.css';

const AppHeader = () => { 
  const [isNavigationOpen, setIsNavigationOpen] = useState(null);

  const toggleNavigation = () => {
    if (isNavigationOpen === null) {
      setIsNavigationOpen(true);
    } else {
      setIsNavigationOpen(!isNavigationOpen);
    }
  }

  return ( 
    <header className={!isNavigationOpen ? styles.appHeader : styles.appHeaderNavActive}>
      <Link href="/">
        <a className={styles.logo}>ADS</a>
      </Link>
      <FontAwesomeIcon 
        icon={faBars} 
        className={styles.menuButton} 
        onClick={toggleNavigation} 
      />

      <nav 
        style={isNavigationOpen !== null ? { animationDuration: '300ms' } : null}
        className={styles.menuPanel} 
        onClick={toggleNavigation}
      >
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faHome} className={styles.navigationIcon} />
            Home
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faUserFriends} className={styles.navigationIcon} />
            About
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faCamera} className={styles.navigationIcon} />
            Services
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faBookmark} className={styles.navigationIcon} />
            Portfolio
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faToolbox} className={styles.navigationIcon} />
            Equipment
          </a>
        </Link>
        <Link href="/">
          <a className={styles.navigationItem}>
            <FontAwesomeIcon icon={faEnvelope} className={styles.navigationIcon} />
            Contact Us
          </a>
        </Link>
      </nav>
    </header>
  );
}
 
export default AppHeader;