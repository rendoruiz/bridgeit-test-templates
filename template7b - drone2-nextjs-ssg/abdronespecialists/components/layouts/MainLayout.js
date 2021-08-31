import Head from 'next/head'

import AppFooter from "../AppFooter";
import AppHeader from "../AppHeader";

import styles from '../../styles/MainLayout.module.css';

const MainLayout = ({ children }) => {
  return ( 
    <div className={styles.appcontainer}>
      <Head>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
        {/* <link rel="preload" href="https://use.typekit.net/smp6txj.css" as="style" onload="this.onload=null;this.rel='stylesheet'" />
        <noscript><link rel="stylesheet" href="https://use.typekit.net/smp6txj.css" /></noscript> */}
        <link rel="stylesheet" href="https://use.typekit.net/smp6txj.css" />
      </Head>
      <AppHeader />
      { children }
      <AppFooter />
    </div>
  );
}
 
export default MainLayout;