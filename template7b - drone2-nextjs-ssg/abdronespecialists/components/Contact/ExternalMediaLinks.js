import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/Contact/ExternalMediaLinks.module.css';

const ExternalMediaLinks = ({ className, iconClassName }) => {
  return ( 
    <div className={styles.externalLinks + (!className ? '' : ` ${className}`)}>
      <a 
        href="https://www.youtube.com/channel/UCz8CmyohSEjXX0vGBF4YapQ" 
        target="_blank" rel="noreferrer" 
        title="YouTube channel link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faYoutube} className={iconClassName} />
      </a>
      <a 
        href="https://www.facebook.com/Alberta-Drone-Specialists-108741628175831" 
        target="_blank" rel="noreferrer" 
        title="Facebook page link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faFacebook} className={iconClassName} />
      </a>
      <a 
        href="https://www.instagram.com/abdronespecialists/" 
        target="_blank" rel="noreferrer" 
        title="Instagram page link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faInstagram} className={iconClassName} />
      </a>
    </div>
  );
}
 
export default ExternalMediaLinks;