import Head from 'next/head'
import { useEffect, useRef } from 'react';
import DronesPanel from '../components/Equipment/DronesPanel';

import MainLayout from "../components/layouts/MainLayout";

import styles from '../styles/Equipment/EquipmentPage.module.css'
import { useRouter } from 'next/dist/client/router';

const EquipmentPage = () => {
  const router = useRouter();
  const droneRef = useRef();

  const navigateDroneCarousel = (index) => {
    droneRef.current.slickGoTo(index);
  }

  useEffect(() => {
    navigateDroneCarousel(router.query.id);
  }, [router.query.id])

  return ( 
    <MainLayout>
      <Head>
        <title>Our Equipment - Alberta Drone Specialists</title>
      </Head>

      <div>
        <div> 
          <button onClick={() => router.push('/equipment?id=0', undefined, { shallow: true })}>1</button>
          <button onClick={() => router.push('/equipment?id=1', undefined, { shallow: true })}>2</button>
          <button onClick={() => router.push('/equipment?id=2', undefined, { shallow: true })}>3</button>
          <button onClick={() => router.push('/equipment?id=3', undefined, { shallow: true })}>4</button>
          <button onClick={() => router.push('/equipment?id=4', undefined, { shallow: true })}>5</button>
          <DronesPanel carouselRef={droneRef} carouselInitialSlide={router.query.id} carouselOnly infinite isLongText />
        </div>
      </div>
    </MainLayout>
  );
}
 
export default EquipmentPage;