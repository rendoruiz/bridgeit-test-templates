import { useRouter } from "next/dist/client/router";
import { useEffect } from "react";
import Link from 'next/link'

import MainLayout from "../components/layouts/MainLayout";

import styles from '../styles/404.module.css'

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.push('/');
    }, 3000);
  }, []);

  return ( 
    <MainLayout>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Page Not Found</h2>
          <p>You will be redirected to the <Link href="/"><a className={styles.link}>homepage</a></Link> in a few seconds.</p>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default NotFound;