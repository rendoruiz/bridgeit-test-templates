import Link from 'next/link'

import MainLayout from "../components/MainLayout";

import styles from '../styles/404.module.css'

const NotFound = () => {
  return ( 
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Page Not Found</h2>
          <p>Go back to the homepage by clicking <Link href="/"><a className={styles.link}>this link</a></Link>.</p>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default NotFound;