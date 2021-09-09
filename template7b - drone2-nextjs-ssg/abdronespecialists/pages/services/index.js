import Head from 'next/head'
import Banner from '../../components/Banner';
import { faBookmark, faBuilding, faCamera, faEnvelope, faHome, faPlayCircle, faTools, faUserFriends } from '@fortawesome/free-solid-svg-icons';

import MainLayout from "../../components/layouts/MainLayout";
import ServiceCard from '../../components/Services/ServiceCard';

import styles from '../../styles/Services/ServicesPage.module.css'

const ServicesPage = () => {
  const servicesData = [
    {
      title: 'Film & TV',
      body: 'Professional drone crew services for films, television, and commercials. Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
      routeTo: '/services/filmtv',
      icon: faPlayCircle
    },
    {
      title: 'FPV',
      body: 'Custom-built FPV drones operated by talented our pilots that allow for complete freedom for our cameras. Popular FPV shots include diving buildings, chasing subjects, flying in tight spaces, and anything else you can imagine. Our FPV services open the door for exciting, jaw-dropping shots.',
      routeTo: '/services/fpv',
      icon: faCamera
    },
    {
      title: 'Construction',
      body: 'Safe, affordable, and detail rich inspection/progress monitoring services that cause zero disruption to the site. Our team of specialists has experience performing construction progress and aerial inspection work for large companies like Amazon, Bombardier, and Dawson Wallace.',
      routeTo: '/services/construction',
      icon: faTools
    },
    {
      title: 'Commercial Real Estate',
      body: 'Showcase your property or commercial development with high-end aerial photos, video, and 360° content. Our team of professionals have worked with a variety of land developers and commercial real estate firms to help elevate their marketing.',
      routeTo: '/services/realestate',
      icon: faBuilding
    },
    {
      title: 'Aerial Photography & Videography',
      body: 'Using over 10 years of experience across a wide array of creative industries, Alberta Drone Specialists strives to capture aerial content that is sharp, professional, and represents our clients’ creative visions.',
      routeTo: '/services/aerial',
      icon: faCamera
    }
  ];

  const getCards = () => {
    return servicesData.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        body={service.body}
        routeTo={service.routeTo}
        icon={service.icon}
      />
    ));
  }

  return ( 
    <MainLayout>
      <Head>
        <title>Our Services - Alberta Drone Specialists</title>
      </Head>

      <div>
        <Banner className={styles.banner} imagePrefix="services-banner" isStatic>
          <div className={styles.bannerContext}>
            <h2 className={styles.heading2}>Services</h2>
            <span className={styles.subtitle}>We make your vision a reality</span>
          </div>
        </Banner>

        <div className={styles.container}>
          <div className={styles.content}>
            { getCards() }
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default ServicesPage;