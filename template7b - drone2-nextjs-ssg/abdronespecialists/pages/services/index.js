import Head from 'next/head'
import { faBuilding, faCamera, faPlayCircle, faTools } from '@fortawesome/free-solid-svg-icons';

import ServiceCard from '../../components/Services/ServiceCard';
import DroneIcon from '../../components/DroneIcon';
import ServicesLayout from '../../components/Services/ServicesLayout';

import styles from '../../styles/Services/ServicesPage.module.css'

const ServicesPage = () => {
  const servicesData = [
    {
      title: 'Film & TV',
      subtitle: 'Professional drone crews for film, television and commercials.',
      summaryText: 'Professional drone crew services for films, television, and commercials. Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
      detailText: 'Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
      routeTo: '/services/filmtv',
      icon: faPlayCircle
    },
    {
      title: 'FPV',
      subtitle: 'Exceptional FPV footage.',
      summaryText: 'Custom-built FPV drones operated by talented our pilots that allow for complete freedom for our cameras. Popular FPV shots include diving buildings, chasing subjects, flying in tight spaces, and anything else you can imagine. Our FPV services open the door for exciting, jaw-dropping shots.',
      routeTo: '/services/fpv',
      svgIcon: <DroneIcon />
    },
    {
      title: 'Construction',
      subtitle: 'Construction progress monitoring.',
      summaryText: 'Safe, affordable, and detail rich inspection/progress monitoring services that cause zero disruption to the site. Our team of specialists has experience performing construction progress and aerial inspection work for large companies like Amazon, Bombardier, and Dawson Wallace.',
      routeTo: '/services/construction',
      icon: faTools
    },
    {
      title: 'Commercial Real Estate',
      subtitle: 'Showcase your properties from new heights.',
      summaryText: 'Showcase your property or commercial development with high-end aerial photos, video, and 360° content. Our team of professionals have worked with a variety of land developers and commercial real estate firms to help elevate their marketing.',
      routeTo: '/services/realestate',
      icon: faBuilding
    },
    {
      title: 'Aerial Photography & Videography',
      subtitle: 'Events, marketing, real estate.',
      summaryText: 'Using over 10 years of experience across a wide array of creative industries, Alberta Drone Specialists strives to capture aerial content that is sharp, professional, and represents our clients’ creative visions.',
      routeTo: '/services/aerial',
      icon: faCamera
    }
  ];

  const getCards = () => {
    return servicesData.map((service, index) => (
      <ServiceCard
        key={index}
        title={service.title}
        body={service.summaryText}
        routeTo={service.routeTo}
        icon={service.icon}
        svgIcon={service.svgIcon}
        className={styles.card}
      />
    ));
  }

  return ( 
    <ServicesLayout contentClassName={styles.content}>
      <Head>
        <title>Services | Alberta Drone Specialists</title>
        <meta name="description" content="Our professional drone crews provide a wide range of services including TV/film, indoor/outdoor FPV, progress monitoring, and aerial photography and video."></meta>
        <meta property="og:title" content="Services | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our professional drone crews provide a wide range of services including TV/film, indoor/outdoor FPV, progress monitoring, and aerial photography and video."></meta>
      </Head>

      <div className={styles.contentHeading}>
        <h2 className={styles.heading2}>Services</h2>
        <span className={styles.subtitle}>We make your vision a reality.</span>
      </div>
      { getCards() }
    </ServicesLayout>
  );
}
 
export default ServicesPage;