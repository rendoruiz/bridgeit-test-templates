import Carousel from '../../components/Carousel'
import VideoModal from '../../components/VideoModal'

import styles from '../../styles/About/Highlights.module.css'

const Highlights = ({ className }) => {
  const portfolioData = [
    {
      imagePrefix: 'highlights-h4h',
      title: 'Horsepower 4 Hope highlight video',
      youtubeEmbedId: 'ifO6DECu6-k'
    },
    {
      imagePrefix: 'highlights-dr1',
      title: 'DR1 racing highlight video',
      youtubeEmbedId: 'ohsQcJyELi0'
    },
    {
      imagePrefix: 'highlights-az',
      title: 'Amazon FPV highlight video',
      youtubeEmbedId: 'Zi_trzln4ss'
    }
  ]

  return ( 
    <section className={styles.highlights + ` ${className}`}>
      <div className={styles.content}>
        <h2 className={styles.heading2}>Highlights</h2>
        <Carousel  
          className={styles.carousel}
          noArrows
        >
          { portfolioData.map((portfolio, index) => (
            <VideoModal 
              key={'highlights-carousel-' + index}
              imagePrefix={portfolio.imagePrefix} 
              title={portfolio.title}
              youtubeEmbedId={portfolio.youtubeEmbedId}
              className={styles.carouselItem}
            />
          )) }
        </Carousel>
        <div className={styles.cards}>
          { portfolioData.map((portfolio, index) => (
            <VideoModal 
              key={'highlights-cards-' + index}
              imagePrefix={portfolio.imagePrefix} 
              title={portfolio.title}
              youtubeEmbedId={portfolio.youtubeEmbedId}
            />
          )) }
        </div>
      </div>
    </section>
  );
}
 
export default Highlights;