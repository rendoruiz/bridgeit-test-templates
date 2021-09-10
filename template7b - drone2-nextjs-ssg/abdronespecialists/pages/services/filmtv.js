import Head from 'next/head'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal';

import styles from '../../styles/Services/ServicesDetail.module.css';

const FilmTvServicePage = () => {
  const data = {
    title: 'Film & TV',
    subtitle: 'Professional drone crews for film, television and commercials.',
    summaryText: 'Professional drone crew services for films, television, and commercials. Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
    detailText: 'Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
    routeTo: '/services/filmtv',
    icon: faPlayCircle
  }

  return ( 
    <ServicesLayout 
      withNavigation 
      withPartners 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>Film & TV Service - Alberta Drone Specialists</title>
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
 
export default FilmTvServicePage;