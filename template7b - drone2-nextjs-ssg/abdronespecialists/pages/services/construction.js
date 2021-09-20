import Head from 'next/head'
import { faTools } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal';

import styles from '../../styles/Services/ServicesDetail.module.css';

const ConstructionServicePage = () => {
  const data = {
    title: 'Construction',
    subtitle: 'Construction progress monitoring.',
    summaryText: 'Safe, affordable, and detail rich inspection/progress monitoring services that cause zero disruption to the site. Our team of specialists has experience performing construction progress and aerial inspection work for large companies like Amazon, Bombardier, and Dawson Wallace.',
    routeTo: '/services/construction',
    icon: faTools
  }

  return ( 
    <ServicesLayout 
      withNavigation 
      withPartners 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>Services | Construction | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots provide safe, affordable and detail rich inspection/progress monitoring that causes zero disruption to the work site."></meta>
        <meta property="og:title" content="Services | Construction | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots provide safe, affordable and detail rich inspection/progress monitoring that causes zero disruption to the work site."></meta>
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
 
export default ConstructionServicePage;