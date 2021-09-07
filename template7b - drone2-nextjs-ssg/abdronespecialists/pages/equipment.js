import Head from 'next/head'
import { useRef } from 'react';
import DronesPanel from '../components/Equipment/DronesPanel';
import Slider from "react-slick";

import MainLayout from "../components/layouts/MainLayout";

import styles from '../styles/Equipment/EquipmentPage.module.css'

const EquipmentPage = () => {
  const droneRef = useRef();

  const navCarousel = (index) => {
    droneRef.current.slickGoTo(index);
  }

  return ( 
    <MainLayout>
      <Head>
        <title>Our Equipment - Alberta Drone Specialists</title>
      </Head>

      <div>
        <div>
          <button onClick={() => navCarousel(0)}>1</button>
          <button onClick={() => navCarousel(1)}>2</button>
          <button onClick={() => navCarousel(2)}>3</button>
          <button onClick={() => navCarousel(3)}>4</button>
          <button onClick={() => navCarousel(4)}>5</button>
          <DronesPanel carouselRef={droneRef} carouselOnly />
        </div>
      </div>
    </MainLayout>
  );
}
 
export default EquipmentPage;