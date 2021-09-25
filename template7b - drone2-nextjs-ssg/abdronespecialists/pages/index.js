import Head from 'next/head'
import Link from 'next/link'
import { Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown, faAngleRight } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'
import MainLayout from '../components/MainLayout'
import Image from '../components/Image'
import Video from '../components/Video'
import Carousel from '../components/Carousel'
import VideoModal from '../components/VideoModal'
import Partners from '../components/About/Partners'
import Highlights from '../components/About/Highlights'
import Divider from '../components/Divider'
import ContactPanel from '../components/Contact/ContactPanel'

import styles from '../styles/Home.module.css'
import DronesPanel from '../components/Equipment/DronesPanel'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Professional Drone Services | Alberta Drone Specialists</title>
        <meta name="description" content="Alberta Drone Specialists provides professional drone services across Alberta including cinematic for TV/film, FPV,  progress monitoring and aerial photography."></meta>
        <meta property="og:title" content="Professional Drone Services | Alberta Drone Specialists"></meta>
        <meta property="og:description" content="Alberta Drone Specialists provides professional drone services across Alberta including cinematic for TV/film, FPV,  progress monitoring and aerial photography."></meta>
      </Head>

      <div className={styles.mainBanner}>
        <Video 
          prefix="main" 
          isBackground 
          className={styles.bannerVideo}
        />
        <div className={styles.mainBannerContext}>
          <div className={styles.bannerText}>
            <p>
              <span>Quality drone services&nbsp;</span>
              <span>from experienced pilots.</span>
            </p>
            <VideoModal buttonText="View Reel">
              <Video 
                prefix="reel-fpv-filmtv" 
                placeholderPrefix="main"
                noWebM
              />
            </VideoModal>
          </div>
        </div>
      </div>

      <section className={styles.sectionPortfolio}>
        <div className={styles.portfolioHeader}>
          <Image 
            prefix="home-portfolio"
            title="tower building image"
            noLg
          />
          <h2 className={styles.heading2}>Why Choose Us?</h2>
        </div>
        <div className={styles.portfolioText}>
          <h2 className={styles.heading2}>Why Choose Us?</h2>
          <p className={styles.bodyText}>
            We are fully certified and able to accomplish any project you have in mind. Our Inspire 2 systems are equipped with a ballistic parachute system granting us approvals from Transport Canada to operate in dense urban environments. Additionally, all Alberta Drone Specialists’ pilots hold advanced RPAS licenses. 
          </p>
          <p className={styles.bodyText}>
            <strong>Don't know how to obtain proper permits and approvals?</strong> Let us handle it! We coordinate with Nav Canada for all flights in control zones near major airports and have experience coordinating drone operations and flight plans with National & Provincial Parks, Transport Canada, and Municipalities.
          </p>
          <h3 className={styles.heading3}>Trusted by:</h3>
          <Partners className={styles.portfolioPartners} />
          <Button
            text="Portfolio"
            href="/portfolio"
          />
        </div>
      </section>

      
      <section className={styles.sectionEquipment}>
        <div className={styles.equipmentContent}>
          <h2 className={styles.heading2}>Our Equipment</h2>
          <DronesPanel 
            carouselClassName={styles.equipmentCarousel}
            cardClassName={styles.equipmentCards}
            noArrows 
            infinite 
          />
        </div>
      </section>

      <section className={styles.sectionServices}>
        <div className={styles.servicesContent}>
          <h2 className={styles.heading2}>Services</h2>
          <Accordion className={styles.servicesAccordion}>
            <Accordion.Item eventKey="0">
              <Accordion.Header>
                <h3 className={styles.heading3}>Film & TV</h3>
                <div className={styles.accordionIcon}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <p>Professional drone crew services for films, television & commercials.</p>
                <Button
                  text="Explore Film & TV"
                  href="/services/filmtv"
                  className={styles.accordionLink}
                  iconClassName={styles.accordionLinkIcon}
                  title="Film & TV service page"
                />
                <Image 
                  prefix="home-services-accordion-filmtv"
                  title="winter landscape image"
                  className={styles.accordionImage}
                  isStatic
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
              <Accordion.Header>
                <h3 className={styles.heading3}>FPV</h3>
                <div className={styles.accordionIcon}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <p>Exceptional indoor & outdoor FPV footage.</p>
                <Button
                  text="Explore FPV"
                  href="/services/fpv"
                  className={styles.accordionLink}
                  iconClassName={styles.accordionLinkIcon}
                  title="FPV service page"
                />
                <Image 
                  prefix="home-services-accordion-fpv"
                  title="flying drone image"
                  className={styles.accordionImage}
                  isStatic
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
              <Accordion.Header>
                <h3 className={styles.heading3}>Construction</h3>
                <div className={styles.accordionIcon}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <p>Construction progress monitoring.</p>
                <Button
                  text="Explore Construction"
                  href="/services/construction"
                  className={styles.accordionLink}
                  iconClassName={styles.accordionLinkIcon}
                  title="Construction service page"
                />
                <Image 
                  prefix="home-services-accordion-construction"
                  title="bridge construction image"
                  className={styles.accordionImage}
                  isStatic
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
              <Accordion.Header>
                <h3 className={styles.heading3}>Commercial Real Estate</h3>
                <div className={styles.accordionIcon}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <p>Showcase your properties from new heights.</p>
                <Button
                  text="Explore Commercial Real Estate"
                  href="/services/realestate"
                  className={styles.accordionLink}
                  iconClassName={styles.accordionLinkIcon}
                  title="Commercial Real Estate service page"
                />
                <Image 
                  prefix="home-services-accordion-realestate"
                  title="downtown calgary image"
                  className={styles.accordionImage}
                  isStatic
                />
              </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="4">
              <Accordion.Header>
                <h3 className={styles.heading3}>Aerial Photography & Videography</h3>
                <div className={styles.accordionIcon}>
                  <FontAwesomeIcon icon={faAngleDown} />
                </div>
              </Accordion.Header>
              <Accordion.Body className={styles.accordionBody}>
                <p>Showcase your properties from new heights.</p>
                <Button
                  text="Explore Aerial Photography & Videography"
                  href="/services/aerial"
                  className={styles.accordionLink}
                  iconClassName={styles.accordionLinkIcon}
                  title="Aerial Photography & Videography service page"
                />
                <Image 
                  prefix="home-services-accordion-aerial"
                  title="cityscape image"
                  className={styles.accordionImage}
                  isStatic
                />
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
          <div className={styles.servicesCards}>
            <Link href="/services/filmtv">
              <a 
                className={styles.serviceCard + ` ${styles.cardSpan3}`}
                title=" service page link"
              >
                <Image 
                  prefix="home-services-card-filmtv"
                  title="film/tv service image"
                  isStatic
                  className={styles.serviceCardImage}
                />
                <div className={styles.cardText}>
                  <h3 className={styles.heading2}>Film/TV</h3>
                  <span>Film, TV, & commercials.</span>
                  <div className={styles.cardButton}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services/fpv">
              <a 
                className={styles.serviceCard + ` ${styles.cardSpan3}`}
                title=" service page link"
              >
                <Image 
                  prefix="home-services-card-fpv"
                  title="fpv service image"
                  isStatic
                  className={styles.serviceCardImage}
                />
                <div className={styles.cardText}>
                  <h3 className={styles.heading2}>FPV</h3>
                  <span>Indoor and outdoor <br />precision filming.</span>
                  <div className={styles.cardButton}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services/construction">
              <a 
                className={styles.serviceCard + ` ${styles.cardSpan2}`}
                title=" service page link"
              >
                <Image 
                  prefix="home-services-card-construction"
                  title="construction service image"
                  isStatic
                  className={styles.serviceCardImage}
                />
                <div className={styles.cardText}>
                  <h3 className={styles.heading3}>Construction</h3>
                  <div className={styles.cardButton}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services/realestate">
              <a 
                className={styles.serviceCard + ` ${styles.cardSpan2}`}
                title=" service page link"
              >
                <Image 
                  prefix="home-services-card-realestate"
                  title="commercial real estate service image"
                  isStatic
                  className={styles.serviceCardImage}
                />
                <div className={styles.cardText}>
                  <h3 className={styles.heading3}>Commercial Real Estate</h3>
                  <div className={styles.cardButton}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </a>
            </Link>
            <Link href="/services/aerial">
              <a 
                className={styles.serviceCard + ` ${styles.cardSpan2}`}
                title=" service page link"
              >
                <Image 
                  prefix="home-services-card-aerial"
                  title="aerial photography & videography service image"
                  isStatic
                  className={styles.serviceCardImage}
                />
                <div className={styles.cardText}>
                  <h3 className={styles.heading3}>Aerial Photography <br />& Videography</h3>
                  <div className={styles.cardButton}>
                    <FontAwesomeIcon icon={faAngleRight} />
                  </div>
                </div>
              </a>
            </Link>
          </div>
        </div>
      </section>
      
      <Divider />

      <Highlights />

      <Divider />

      <ContactPanel className={styles.contact} />
    </MainLayout>
  )
}
