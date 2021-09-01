
import styles from '../styles/Image.module.css';

const Image = ({ prefix, title, isContained, className, noMd, noLg, fileExtension }) => {
  return !prefix ? null : ( 
    <picture className={styles.picture + (!className ? "" : ` ${className}`)}>
      { noLg ? null : (
        <source 
          srcSet={`/images/${prefix}-lg.${fileExtension ?? "jpg"}`} 
          media="(min-width: 1024px)" 
          alt={title ?? "untitled image"} 
          className={!isContained ? styles.imageCover : styles.imageContain}
        />
      )} 
      { noMd ? null : (
        <source 
          srcSet={`/images/${prefix}-md.${fileExtension ?? "jpg"}`} 
          media="(min-width: 768px)" 
          alt={title ?? "untitled image"} 
          className={!isContained ? styles.imageCover : styles.imageContain}
        />
      )}
      <img 
        src={`/images/${prefix}-sm.${fileExtension ?? "jpg"}`} 
        alt={title ?? "untitled image"} 
        className={!isContained ? styles.imageCover : styles.imageContain}
      />
    </picture>
  );
}
 
export default Image;