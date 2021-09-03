import { faBars, faBookmark, faCamera, faEnvelope, faHome, faToolbox, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/AppHeader.module.css';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/dist/client/router';

const AppHeader = () => { 
  const [isNavigationOpen, setIsNavigationOpen] = useState(null);
  const router = useRouter();
  console.log(router)
  console.log(router.pathname)

  const toggleNavigation = () => {
    if (isNavigationOpen === null) {
      setIsNavigationOpen(true);
    } else {
      setIsNavigationOpen(!isNavigationOpen);
    }
  }

  const setActive = (routeTo) => {
    return router.pathname === routeTo ? ` ${styles.active}` : '';
  }

  return ( 
    <header className={!isNavigationOpen ? styles.appHeader : styles.appHeaderNavActive}>
      <div className={styles.content}>
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
            <a className={styles.navigationItem + setActive('/')}>
              <FontAwesomeIcon icon={faHome} className={styles.navigationIcon} />
              Home
            </a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem + setActive('')}>
              <FontAwesomeIcon icon={faUserFriends} className={styles.navigationIcon} />
              About
            </a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem + setActive('')}>
              <FontAwesomeIcon icon={faCamera} className={styles.navigationIcon} />
              Services
            </a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem + setActive('')}>
              <FontAwesomeIcon icon={faBookmark} className={styles.navigationIcon} />
              Portfolio
            </a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem + setActive('')}>
              <FontAwesomeIcon icon={faToolbox} className={styles.navigationIcon} />
              Equipment
            </a>
          </Link>
          <Link href="/">
            <a className={styles.navigationItem + setActive('')}>
              <FontAwesomeIcon icon={faEnvelope} className={styles.navigationIcon} />
              Contact<span className={styles.mobile}>&nbsp;Us</span>
            </a>
          </Link>
        </nav>

        <div className={styles.mediaLinks}>
          <a 
            className={styles.linkItem} 
            href="https://www.youtube.com/channel/UCz8CmyohSEjXX0vGBF4YapQ"
            title="youtube page"
          >
            <FontAwesomeIcon icon={faYoutube} className={styles.mediaIcon} />
          </a>
          <a 
            className={styles.linkItem} 
            href="https://www.facebook.com/Alberta-Drone-Specialists-108741628175831"
            title="facebook page"
          >
            <FontAwesomeIcon icon={faFacebook} className={styles.mediaIcon} />
          </a>
          <a 
            className={styles.linkItem} 
            href="https://www.instagram.com/abdronespecialists/"
            title="instagram page"
          >
            <FontAwesomeIcon icon={faInstagram} className={styles.mediaIcon} />
          </a>
        </div>
      </div>
    </header>
  );
}
 
export default AppHeader;