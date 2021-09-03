import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/AppFooter.module.css';

const AppFooter = () => {
  return ( 
    <footer className={styles.appFooter}>
      <div className={styles.content}>
        <div className={styles.contactSection}>
          <span>Start a Project</span>
          <p>We are ready for the challenge</p>
          <a href="mailto:info@abdronespecialists.ca">info@abdronespecialists.ca</a>
        </div>
        <div className={styles.mediaSection}>
          <span className={styles.mediaBlurb}>Let's get social.</span>
          <div className={styles.externalLinks}>
            <a href="https://www.youtube.com/channel/UCz8CmyohSEjXX0vGBF4YapQ" target="_blank" rel="noreferrer" title="YouTube channel link">
              <FontAwesomeIcon icon={faYoutube} className={styles.icon} />
            </a>
            <a href="https://www.facebook.com/Alberta-Drone-Specialists-108741628175831" target="_blank" rel="noreferrer" title="Facebook page link">
              <FontAwesomeIcon icon={faFacebook} className={styles.icon} />
            </a>
            <a href="https://www.instagram.com/abdronespecialists/" target="_blank" rel="noreferrer" title="Instagram page link">
              <FontAwesomeIcon icon={faInstagram} className={styles.icon} />
            </a>
          </div>
        </div>
        <div className={styles.creditSection}>
          <span>&copy; Alberta Drone Specialists Ltd. 2021 All Rights Reserved</span>
          <span>Designed & Developed by <a href="https://bridgeittech.ca/" target="_blank" rel="noreferrer" title="developer link">BridgeIT Tech</a></span>
        </div>
      </div>
    </footer>
  );
}
 
export default AppFooter;