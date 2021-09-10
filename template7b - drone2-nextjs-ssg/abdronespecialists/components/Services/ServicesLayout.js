import classNames from "classnames";

import Banner from "../Banner";
import MainLayout from "../MainLayout";
import ServicesNavigation from "./ServicesNavigation";
import Partners from "../About/Partners";

import styles from '../../styles/Services/ServicesLayout.module.css'

const ServicesLayout = ({ children, withNavigation, withPartners, heading, contentClassName }) => {
  const getNavigation = () => {
    if (withNavigation) {
      return (
        <div className={styles.headingContent}>
          <h2 className={styles.heading2}>{ heading }</h2>
          <ServicesNavigation />
        </div>
      )
    }
  }
  const getPartners = () => {
    if (withPartners) {
      return (
        <div className={styles.partnersContent}>
          <h3 className={styles.heading3}>Trusted By:</h3>
          <Partners className={styles.partners} />
        </div>
      )
    }
  }

  return ( 
    <MainLayout>
      <div>
        <Banner imagePrefix="services-banner" isStatic>
          <div className={styles.bannerContext}>
            <h2 className={styles.heading2}>Services</h2>
            <span className={styles.subtitle}>We make your vision a reality.</span>
          </div>
        </Banner>

        <div className={styles.container}>
          { getNavigation() }
          <div className={classNames(styles.content, contentClassName)}>
            { children }
          </div>
          { getPartners() }    
        </div>
      </div>
    </MainLayout>
  );
}
 
export default ServicesLayout;