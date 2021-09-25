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
import { useState } from 'react';

const PortfolioPage = () => {
  const router = useRouter();
  const portfolioData = [
    {
      title: 'Film & TV',
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
    },
    {
      title: 'FPV',
      primaryMedia: {
        prefix: 'services-fpv-1',
        title: 'fpv service photo',
      },
      secondaryMedia: [
        {
          prefix: 'services-filmtv-4',
          title: 'fpv service photo'
        },
        {
          prefix: 'services-filmtv-5',
          title: 'fpv service photo'
        },
        {
          prefix: 'services-fpv-4',
          title: 'fpv service photo'
        },
        {
          prefix: 'services-fpv-5',
          title: 'fpv service photo'
        }
      ]
    },
    {
      title: 'Construction',
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
    },
    {
      title: 'Commercial Real Estate',
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
    },
    {
      title: 'Aerial Photography & Videography',
      primaryMedia: {
        prefix: 'services-aerial-1',
        title: 'Aerial Photography & Videography service photo',
      },
      secondaryMedia: [
        {
          prefix: 'services-aerial-2',
          title: 'Aerial Photography & Videography service photo'
        },
        {
          prefix: 'services-aerial-3',
          title: 'Aerial Photography & Videography service photo'
        },
        {
          prefix: 'services-aerial-4',
          title: 'Aerial Photography & Videography service photo'
        },
        {
          prefix: 'services-aerial-5',
          title: 'Aerial Photography & Videography service photo'
        }
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
        <title>Portfolio | Alberta Drone Specialists</title>
        <meta name="description" content=""></meta>
        <meta property="og:title" content="Portfolio | Alberta Drone Specialists"></meta>
        <meta property="og:description" content=""></meta>
      </Head>

      <div className={styles.portfolio}>
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