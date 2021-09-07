import Head from 'next/head'

import MainLayout from "../components/layouts/MainLayout";

import styles from '../styles/Equipment/EquipmentPage.module.css'

const EquipmentPage = () => {
  return ( 
    <MainLayout>
      <Head>
        <title>Our Equipment - Alberta Drone Specialists</title>
      </Head>
    </MainLayout>
  );
}
 
export default EquipmentPage;