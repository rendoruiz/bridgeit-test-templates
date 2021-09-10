import Head from 'next/head'

import MainLayout from "../components/MainLayout";
import PortfolioNavigation from "../components/Portfolio/PortfolioNavigation";
import Banner from '../components/Banner';
import Partners from "../components/About/Partners";
import Carousel from '../components/Carousel'

import styles from '../styles/Portfolio/PortfolioPage.module.css'
import PortfolioCarousel from '../components/Portfolio/PortfolioCarousel';

const PortfolioPage = () => {
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
      primaryMedia: {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'}
      ]
    },
    {
      title: 'Construction',
      primaryMedia: {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'}
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
      primaryMedia: {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
      secondaryMediaList: [
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'},
        {type: 'video', youtubeEmbedId: 'ifO6DECu6-k', imagePrefix: 'highlights-pv1'}
      ]
    }
  ]

  return ( 
    <MainLayout>
      <Head>
        <title>Our Portfolio - Alberta Drone Specialists</title>
      </Head>

      <div>
        <Banner className={styles.banner} imagePrefix="equipment-bg-1" isStatic>
          <div className={styles.bannerContent}>
            <h2 className={styles.heading2}>Portfolio</h2>
          </div>
        </Banner>

        <div className={styles.container}>
          <div className={styles.content}>
            <PortfolioNavigation className={styles.navigation} />

            <PortfolioCarousel data={portfolioData} />

            <div className={styles.partnerContent}>
              <h3 className={styles.heading3}>Trusted by:</h3>
              <Partners className={styles.partners} />
            </div>
          </div>
        </div>
        
      </div>
    </MainLayout>
  );
}
 
export default PortfolioPage;