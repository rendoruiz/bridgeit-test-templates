import Head from 'next/head'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'
import MainLayout from '../components/layouts/MainLayout'
import Modal from '../components/CustomModal'
import Image from '../components/Image'
import Video from '../components/Video'
import Carousel from '../components/Carousel'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [isBannerModalOpen, setIsBannerModalOpen] = useState(false);

  const toggleBannerModal = () => {
    setIsBannerModalOpen(!isBannerModalOpen);
  }

  return (
    <MainLayout>
      <Head>
        <title>Home - Alberta Drone Specialists</title>
      </Head>

      <div className={styles.mainBanner}>
        <Video 
          prefix="main" 
          isBackground 
        />
        <div className={styles.mainBannerContext}>
          <p>
            <span>Quality&nbsp;</span>
            <span>drone services&nbsp;</span>
            <span>from experienced pilots.</span>
          </p>
          <Button 
            text="View Reel" 
            onClick={toggleBannerModal}
          />
          <Modal
            isOpen={isBannerModalOpen}
            onRequestClose={toggleBannerModal}
            title="View Reel Video Modal"
          >
            <Video 
              prefix="reel-fpv-filmtv" 
              placeholderPrefix="main"
            />
          </Modal>
        </div>
      </div>

      <section className={styles.sectionPortfolio}>
        <div className={styles.portfolioHeader}>
          <Image 
            prefix="home-portfolio"
            title="tower building image"
          />
          <h2 className={styles.heading2}>Why Choose Us?</h2>
        </div>
        <div className={styles.portfolioText}>
          <p className={styles.bodyText}>
            We are fully certified and able to accomplish any project you have in mind. Our Inspire 2 systems are equipped with a ballistic parachute system granting us approvals from Transport Canada to operate in dense urban environments. Additionally, all Alberta Drone Specialists’ pilots hold advanced RPAS licenses. 
          </p>
          <p className={styles.bodyText}>
            <strong>Don't know how to obtain proper permits and approvals?</strong> Let us handle it! We coordinate with Nav Canada for all flights in control zones near major airports and have experience coordinating drone operations and flight plans with National & Provincial Parks, Transport Canada, and Municipalities.
          </p>
          <h3 className={styles.heading3}>Trusted by:</h3>
          <div className={styles.portfolioCustomers}>
            <img src="/images/logo-disney-white.png" alt="H4H: Horsepower For Hope logo" loading="lazy" />
            <img src="/images/logo-fx-white.png" alt="Kids with Cancer Society logo" loading="lazy" />
            <img src="/images/logo-cbc-white.png" alt="FX logo" loading="lazy" />
            <img src="/images/logo-h4h-white.png" alt="Disney logo" loading="lazy" />
            <img src="/images/logo-kwcs-white.png" alt="CBC logo" loading="lazy" />
          </div>
          <Button
            text="Portfolio"
            href="/"
          />
        </div>
      </section>

      <section className={styles.sectionEquipment}>
        <h2 className={styles.heading2}>Our Equipment</h2>

        <Carousel className={styles.carousel}>
          <Image 
            prefix="home-portfolio"
            title="tower building image"
          />
          <Image 
            prefix="home-portfolio"
            title="tower building image"
          />
          <Image 
            prefix="home-portfolio"
            title="tower building image"
          />
        </Carousel>
      </section>

      <section className={styles.sectionServices}>
        <h2 className={styles.heading2}>Services</h2>
        
        <Accordion className={styles.servicesAccordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              <h3 className={styles.heading3}>Film & TV</h3>
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>Professional drone crew services for films, television & commercials.</p>
              <Button
                text="Explore Film & TV"
                href="/"
                className={styles.accordionLink}
                iconClassName={styles.accordionLinkIcon}
                title="Film & TV service page"
              />
              <Image 
                prefix="home-accordion-filmtv"
                title="winter landscape image"
                pictureClassName={styles.accordionImage}
                noMd
                noLg
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>
              <h3 className={styles.heading3}>FPV</h3>
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>Exceptional indoor & outdoor FPV footage.</p>
              <Button
                text="Explore FPV"
                href="/"
                className={styles.accordionLink}
                iconClassName={styles.accordionLinkIcon}
                title="FPV service page"
              />
              <Image 
                prefix="home-accordion-fpv"
                title="flying drone image"
                pictureClassName={styles.accordionImage}
                noMd
                noLg
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>
              <h3 className={styles.heading3}>Construction</h3>
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>Construction progress monitoring.</p>
              <Button
                text="Explore Construction"
                href="/"
                className={styles.accordionLink}
                iconClassName={styles.accordionLinkIcon}
                title="Construction service page"
              />
              <Image 
                prefix="home-accordion-construction"
                title="bridge construction image"
                pictureClassName={styles.accordionImage}
                noMd
                noLg
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>
              <h3 className={styles.heading3}>Commercial Real Estate</h3>
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>Showcase your properties from new heights.</p>
              <Button
                text="Explore Commercial Real Estate"
                href="/"
                className={styles.accordionLink}
                iconClassName={styles.accordionLinkIcon}
                title="Commercial Real Estate service page"
              />
              <Image 
                prefix="home-accordion-realestate"
                title="downtown calgary image"
                pictureClassName={styles.accordionImage}
                noMd
                noLg
              />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>
              <h3 className={styles.heading3}>Aerial Photography & Videography</h3>
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body className={styles.accordionBody}>
              <p>Showcase your properties from new heights.</p>
              <Button
                text="Explore Aerial Photography & Videography"
                href="/"
                className={styles.accordionLink}
                iconClassName={styles.accordionLinkIcon}
                title="Aerial Photography & Videography service page"
              />
              <Image 
                prefix="home-accordion-aerial"
                title="cityscape image"
                pictureClassName={styles.accordionImage}
                noMd
                noLg
              />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      
      <div className={styles.sectionSeparatorLight}></div>

      <section className={styles.sectionHighlights}>
        <h2>Highlights</h2>
      </section>

      <div className={styles.sectionSeparatorLight}></div>

      <section className={styles.sectionContact}>
        <h2>Send us a message.</h2>
      </section>
    </MainLayout>
  )
}
