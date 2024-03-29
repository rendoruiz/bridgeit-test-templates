import Head from 'next/head'
import { useEffect, useRef, useState } from 'react';
import DronesPanel from '../components/Equipment/DronesPanel';
import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';

import MainLayout from "../components/MainLayout";
import Carousel from "../components/Carousel";
import Image from "../components/Image";
import Divider from '../components/Divider';
import DroneMenu from '../components/Equipment/DroneMenu';
import Banner from '../components/Banner';

import styles from '../styles/Equipment/EquipmentPage.module.css'

const EquipmentPage = () => {
  const router = useRouter();
  const droneRef = useRef();
  // const bannerRef = useRef();
  // const [banner, setBanner] = useState(null);
  // const [drone, setDrone] = useState(null)

  // run once
  // useEffect(() => {
  //   setBanner(bannerRef.current);
  //   setDrone(droneRef.current);
  // }, []);

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
        <title>Equipment | Alberta Drone Specialists</title>
        <meta name="description" content=""></meta>
        <meta property="og:title" content="Equipment | Alberta Drone Specialists"></meta>
        <meta property="og:description" content=""></meta>
      </Head>

      <div>
        <Banner className={styles.banner} imagePrefix="equipment-bg-1" isStatic>
          <div className={styles.bannerContent}>
            <h2 className={styles.heading}>Equipment</h2>
          </div>
        </Banner>
        {/* <div className={styles.banner}>
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
          </Carousel>
        </div> */}

        <Divider isDark className={classNames(styles.divider, styles.topDivider)} />

        <div className={styles.desktopHeadingContainer}>
          <div className={styles.headingContent}>
            <h2 className={styles.heading}>Equipment</h2>

            <DroneMenu className={styles.menu} />
          </div>
        </div>

        <div className={styles.carouselContainer}>
          <DronesPanel carouselClassName={styles.carousel} carouselRef={droneRef} carouselInitialSlide={router.query.id} carouselOnly isLongText infinite />
        </div>

        <Divider isDark className={classNames(styles.divider, styles.bottomDivider)} />
      </div>
    </MainLayout>
  );
}
 
export default EquipmentPage;