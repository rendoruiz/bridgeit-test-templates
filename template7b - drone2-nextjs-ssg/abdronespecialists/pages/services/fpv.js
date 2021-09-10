import Head from 'next/head'

import DroneIcon from '../../components/DroneIcon';
import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal';

import styles from '../../styles/Services/ServicesDetail.module.css';

const FpvServicePage = () => {
  const data = {
    title: 'FPV',
    subtitle: 'Exceptional FPV footage.',
    summaryText: 'Custom-built FPV drones operated by talented our pilots that allow for complete freedom for our cameras. Popular FPV shots include diving buildings, chasing subjects, flying in tight spaces, and anything else you can imagine. Our FPV services open the door for exciting, jaw-dropping shots.',
    routeTo: '/services/fpv',
    svgIcon: <DroneIcon />
  }

  return ( 
    <ServicesLayout 
      withNavigation 
      heading={data.title} 
      contentClassName={styles.content}
    >
      <Head>
        <title>FPV Service - Alberta Drone Specialists</title>
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

      <div className={styles.blurb}>
        <h3 className={styles.blurbHeading}>Where have we flown besides AB?</h3>
        <p>Croatia, Slovenia, Germany, France, Las Vegas, Kentucky, Florida, Ontario, BC.</p>
        <p className={styles.subtitle}>Watch Travis Ames compete DR1 2018 <a href="https://www.youtube.com/watch?v=ohsQcJyELi0" target="_blank" rel="noreferrer" className={styles.blurbLink}>here</a>.</p>
      </div>
    </ServicesLayout>
  );
}
 
export default FpvServicePage;