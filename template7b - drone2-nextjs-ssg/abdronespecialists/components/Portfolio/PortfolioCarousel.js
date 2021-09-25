import classNames from 'classnames';
import { useRouter } from 'next/dist/client/router';

import Carousel from '../../components/Carousel'

import styles from '../../styles/Portfolio/PortfolioCarousel.module.css'

const PortfolioCarousel = ({ className, data }) => {
  const router = useRouter();

  const setActive = (id) => {
    if (!router.query.id && id === 0) {
      return styles.active;
    }
    else if (router.query.id === id) {
      return styles.active;
    }
    return null;
  }

  const getCategories = () => {
    return data.map((category, categoryIndex) => (
      <div 
        key={category + categoryIndex}
        className={classNames(styles.categoryItem, setActive(categoryIndex))}
      >
        <h3 className={styles.heading}>{ category.title }</h3>
        <Carousel noArrows>
          { [category.primaryMedia, ...category.secondaryMedia].map((media, index) => (
            <img
              key={category.title + '-carousel' + index}
              src={'/images/' + media.prefix + '-sm.jpg'}
              alt={media.title}
              className={styles.carouselItem}
            />
          )) }
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