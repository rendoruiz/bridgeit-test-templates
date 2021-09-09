import Banner from "../Banner";
import MainLayout from "../layouts/MainLayout";

import styles from '../../styles/Services/ServicesLayout.module.css'

const ServicesLayout = ({ children }) => {
  return ( 
    <MainLayout>
      <Banner imagePrefix="services-banner" isStatic>
        <div className={styles.bannerContext}>
          <h2 className={styles.heading2}>Services</h2>
          <span className={styles.subtitle}>We make your vision a reality.</span>
        </div>
      </Banner>

      { children }
    </MainLayout>
  );
}
 
export default ServicesLayout;