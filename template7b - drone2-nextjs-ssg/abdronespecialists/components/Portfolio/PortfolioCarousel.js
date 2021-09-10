import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';

import Carousel from '../../components/Carousel'
import Image from '../../components/Image'
import VideoModal from '../../components/VideoModal'

import styles from '../../styles/Portfolio/PortfolioCarousel.module.css'

const PortfolioCarousel = ({ className, data }) => {
  const router = useRouter();
  const mainCarouselRef = useRef();

  useEffect(() => {
    navigateMainCarousel(router.query.id);
  }, [router.query.id]);

  const navigateMainCarousel = (index) => {
    mainCarouselRef.current.slickGoTo(index);
  }

  const getMainCarousel = () => {
    return data.map((category) => (
      <div className={styles.mainCarouselItem}>
        <h3 className={styles.heading}>{ category.title }</h3>
        <Carousel adaptiveHeight noArrows>
          { [category.primaryMedia, ...category.secondaryMediaList].map((media, i) => getMediaListCarousel(media, i)) }
          {/* <VideoModal 
            imagePrefix="highlights-pv3"
            title="highlight video"
            youtubeEmbedId="Zi_trzln4ss"
          /> */}
        </Carousel>
      </div>
    ))
  }

  const getMediaListCarousel = (media, i) => {
    if (media.type === 'video') {
      return (
        <VideoModal 
          imagePrefix={media.imagePrefix}
          youtubeEmbedId={media.youtubeEmbedId}
          title="lel"
        />
      )
    } else if (media.type === 'image') {
      
    } else {
      console.error('unknown media type');
    }
  }

  const mainCarouselProperties = {
    carouselRef: mainCarouselRef, 
    carouselInitialSlide: router.query.id, 
    // noArrows: true, 
    // noDots: true, 
    // adaptiveHeight: true, 
    // fade: true
  }

  return !data ? null : ( 
    <div className={classNames(styles.content, className)}>
      <Carousel {...mainCarouselProperties} notSwipable noArrows noDots adaptiveHeight>
        { getMainCarousel() }
      </Carousel>
    </div>
  );
}
 
export default PortfolioCarousel;