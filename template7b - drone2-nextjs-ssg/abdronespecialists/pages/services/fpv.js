import Head from 'next/head'

import DroneIcon from '../../components/DroneIcon';
import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'

import styles from '../../styles/Services/ServicesDetail.module.css';

const FpvServicePage = () => {
  const data = {
    title: 'FPV',
    subtitle: 'Exceptional FPV footage.',
    summaryText: 'Custom-built FPV drones operated by our talented pilots that allow for complete freedom for our cameras. Popular FPV shots include diving buildings, chasing subjects, flying in tight spaces, and anything else you can imagine. Our FPV services open the door for exciting, jaw-dropping shots.',
    routeTo: '/services/fpv',
    svgIcon: <DroneIcon />,
    primaryMedia: {
      prefix: 'services-fpv-1',
      title: 'fpv service photo',
    },
    secondaryMedia: [
      {
        prefix: 'services-filmtv-4',
        title: 'fpv service photo'
      },
      {
        prefix: 'services-filmtv-5',
        title: 'fpv service photo'
      },
      {
        prefix: 'services-fpv-4',
        title: 'fpv service photo'
      },
      {
        prefix: 'services-fpv-5',
        title: 'fpv service photo'
      }
    ]
  }

  return ( 
    <ServicesLayout 
      withNavigation 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>Services | FPV | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots provide exceptional indoor and outdoor FPV drone services that capture cinematic shots like never before."></meta>
        <meta property="og:title" content="Services | FPV | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots provide exceptional indoor and outdoor FPV drone services that capture cinematic shots like never before."></meta>
      </Head>
      
      <img 
        src={'/images/' + data.primaryMedia.prefix + '-md.jpg'}
        alt={data.primaryMedia.title}
        className={styles.mediaPrimary}
      />
      
      <ServiceDetailCard
        heading={data.title}
        subtitle={data.subtitle}
        body={data.detailText ?? data.summaryText}
        icon={data.icon}
        svgIcon={data.svgIcon}
      />

      <div className={styles.mediaSecondaries}>
        {[...data.secondaryMedia].map((media, index) => (
          <img 
            key={data.title + index}
            src={'/images/' + media.prefix + '-md.jpg'}
            alt={media.title}
            className={styles.mediaSecondary}
          />
        ))}
      </div>

      <div className={styles.carouselContainer}>
        <h2 className={styles.heading}>Our Work</h2>
        <Carousel noArrows>
          {[data.primaryMedia, ...data.secondaryMedia].map((media, index) => (
            <img 
              key={data.title + '-carousel' + index}
              src={'/images/' + media.prefix + '-sm.jpg'}
              alt={media.title}
              className={styles.carouselImage}
            />
          ))}
        </Carousel>
      </div>

      <div className={styles.blurb}>
        <h3 className={styles.blurbHeading}>Where have we flown besides AB?</h3>
        <p>Croatia, Slovenia, Germany, France, Las Vegas, Kentucky, Florida, Ontario, BC.</p>
        <p className={styles.subtitle}>Watch Travis Ames compete DR1 2018 <a href="https://www.youtube.com/watch?v=ohsQcJyELi0" target="_blank" rel="noreferrer" className={styles.blurbLink}>here</a>.</p>
      </div>
    </ServicesLayout>
  );
}
 
export default FpvServicePage;