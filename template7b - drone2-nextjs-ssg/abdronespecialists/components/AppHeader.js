import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faCamera, faEnvelope, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import styles from '../styles/AppHeader.module.css';
import ExternalMediaLinks from './Contact/ExternalMediaLinks';
import DroneIcon from './DroneIcon';

const AppHeader = () => { 
  const [isNavigationOpen, setIsNavigationOpen] = useState(null);
  const router = useRouter();
  // console.log(router)
  // console.log(router.pathname)
  // console.log(router.asPath)

  const toggleNavigation = () => {
    if (isNavigationOpen === null) {
      setIsNavigationOpen(true);
    } else {
      setIsNavigationOpen(!isNavigationOpen);
    }
  }

  const setActive = (routeTo, match=false) => {
    if (match) {
      return router.asPath.includes(routeTo) ? ` ${styles.active}` : '';
    }
    return router.asPath === routeTo ? ` ${styles.active}` : '';
  }

  return ( 
    <header className={!isNavigationOpen ? styles.appHeader : styles.appHeaderNavActive}>
      <div className={styles.content}>
        <Link href="/">
          <a className={styles.logo}>ADS</a>
        </Link>
        <button 
          className={styles.menuButton} 
          onClick={toggleNavigation}
        >
          <FontAwesomeIcon 
            icon={faBars} 
            className={styles.menuButtonIcon} 
          />

        </button>

        <nav 
          style={isNavigationOpen !== null ? { animationDuration: '300ms' } : null}
          className={styles.menuPanel} 
          onClick={toggleNavigation}
        >
          <Link href="/">
            <a className={styles.navigationItem + setActive('/')}>
              <FontAwesomeIcon icon={faHome} className={styles.navigationIcon} fixedWidth />
              Home
            </a>
          </Link>
          <Link href="/about">
            <a className={styles.navigationItem + setActive('/about')}>
              <FontAwesomeIcon icon={faUserFriends} className={styles.navigationIcon} fixedWidth />
              About
            </a>
          </Link>
          <Link href="/services">
            <a className={styles.navigationItem + setActive('/services', true)}>
              <FontAwesomeIcon icon={faCamera} className={styles.navigationIcon} fixedWidth />
              Services
            </a>
          </Link>
          <Link href="/portfolio">
            <a className={styles.navigationItem + setActive('/portfolio', true)}>
              <FontAwesomeIcon icon={faBookmark} className={styles.navigationIcon} fixedWidth />
              Portfolio
            </a>
          </Link>
          <Link href="/equipment">
            <a className={styles.navigationItem + setActive('/equipment', true)}>
              <div className={styles.navigationIconDrone}>
                <DroneIcon />
              </div>
              Equipment
            </a>
          </Link>
          <Link href="/contact">
            <a className={styles.navigationItem + setActive('/contact')}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.navigationIcon} fixedWidth />
              Contact<span className={styles.mobile}>&nbsp;Us</span>
            </a>
          </Link>
        </nav>
        
        <ExternalMediaLinks className={styles.mediaLinks} />
      </div>
    </header>
  );
}
 
export default AppHeader;