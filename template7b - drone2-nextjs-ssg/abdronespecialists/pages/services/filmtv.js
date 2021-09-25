import Head from 'next/head'
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';

import ServicesLayout from "../../components/Services/ServicesLayout";
import ServiceDetailCard from '../../components/Services/ServiceDetailCard';
import Carousel from '../../components/Carousel'

import styles from '../../styles/Services/ServicesDetail.module.css';

const FilmTvServicePage = () => {
  const data = {
    title: 'Film & TV',
    subtitle: 'Professional drone crews for film, television and commercials.',
    summaryText: 'Professional drone crew services for films, television, and commercials. Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
    detailText: 'Our team of drone operators, drone camera operators, and drone technicians have experience working with a wide range of productions from integrating with main units on large productions to splinter units on lower budget productions.',
    routeTo: '/services/filmtv',
    icon: faPlayCircle,
    primaryMedia: {
      prefix: 'services-filmtv-1',
      title: 'film & tv service photo',
    },
    secondaryMedia: [
      {
        prefix: 'services-filmtv-2',
        title: 'film & tv service photo'
      },
      {
        prefix: 'services-filmtv-3',
        title: 'film & tv service photo'
      },
      {
        prefix: 'services-filmtv-4',
        title: 'film & tv service photo'
      },
      {
        prefix: 'services-filmtv-5',
        title: 'film & tv service photo'
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
        <title>Services | Film & TV | Alberta Drone Specialists</title>
        <meta name="description" content="Our experienced drone pilots provide professional drone services for film, television and commercials."></meta>
        <meta property="og:title" content="Services | Film & TV | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Our experienced drone pilots provide professional drone services for film, television and commercials."></meta>
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
 
export default FilmTvServicePage;