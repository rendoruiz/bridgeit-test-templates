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
    icon: faCamera
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
      
      <VideoModal 
        imagePrefix="highlights-pv1"
        title="highlight video"
        youtubeEmbedId="ifO6DECu6-k"
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
        <VideoModal 
          imagePrefix="highlights-pv1"
          title="highlight video"
          youtubeEmbedId="ifO6DECu6-k"
          className={styles.mediaSecondary}
        />
        <VideoModal 
          imagePrefix="highlights-pv1"
          title="highlight video"
          youtubeEmbedId="ifO6DECu6-k"
          className={styles.mediaSecondary}
        />
        <VideoModal 
          imagePrefix="highlights-pv1"
          title="highlight video"
          youtubeEmbedId="ifO6DECu6-k"
          className={styles.mediaSecondary}
        />
        <VideoModal 
          imagePrefix="highlights-pv1"
          title="highlight video"
          youtubeEmbedId="ifO6DECu6-k"
          className={styles.mediaSecondary}
        />
      </div>

      <div className={styles.carouselContainer}>
        <h2 className={styles.heading}>Our Work</h2>
        <Carousel noArrows>
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
        </Carousel>
      </div>
    </ServicesLayout>
  );
}
 
export default AerialServicePage;