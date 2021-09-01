import Head from 'next/head'
import { useState } from 'react'
import { Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

import Button from '../components/Button'
import MainLayout from '../components/layouts/MainLayout'
import Image from '../components/Image'
import Video from '../components/Video'
import Carousel from '../components/Carousel'

import styles from '../styles/Home.module.css'
import DroneCard from '../components/DroneCard'
import VideoModal from '../components/VideoModal'
import Form from '../components/Form'

export default function Home() {
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
          <VideoModal buttonText="View Reel">
            <Video 
              prefix="reel-fpv-filmtv" 
              placeholderPrefix="main"
              noWebM
            />
          </VideoModal>
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
            <Image 
              prefix="logo-disney-white"
              fileExtension="png"
              title="H4H: Horsepower For Hope logo"
              isContained
              className={styles.portfolioLogo}
              noMd
            />
            <Image 
              prefix="logo-fx-white"
              fileExtension="png"
              title="Kids with Cancer Society logo"
              isContained
              className={styles.portfolioLogo}
              noMd
            />
            <Image 
              prefix="logo-cbc-white"
              fileExtension="png"
              title="FX logo"
              isContained
              className={styles.portfolioLogo}
              noMd
            />
            <Image 
              prefix="logo-h4h-white"
              fileExtension="png"
              title="Disney logo"
              isContained
              className={styles.portfolioLogo4}
              noMd
            />
            <Image 
              prefix="logo-kwcs-white"
              fileExtension="png"
              title="CBC logo"
              isContained
              className={styles.portfolioLogo}
              noMd
            />
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
          <DroneCard 
            imagePrefix="equipment-dji-inspire-2"
            imageTitle="DJI Inspire 2 image"
            heading="DJI Inspire 2"
            body="Image quality, power and intelligence to meet the needs of professional filmmakers and enterprises around the globe."
            href="/"
          />
          <DroneCard 
            imagePrefix="equipment-zenmuse-x7"
            imageTitle="Zenmuse X7 image"
            heading="Zenmuse X7"
            body="The Zenmuse X7 is a compact Super 35 camera with an integrated gimbal made for high-end filmmaking."
            href="/"
          />
          <DroneCard 
            imagePrefix="equipment-indemnis-nexus"
            imageTitle="Indemnis Nexus image"
            heading="Indemnis Nexus"
            body="The Nexus by Indemnis is the first UAV recovery system to be proven reliable in any failure situation."
            href="/"
          />
          <DroneCard 
            imagePrefix="equipment-outdoor-fpv"
            imageTitle="Outdoor FPV image"
            heading="Outdoor FPV"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis."
            href="/"
          />
          <DroneCard 
            imagePrefix="equipment-indoor-fpv"
            imageTitle="Indoor FPV image"
            heading="Indoor FPV"
            body="Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci molestiae quia suscipit ratione repellendus facilis."
            href="/"
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
                className={styles.accordionImage}
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
                className={styles.accordionImage}
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
                className={styles.accordionImage}
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
                className={styles.accordionImage}
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
                className={styles.accordionImage}
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
        <Carousel  
          className={styles.carousel}
          noArrows
        >
          <VideoModal 
            imagePrefix="highlights-pv1"
            title="highlight video"
            youtubeEmbedId="ifO6DECu6-k"
          />
          <VideoModal 
            imagePrefix="highlights-pv2"
            title="highlight video"
            youtubeEmbedId="ohsQcJyELi0"
          />
          <VideoModal 
            imagePrefix="highlights-pv3"
            title="highlight video"
            youtubeEmbedId="Zi_trzln4ss"
          />
        </Carousel>
      </section>

      <div className={styles.sectionSeparatorLight}></div>

      <section className={styles.sectionContact}>
        <div className={styles.contactText}>
          <Image 
            prefix="home-contact-bg"
            title="race car image"
            noLg
          />
          <div>
            <span className={styles.heading3}>
              <span>We're always ready</span>
              <span> to take on new projects.</span>
            </span>
            <p>Keep scrolling to send us a quick message and we will get back to you within 24 hours. Thank you for choosing Alberta Drone Specialists.</p>
            </div>
        </div>
        <Form className={styles.form} />
      </section>
    </MainLayout>
  )
}
