import classNames from "classnames";

import Banner from "../Banner";
import MainLayout from "../MainLayout";
import ServicesNavigation from "./ServicesNavigation";

import styles from '../../styles/Services/ServicesLayout.module.css'

const ServicesLayout = ({ children, withNavigation, heading, contentClassName }) => {
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
        </div>
      </div>
    </MainLayout>
  );
}
 
export default ServicesLayout;