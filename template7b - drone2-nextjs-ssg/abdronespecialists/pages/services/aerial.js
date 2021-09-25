import Head from 'next/head'
import { faCamera } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal';

import styles from '../../styles/Services/ServicesDetail.module.css';

const AerialServicePage = () => {
  const data = {
    title: 'Aerial Photography & Videography',
    subtitle: 'Events, marketing, real estate.',
    summaryText: 'Using over 10 years of experience across a wide array of creative industries, Alberta Drone Specialists strives to capture aerial content that is sharp, professional, and represents our clients’ creative visions.',
    routeTo: '/services/aerial',
    icon: faCamera,
    primaryMedia: {
      prefix: 'services-aerial-1',
      title: 'Aerial Photography & Videography service photo',
    },
    secondaryMedia: [
      {
        prefix: 'services-aerial-2',
        title: 'Aerial Photography & Videography service photo'
      },
      {
        prefix: 'services-aerial-3',
        title: 'Aerial Photography & Videography service photo'
      },
      {
        prefix: 'services-aerial-4',
        title: 'Aerial Photography & Videography service photo'
      },
      {
        prefix: 'services-aerial-5',
        title: 'Aerial Photography & Videography service photo'
      }
    ]
  }
  
  return ( 
    <ServicesLayout 
      withNavigation 
      withPartners 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>Services | Aerial Photography & Video | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots provide high quality aerial photography and video perfect for capturing events, marketing and showcasing real estate."></meta>
        <meta property="og:title" content="Services | Aerial Photography & Video | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots provide high quality aerial photography and video perfect for capturing events, marketing and showcasing real estate."></meta>
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
    </ServicesLayout>
  );
}
 
export default AerialServicePage;