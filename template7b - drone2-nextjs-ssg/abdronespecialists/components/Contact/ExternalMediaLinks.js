import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';

import styles from '../../styles/Contact/ExternalMediaLinks.module.css';

const ExternalMediaLinks = ({ className }) => {
  return ( 
    <div className={styles.externalLinks + (!className ? '' : ` ${className}`)}>
      <a 
        href="https://www.youtube.com/channel/UCz8CmyohSEjXX0vGBF4YapQ" 
        target="_blank" rel="noreferrer" 
        title="YouTube channel link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a 
        href="https://www.facebook.com/Alberta-Drone-Specialists-108741628175831" 
        target="_blank" rel="noreferrer" 
        title="Facebook page link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faFacebook} />
      </a>
      <a 
        href="https://www.instagram.com/abdronespecialists/" 
        target="_blank" rel="noreferrer" 
        title="Instagram page link"
        className={styles.link}
      >
        <FontAwesomeIcon icon={faInstagram} />
      </a>
    </div>
  );
}
 
export default ExternalMediaLinks;