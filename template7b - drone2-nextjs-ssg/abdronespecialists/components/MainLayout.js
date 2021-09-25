import AppFooter from "./AppFooter";
import AppHeader from "./AppHeader";

import styles from '../styles/MainLayout.module.css';

const MainLayout = ({ children }) => {
  return ( 
    <div className={styles.appcontainer}>
      <AppHeader />
      { children }
      <AppFooter />
    </div>
  );
}
 
export default MainLayout;