import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal'

import styles from '../../styles/About/Highlights.module.css'

const Highlights = ({ className, contentClassName }) => {
  return ( 
    <section className={styles.highlights + ` ${className}`}>
      <div className={styles.content+ ` ${contentClassName}`}>
        <h2 className={styles.heading2}>Highlights</h2>
        <Carousel  
          className={styles.carousel}
          noArrows
        >
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv2"
            title="highlight video"
            youtubeEmbedId="ohsQcJyELi0"
            className={styles.carouselItem}
          />
          <VideoModal 
            imagePrefix="highlights-pv3"
            title="highlight video"
            youtubeEmbedId="Zi_trzln4ss"
            className={styles.carouselItem}
          />
        </Carousel>
        <div className={styles.cards}>
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
          />
          <VideoModal 
            imagePrefix="highlights-pv2"
            title="highlight video"
            youtubeEmbedId="ohsQcJyELi0"
          />
          <VideoModal 
            imagePrefix="highlights-pv3"
            title="highlight video"
            youtubeEmbedId="Zi_trzln4ss"
          />
        </div>
      </div>
    </section>
  );
}
 
export default Highlights;