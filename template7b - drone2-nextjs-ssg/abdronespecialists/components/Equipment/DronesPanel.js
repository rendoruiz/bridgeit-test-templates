import classNames from "classnames";

import Carousel from '../../components/Carousel'
import DroneCard from '../../components/DroneCard'

import styles from '../../styles/Equipment/DronesPanel.module.css'

const DronesPanel = ({ carouselClassName, cardClassName, noArrows, infinite, carouselOnly, carouselRef, carouselInitialSlide }) => {
  const droneList = [
    {
      imagePrefix: 'equipment-dji-inspire-2',
      imageTitle: 'DJI Inspire 2 image',
      heading: 'DJI Inspire 2',
      bodyText: 'Image quality, power and intelligence to meet the needs of professional filmmakers and enterprises around the globe.',
      hrefId: '0'
    },
    {
      imagePrefix: 'equipment-zenmuse-x7',
      imageTitle: 'Zenmuse X7 image',
      heading: 'Zenmuse X7',
      bodyText: 'The Zenmuse X7 is a compact Super 35 camera with an integrated gimbal made for high-end filmmaking.',
      hrefId: '1',
      fileExtension: 'png'
    },
    {
      imagePrefix: 'equipment-indemnis-nexus',
      imageTitle: 'Indemnis Nexus image',
      heading: 'Indemnis Nexus',
      bodyText: 'The Nexus by Indemnis is the first UAV recovery system to be proven reliable in any failure situation.',
      hrefId: '2',
      fileExtension: 'png'
    },
    {
      imagePrefix: 'equipment-outdoor-fpv',
      imageTitle: 'Outdoor FPV image',
      heading: 'Outdoor FPV',
      bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis.',
      hrefId: '3'
    },
    {
      imagePrefix: 'equipment-indoor-fpv',
      imageTitle: 'Indoor FPV image',
      heading: 'Indoor FPV',
      bodyText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis.',
      hrefId: '4'
    }
  ];

  const getDrones = (keyPrefix) => {
    return droneList.map((drone, index) => ( 
      <DroneCard 
        key={keyPrefix + index}
        imagePrefix={drone.imagePrefix}
        imageTitle={drone.imageTitle}
        heading={drone.heading}
        body={drone.bodyText}
        href={"/equipment?id=" + drone.hrefId}
        fileExtension={drone.fileExtension}
      />
    ));
  }

  return <>
    <Carousel 
      className={classNames(styles.carousel, carouselClassName)} 
      noArrows={noArrows}
      infinite={infinite}
      carouselRef={carouselRef}
      carouselInitialSlide={carouselInitialSlide}
    >
      { getDrones('carousel') }
    </Carousel>
    { !carouselOnly && (
      <div className={classNames(styles.cards, cardClassName)}>
        { getDrones('card') }
      </div>
    )}
  </>
}
 
export default DronesPanel;