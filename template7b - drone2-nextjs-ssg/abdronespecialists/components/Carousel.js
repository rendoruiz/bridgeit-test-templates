import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";

import styles from '../styles/Carousel.module.css';

const Carousel = ({ children, config, className }) => {
  const PrevArrow = ({ onClick }) => {
    return (
      <button className={styles.button}>
        <FontAwesomeIcon 
          icon={faChevronLeft} 
          onClick={onClick}
          className={styles.buttonIcon}
        />
      </button>
    )
  }
  const NextArrow = ({ onClick }) => {
    return (
      <button className={styles.button}>
        <FontAwesomeIcon 
          icon={faChevronRight} 
          onClick={onClick}
          className={styles.buttonIcon}
        />
      </button>
    )
  }
  // const DotItem = ({ dot }) => {

  // }

  var defaultConfig = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: styles.dotList,
    appendDots: dots => (<ul>{ dots }</ul>)
  };

  return !children ? null : ( 
    <Slider
      {...defaultConfig}
      {...config}
      className={`${styles.carousel} ${className}`}
    >
      { children }
    </Slider>
  );
}
 
export default Carousel;