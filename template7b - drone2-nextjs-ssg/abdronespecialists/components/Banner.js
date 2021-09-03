import styles from '../styles/Banner.module.css';

import Image from '../components/Image'
import Video from '../components/Video'

const Banner = ({ children, imagePrefix, fileExtension, videoPrefix, title, className, mdContentHalf, fullHeight }) => {
  const setImageBackground = () => {
    return (
      <Image 
        prefix={imagePrefix}
        className={styles.background}
        fileExtension={fileExtension}
        title={title}
      />
    )
  }
  const setVideoBackground = () => {
    return (
      <Video 
        prefix={videoPrefix}
        isBackground 
        className={styles.background}
      />
    )
  }
  const bannerStyles = styles.banner
    + (!className ? '' : ` ${className}`)
    + (!mdContentHalf ? '' : ` ${styles.contentHalf}`)
    + (!fullHeight ? '' : ` ${styles.fullHeight}`);

  return (!imagePrefix && !videoPrefix) ? null: ( 
    <div className={bannerStyles}>
      { setImageBackground() }
      { setVideoBackground() }
      { children }
    </div>
  );
}
 
export default Banner;