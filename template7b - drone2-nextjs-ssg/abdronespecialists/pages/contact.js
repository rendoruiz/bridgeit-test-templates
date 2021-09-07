import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';

import MainLayout from "../components/layouts/MainLayout";
import Banner from '../components/Banner';
import ContactPanel from '../components/Contact/ContactPanel';
import Divider from '../components/Divider'
import ExternalMediaLinks from '../components/Contact/ExternalMediaLinks';

import styles from '../styles/Contact/ContactPage.module.css'

const ContactPage = () => {
  return ( 
    <MainLayout>
      <Head>
        <title>Contact Us - Alberta Drone Specialists</title>
      </Head>

      <div>
        <Banner imagePrefix="about-banner" className={styles.banner}>
          <div className={styles.bannerContent}>
            <span>Contact Us</span>
          </div>
        </Banner>
        <Divider className={styles.dividerTop} />

        <ContactPanel />

        <div className={styles.cards}>
          <div className={styles.cardsContent}>
            <div className={styles.followCard}>
              <h3 className={styles.heading3}>Follow Us</h3>
              <ExternalMediaLinks className={styles.externalIcons} iconClassName={styles.externalIcon} />
            </div>
            <a 
              href="tel:+1-780-938-3090" 
              className={styles.phoneCard}
            >
              <h3 className={styles.heading3}>Phone</h3>
              <div className={styles.icon}>
                <FontAwesomeIcon 
                  icon={faMobileAlt} 
                  className={styles.svg} 
                />
              </div>
              <span>(780) 938-3090</span>
            </a>
            <div className={styles.hoursCard}>
              <h3 className={styles.heading3}>Office Hours</h3>
              <div className={styles.icon}>
                <FontAwesomeIcon 
                  icon={faClock} 
                  className={styles.svg} 
                />
              </div>
              <p className={styles.hoursText}>
                <span>Mon-Fri</span>
                <span>9 am. to 5 pm.</span>
              </p>
            </div>
          </div>
        </div>

        <Divider className={styles.dividerBottom} isDark />
      </div>
    </MainLayout>
  );
}
 
export default ContactPage;