import Head from 'next/head'
import Link from 'next/link'

import MainLayout from "../components/layouts/MainLayout";
import Banner from '../components/Banner';
import ContactPanel from '../components/Contact/ContactPanel';
import Divider from '../components/Divider'

import styles from '../styles/Contact/ContactPage.module.css'

const ContactPage = () => {
  return ( 
    <MainLayout>
      <Head>
        <title>Contact Us - Alberta Drone Specialists</title>
      </Head>

      <div className={styles.contact}>
        <Banner imagePrefix="about-banner" className={styles.banner}>
          <div className={styles.bannerContent}>
            <span>Contact Us</span>
          </div>
        </Banner>
        <Divider className={styles.dividerTop} />

        <ContactPanel />

        <div className={styles.cards}>
          <div>
            <h3>Follow Us</h3>
          </div>
          <a href="tel:+7809383090">
            <h3>Phone</h3>
            (780) 938-3090
          </a>
          <div>
            <h3>Office Hours</h3>

          </div>
        </div>

        <Divider className={styles.dividerBottom} isDark />
      </div>
    </MainLayout>
  );
}
 
export default ContactPage;