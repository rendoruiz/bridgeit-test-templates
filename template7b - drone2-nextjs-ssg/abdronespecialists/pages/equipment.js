import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import DronesPanel from '../components/Equipment/DronesPanel';

import MainLayout from "../components/layouts/MainLayout";
import Carousel from "../components/Carousel";
import Image from "../components/Image";

import styles from '../styles/Equipment/EquipmentPage.module.css'
import { useRouter } from 'next/dist/client/router';

const EquipmentPage = () => {
  const router = useRouter();
  const droneRef = useRef();
  const bannerRef = useRef();
  const [banner, setBanner] = useState(null);
  const [drone, setDrone] = useState(null)

  // run once
  useEffect(() => {
    setBanner(bannerRef.current);
    setDrone(droneRef.current);
  }, []);

  //  run on route change
  useEffect(() => {
    navigateDroneCarousel(router.query.id);
  }, [router.query.id]);

  const navigateDroneCarousel = (index) => {
    droneRef.current.slickGoTo(index);
  }

  return ( 
    <MainLayout>
      <Head>
        <title>Our Equipment - Alberta Drone Specialists</title>
      </Head>

      <div>
        <div className={styles.banner}>
          <Carousel noArrows noDots carouselRef={bannerRef} fade asNavFor={drone} isStatic>
            <div className={styles.bannerImage}>
              <Image prefix="equipment-bg-1" isStatic />
            </div>
            <div className={styles.bannerImage}>
              <Image prefix="equipment-bg-2" isStatic />
            </div>
            <div className={styles.bannerImage}>
              <Image prefix="equipment-bg-2" isStatic />
            </div>
            <div className={styles.bannerImage}>
              <Image prefix="equipment-bg-2" isStatic />
            </div>
            <div className={styles.bannerImage}>
              <Image prefix="equipment-bg-2" isStatic />
            </div>
            {/* <Image prefix="equipment-bg-1" isStatic className={styles.bannerImage} isContained /> */}
            {/* <Image prefix="equipment-bg-2" isStatic className={styles.bannerImage} isContained />
            <Image prefix="equipment-bg-2" isStatic className={styles.bannerImage} isContained />
            <Image prefix="equipment-bg-2" isStatic className={styles.bannerImage} isContained />
            <Image prefix="equipment-bg-2" isStatic className={styles.bannerImage} isContained /> */}
          </Carousel>
          <h2 className={styles.heading}>Equipment</h2>
        </div>

        <div className={styles.desktopHeadingContainer}>
          <div className={styles.headingContent}>
            <h2 className={styles.heading}>Equipment</h2>
            <button onClick={() => router.push('/equipment?id=0', undefined, { shallow: true })}>1</button>
            <button onClick={() => router.push('/equipment?id=1', undefined, { shallow: true })}>2</button>
            <button onClick={() => router.push('/equipment?id=2', undefined, { shallow: true })}>3</button>
            <button onClick={() => router.push('/equipment?id=3', undefined, { shallow: true })}>4</button>
            <button onClick={() => router.push('/equipment?id=4', undefined, { shallow: true })}>5</button>
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <DronesPanel carouselClassName={styles.carousel} carouselRef={droneRef} carouselInitialSlide={router.query.id} carouselOnly infinite isLongText carouselAsNavFor={banner} />
        </div>
      </div>
    </MainLayout>
  );
}
 
export default EquipmentPage;