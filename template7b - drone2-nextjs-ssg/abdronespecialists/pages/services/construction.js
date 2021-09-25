import Head from 'next/head'
import { faTools } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'

import styles from '../../styles/Services/ServicesDetail.module.css';

const ConstructionServicePage = () => {
  const data = {
    title: 'Construction',
    subtitle: 'Construction progress monitoring.',
    summaryText: 'Safe, affordable, and detail rich inspection/progress monitoring services that cause zero disruption to the site. Our team of specialists has experience performing construction progress and aerial inspection work for large companies like Amazon, Bombardier, and Dawson Wallace.',
    routeTo: '/services/construction',
    icon: faTools,
    primaryMedia: {
      prefix: 'services-construction-1',
      title: 'construction service photo',
    },
    secondaryMedia: [
      {
        prefix: 'services-construction-2',
        title: 'construction service photo'
      },
      {
        prefix: 'services-construction-3',
        title: 'construction service photo'
      },
      {
        prefix: 'services-construction-4',
        title: 'construction service photo'
      },
      {
        prefix: 'services-construction-5',
        title: 'construction service photo'
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
        <title>Services | Construction | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots provide safe, affordable and detail rich inspection/progress monitoring that causes zero disruption to the work site."></meta>
        <meta property="og:title" content="Services | Construction | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots provide safe, affordable and detail rich inspection/progress monitoring that causes zero disruption to the work site."></meta>
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
 
export default ConstructionServicePage;