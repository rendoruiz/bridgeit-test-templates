import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Slider from "react-slick";
import { useRef, useState } from "react";

import styles from '../styles/Carousel.module.css';
import { useRouter } from "next/dist/client/router";
import classNames from "classnames";

const Carousel = ({ children, infinite, noDots, noArrows, className, carouselRef, carouselInitialSlide, fade, asNavFor, isStatic, adaptiveHeight, arrowsMd }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

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

  const routeAfterChange = (n) => {
    if (router.query.id !== n && router.asPath.includes('/equipment')) {
      router.push('/equipment?id=' + n, undefined, { shallow: true });
    }
  }

  var defaultConfig = {
    dots: !noDots,
    arrows: !noArrows,
    infinite: infinite,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    beforeChange: (current, next) => setCurrentSlide(next),
    afterChange: (i) => routeAfterChange(i),
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
    dotsClass: styles.dotList,
    appendDots: dots => (<ul>{ dots }</ul>),
    initialSlide: carouselInitialSlide ?? 0,
    fade: fade ?? false,
    asNavFor: asNavFor,
    draggable: isStatic ? false : true,
    adaptiveHeight: adaptiveHeight ?? false
  };

  return !children ? null : ( 
    <Slider
      ref={carouselRef}
      {...defaultConfig}
      className={classNames(styles.carousel, className, !noArrows ? null : styles.noArrows, !arrowsMd ? null : styles.arrowsMd)}
    >
      { children }
    </Slider>
  );
}
 
export default Carousel;