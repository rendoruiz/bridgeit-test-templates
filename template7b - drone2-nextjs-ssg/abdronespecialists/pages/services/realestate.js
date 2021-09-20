import Head from 'next/head'
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal';

import styles from '../../styles/Services/ServicesDetail.module.css';

const RealEstateServicePage = () => {
  const data = {
    title: 'Commercial Real Estate',
    subtitle: 'Showcase your properties from new heights.',
    summaryText: 'Showcase your property or commercial development with high-end aerial photos, video, and 360° content. Our team of professionals have worked with a variety of land developers and commercial real estate firms to help elevate their marketing.',
    routeTo: '/services/realestate',
    icon: faBuilding
  }
  
  return (
    <ServicesLayout 
      withNavigation 
      withPartners 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>Services | Commercial Real Estate | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots can showcase your property or commercial development with high-end aerial photos, video and º360 content."></meta>
        <meta property="og:title" content="Services | Commercial Real Estate | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots can showcase your property or commercial development with high-end aerial photos, video and º360 content."></meta>
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
 
export default RealEstateServicePage;