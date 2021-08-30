import { faBars, faBookmark, faCamera, faEnvelope, faHome, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
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
      <div className={styles.logo}>ADS</div>
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
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faHome} className={styles.navigationIcon} />
          Home
        </a>
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faUserFriends} className={styles.navigationIcon} />
          About
        </a>
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faCamera} className={styles.navigationIcon} />
          Services
        </a>
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faBookmark} className={styles.navigationIcon} />
          Portfolio
        </a>
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faToolbox} className={styles.navigationIcon} />
          Equipment
        </a>
        <a href="#" className={styles.navigationItem}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.navigationIcon} />
          Contact Us
        </a>
      </nav>
    </header>
  );
}
 
export default AppHeader;