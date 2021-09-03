import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faCamera, faEnvelope, faHome, faUserFriends } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from '../styles/AppHeader.module.css';

const AppHeader = () => { 
  const [isNavigationOpen, setIsNavigationOpen] = useState(null);
  const router = useRouter();
  // console.log(router)
  // console.log(router.pathname)

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
              <div className={styles.navigationIconDrone}>
                <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="23.97 31.22 96.18 81.34">
                  <path d="M309.94,406a12.3,12.3,0,1,1-12.3-12.31h0A12.31,12.31,0,0,1,309.94,406Zm-12.3-47.2c21.47.17,45.89,15.31,48.09,43.84H316.65s-3.75-15.76-19-15.64-19,15.64-19,15.64H249.55C251,374.59,275,358.6,297.64,358.77Zm.2,81.31c-16,0-31-12.05-37.11-30.76h17.9s3.86,15.59,19.12,15.49,18.9-15.48,18.9-15.48h17.89a37.63,37.63,0,0,1-36.69,30.75Z" transform="translate(-225.58 -327.55)"/>
                </svg>
              </div>
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