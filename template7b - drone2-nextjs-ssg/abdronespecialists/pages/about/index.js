import Highlights from "../../components/About/Highlights";
import Partners from "../../components/About/Partners";
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import MainLayout from "../../components/layouts/MainLayout";

import styles from '../../styles/About/AboutPage.module.css'

const AboutPage = () => {
  return ( 
    <MainLayout>
      <Banner imagePrefix="about-banner">
        <div className={styles.bannerContent}>
          <p className={styles.bannerHeading}>
            <span>Our experience&nbsp;</span>
            <span>brings you exceptional results.</span> 
          </p>
          <h3 className={styles.bannerSubheading}>Trusted by:</h3>
          <Partners className={styles.partners} />
        </div>
      </Banner>

      
      <Divider className={styles.divider} />
      <Highlights className={styles.highlights} />
    </MainLayout>
  );
}
 
export default AboutPage;