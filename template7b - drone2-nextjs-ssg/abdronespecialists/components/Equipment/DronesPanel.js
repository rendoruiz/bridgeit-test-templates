import classNames from "classnames";
import { useEffect } from "react";

import Carousel from '../../components/Carousel'
import DroneCard from '../../components/DroneCard'

import styles from '../../styles/Equipment/DronesPanel.module.css'

const DronesPanel = ({ carouselClassName, cardClassName, noArrows, infinite, carouselOnly, carouselRef, carouselInitialSlide, isLongText, carouselAsNavFor, carouselAdaptiveHeight }) => {
  const droneList = [
    {
      imagePrefix: 'equipment-dji-inspire-2',
      imageTitle: 'DJI Inspire 2 image',
      heading: 'DJI Inspire 2',
      shortText: 'Image quality, power and intelligence to meet the needs of professional filmmakers and enterprises around the globe.',
      longText: [
        'CineCore2.1 processing system records video at up to 6K in CinemaDNG/RAW and 5.2K in Apple ProRes when used with Zenmuse X7 camera. It goes from 0 to 50 mph (80 kph) in 5 seconds and hits a maximum speed of 58 mph (94 kph) with a max descent speed of 9m/s. A dual battery system prolongs the flight time to a maximum of 27 minutes (with an X4S), while self-heating technology allows it to fly in low temperatures.',
        'FlightAutonomy has been revised and developed specifically for the Inspire 2, providing two directions of obstacle avoidance and sensor redundancy. It has multiple intelligent flight modes, including Spotlight Pro. An upgraded video transmission system is now capable of dual signal frequency and dual channel, streaming video from an onboard FPV camera and the main camera simultaneously.'
      ],
      hrefId: '0'
    },
    {
      imagePrefix: 'equipment-zenmuse-x7',
      imageTitle: 'Zenmuse X7 image',
      heading: 'Zenmuse X7',
      shortText: 'The Zenmuse X7 is a compact Super 35 camera with an integrated gimbal made for high-end filmmaking.',
      longText: [
        'The Zenmuse X7 is a compact Super 35 camera with an integrated gimbal made for high-end filmmaking that delivers stunning resolution and image quality. Its compatibility with the Inspire 2 offers the best in next-level professional aerial cinematography. A 24 MP CMOS sensor rated at 14 stops of dynamic range preserves astonishing detail and offers both 6K CinemaDNG and 5.2K Apple ProRes* with support for continuous RAW burst shooting at 20 fps and 24 MP stills.'
      ],
      hrefId: '1',
      fileExtension: 'png'
    },
    {
      imagePrefix: 'equipment-indemnis-nexus',
      imageTitle: 'Indemnis Nexus image',
      heading: 'Indemnis Nexus',
      shortText: 'The Nexus by Indemnis is the first UAV recovery system to be proven reliable in any failure situation.',
      longText: [
        'The Nexus by Indemnis is the first UAV recovery system to be proven reliable in any failure situation. The Nexus system is designed to enable operations over people.',
        'The Nexus Features both a Manual Deployment and an Autonomous deployment System. The Nexus auto deployment system allows for a faster recovery of the drone during a failure. Once the failure has been detected the Nexus system will deploy within .03 seconds. Allowing the parachute to escape any failure scenario.'
      ],
      hrefId: '2',
      fileExtension: 'png'
    },
    {
      imagePrefix: 'equipment-outdoor-fpv',
      imageTitle: 'Outdoor FPV image',
      heading: 'Outdoor FPV',
      shortText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis.',
      longText: [
        'The Cidora SL5 V2.1 HD w/ DJI Air Unit BNF features the amazing new DJI FPV system and makes flying FPV truly breathtaking.',
        'With the 720p video shown at 120fps through the goggles, DJI has set the bar at a new high for clarity and image quality in an FPV system.',
        'This frame offers a squashed X layout for maximum control, equipped SucceX-D F7(50A 4-in-1 ESC) stack and popular XING motors.'
      ],
      hrefId: '3'
    },
    {
      imagePrefix: 'equipment-indoor-fpv',
      imageTitle: 'Indoor FPV image',
      heading: 'Indoor FPV',
      shortText: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis.',
      longText: [
        'The latest 3-inch Quadcopter developed by GEPRC is the best sub-250g FPV pusher drone with incredibly stable, HD video.',
        'CineLog30 is developed from CingLog25 and has stronger 1404-3850kv motors, T3 x 3 x 3 propellers and a newly developed GEP-CL30 high-impact carbon frame with ultra light fuselage weight.',
        'This drone maneuvers easily allowing us to capture stable HD video indoors and through tight spaces.'
      ],
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
        shortText={drone.shortText}
        longText={drone.longText}
        href={"/equipment?id=" + drone.hrefId}
        fileExtension={drone.fileExtension}
        isLongText={isLongText}
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
      asNavFor={carouselAsNavFor}
      adaptiveHeight={carouselAdaptiveHeight}
      arrowsMd
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