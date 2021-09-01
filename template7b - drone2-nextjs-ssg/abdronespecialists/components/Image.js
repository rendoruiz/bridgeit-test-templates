
import styles from '../styles/Image.module.css';

const Image = ({ prefix, title, className, pictureClassName, noMd, noLg }) => {
  return !prefix ? null : ( 
    <picture className={pictureClassName}>
      { noLg ? null : (
        <source 
          srcSet={`/images/${prefix}-lg.jpg`} 
          media="(min-width: 1024px)" 
          alt={title ?? "untitled image"} 
          className={className ?? styles.image}
        />
      )} 
      { noMd ? null : (
        <source 
          srcSet={`/images/${prefix}-md.jpg`} 
          media="(min-width: 768px)" 
          alt={title ?? "untitled image"} 
          className={className ?? styles.image}
        />
      )}
      <img 
        src={`/images/${prefix}-sm.jpg`} 
        alt={title ?? "untitled image"} 
        className={className ?? styles.image}
      />
    </picture>
  );
}
 
export default Image;