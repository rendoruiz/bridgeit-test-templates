import Head from 'next/head'
import { faBuilding } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'

import styles from '../../styles/Services/ServicesDetail.module.css';

const RealEstateServicePage = () => {
  const data = {
    title: 'Commercial Real Estate',
    subtitle: 'Showcase your properties from new heights.',
    summaryText: 'Showcase your property or commercial development with high-end aerial photos, video, and 360° content. Our team of professionals have worked with a variety of land developers and commercial real estate firms to help elevate their marketing.',
    routeTo: '/services/realestate',
    icon: faBuilding,
    primaryMedia: {
      prefix: 'services-realestate-1',
      title: 'commercial real estate service photo',
    },
    secondaryMedia: [
      {
        prefix: 'services-realestate-2',
        title: 'commercial real estate service photo'
      },
      {
        prefix: 'services-realestate-3',
        title: 'commercial real estate service photo'
      },
      {
        prefix: 'services-realestate-4',
        title: 'commercial real estate service photo'
      },
      {
        prefix: 'services-realestate-5',
        title: 'commercial real estate service photo'
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
        <title>Services | Commercial Real Estate | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots can showcase your property or commercial development with high-end aerial photos, video and º360 content."></meta>
        <meta property="og:title" content="Services | Commercial Real Estate | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots can showcase your property or commercial development with high-end aerial photos, video and º360 content."></meta>
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
 
export default RealEstateServicePage;