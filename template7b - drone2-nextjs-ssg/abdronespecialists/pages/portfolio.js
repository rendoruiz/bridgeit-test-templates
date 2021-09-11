import Head from 'next/head'

import MainLayout from "../components/MainLayout";
import PortfolioNavigation from "../components/Portfolio/PortfolioNavigation";
import Banner from '../components/Banner';
import Partners from "../components/About/Partners";
import Divider from '../components/Divider'

import styles from '../styles/Portfolio/PortfolioPage.module.css'
import PortfolioCarousel from '../components/Portfolio/PortfolioCarousel';
import ExternalMediaLinks from '../components/Contact/ExternalMediaLinks';
import { useRouter } from 'next/dist/client/router';
import PortfolioGallery from '../components/Portfolio/PortfolioGallery';
import classNames from 'classnames';

const PortfolioPage = () => {
  const router = useRouter();
  const portfolioData = [
    {
      title: 'Film & TV',
      primaryMedia: {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'}
      ]
    },
    {
      title: 'FPV',
      primaryMedia: {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'}
      ]
    },
    {
      title: 'Construction',
      primaryMedia: {type: 'video', youtubeEmbedId: 'Zi_trzln4ss', imagePrefix: 'highlights-pv3'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'Zi_trzln4ss', imagePrefix: 'highlights-pv3'},
        {type: 'video', youtubeEmbedId: 'Zi_trzln4ss', imagePrefix: 'highlights-pv3'},
        {type: 'video', youtubeEmbedId: 'Zi_trzln4ss', imagePrefix: 'highlights-pv3'}
      ]
    },
    {
      title: 'Commercial Real Estate',
      primaryMedia: {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'}
      ]
    },
    {
      title: 'Aerial Photography & Videography',
      primaryMedia: {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'},
        {type: 'video', youtubeEmbedId: 'ohsQcJyELi0', imagePrefix: 'highlights-pv2'}
      ]
    }
  ];

  const setHeading = () => {
    const heading = portfolioData[router.query.id ?? 0];
    if (heading) {
      return heading.title;
    } else {
      router.push('/portfolio', undefined, { shallow: true });
    }
  }

  const getGalleryItems = () => {
    return portfolioData.map((item, index) => (
      <PortfolioGallery 
        key={item.title}
        className={classNames(styles.galleryItem, setActive(index))} 
        data={item} 
      />
    ));
  }

  const setActive = (id) => {
    if (!router.query.id && id === 0) {
      return styles.active;
    }
    else if (router.query.id == id) {
      return styles.active;
    }
    return null;
  }

  return ( 
    <MainLayout>
      <Head>
        <title>Our Portfolio - Alberta Drone Specialists</title>
      </Head>

      <div>
        <Banner className={styles.banner} imagePrefix="equipment-bg-1" isStatic>
          <div className={styles.bannerContent}>
            <h2 className={styles.heading2}>Portfolio</h2>
            <span className={styles.headingBlurb}>Follow us to see our latest projects.</span>
            <ExternalMediaLinks className={styles.mediaLinks} />
          </div>
        </Banner>

        <div className={styles.container}>
          <div className={styles.content}>
            <h2 className={styles.heading2}>{ setHeading() }</h2>
            <PortfolioNavigation className={styles.navigation} />

            {/* Mobile */}
            <PortfolioCarousel data={portfolioData} />
            <div className={styles.partnerContent}>
              <h3 className={styles.heading3}>Trusted by:</h3>
              <Partners className={styles.partners} />
            </div>
          </div>
        </div>
        
        <div className={styles.galleryContainer}>
          <div className={styles.galleryContent}>
            <div className={styles.galleries}>
              { getGalleryItems() }
            </div>
            <PortfolioNavigation className={styles.navigation} />
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
 
export default PortfolioPage;