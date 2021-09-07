import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef, useState } from "react";

import styles from '../styles/Carousel.module.css';

const Carousel = ({ children, infinite, noDots, noArrows, className, carouselRef, carouselInitialSlide, fade, asNavFor }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const PrevArrow = ({ onClick }) => {
    return (
      <button 
        className={((currentSlide > 0) || infinite) ? styles.button : styles.inactiveButton}
        title="carousel back button"
      >
        <FontAwesomeIcon 
          icon={faChevronLeft} 
          onClick={onClick}
        />
      </button>
    )
  }
  const NextArrow = ({ onClick }) => {
    return (
      <button 
        className={((currentSlide + 1 < children.length) || infinite) ? styles.button : styles.inactiveButton}
        title="carousel next button"
      >
        <FontAwesomeIcon 
          icon={faChevronRight} 
          onClick={onClick}
        />
      </button>
    )
  }

  var defaultConfig = {
    dots: !noDots,
    arrows: !noArrows,
    infinite: infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: styles.dotList,
    appendDots: dots => (<ul>{ dots }</ul>),
    initialSlide: carouselInitialSlide ?? 0,
    fade: fade ?? false,
    asNavFor: asNavFor
  };

  return !children ? null : ( 
    <Slider
      ref={carouselRef}
      {...defaultConfig}
      className={styles.carousel + (!className ? '' : ` ${className}`) + (!noArrows ? '' : ` ${styles.noArrows}`)}
    >
      { children }
    </Slider>
  );
}
 
export default Carousel;