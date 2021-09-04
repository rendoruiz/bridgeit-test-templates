import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/AppFooter.module.css';
import ExternalMediaLinks from './Contact/ExternalMediaLinks';

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
          <ExternalMediaLinks 
            className={styles.externalLinks} 
            iconClassName={styles.icon} 
          />
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