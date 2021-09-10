import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';
import { useEffect, useRef } from 'react';

import Carousel from '../../components/Carousel'
import Image from '../../components/Image'
import VideoModal from '../../components/VideoModal'

import styles from '../../styles/Portfolio/PortfolioCarousel.module.css'

const PortfolioCarousel = ({ className, data }) => {
  const router = useRouter();

  const getMediaItem= (media) => {
    if (media.type === 'video') {
      return (
        <VideoModal 
          imagePrefix={media.imagePrefix}
          youtubeEmbedId={media.youtubeEmbedId}
          title={media.title ?? "untitled media"}
          className={styles.carouselItem}
        />
      )
    } else if (media.type === 'image') {
      
    } else {
      console.error('unknown media type');
    }
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

  const getCategories = () => {
    return data.map((category, categoryIndex) => (
      <div className={classNames(styles.categoryItem, setActive(categoryIndex))}>
        <h3 className={styles.heading}>{ category.title }</h3>
        <Carousel noArrows>
          { [category.primaryMedia, ...category.secondaryMediaList].map((media) => getMediaItem(media)) }
        </Carousel>
      </div>
    ))
  }

  return !data ? null : ( 
    <div className={classNames(styles.content, className)}>
      { getCategories() }
    </div>
  );
}
 
export default PortfolioCarousel;