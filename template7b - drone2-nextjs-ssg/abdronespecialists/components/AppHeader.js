import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from '../styles/AppHeader.module.css';

const AppHeader = () => {
  return ( 
    <header className={styles.appHeader}>
      <div className={styles.logo}>ADS</div>
      <FontAwesomeIcon icon={faBars} />
    </header>
  );
}
 
export default AppHeader;