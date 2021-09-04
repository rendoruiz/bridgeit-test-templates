import Head from 'next/head'
import Banner from '../components/Banner';
import ContactPanel from '../components/Contact/ContactPanel';

import MainLayout from "../components/layouts/MainLayout";

import styles from '../styles/Contact/ContactPage.module.css'

const ContactPage = () => {
  return ( 
    <MainLayout>
      <Head>
        <title>Contact Us - Alberta Drone Specialists</title>
      </Head>

      <div className={styles.contact}>
        <Banner imagePrefix="about-banner">
          <div className={styles.bannerContent}>
            <span>Contact Us</span>
          </div>
        </Banner>

        <ContactPanel />
      </div>
    </MainLayout>
  );
}
 
export default ContactPage;