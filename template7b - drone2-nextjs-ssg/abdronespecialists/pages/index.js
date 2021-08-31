import Head from 'next/head'
import { useState } from 'react'

import Button from '../components/Button'
import MainLayout from '../components/layouts/MainLayout'
import Modal from '../components/CustomModal'
import Image from '../components/Image'
import Video from '../components/Video'

import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import { Accordion } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'

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
          <p>
            We are fully certified and able to accomplish any project you have in mind. Our Inspire 2 systems are equipped with a ballistic parachute system granting us approvals from Transport Canada to operate in dense urban environments. Additionally, all Alberta Drone Specialists’ pilots hold advanced RPAS licenses. 
          </p>
          <p>
            <strong>Don't know how to obtain proper permits and approvals?</strong> Let us handle it! We coordinate with Nav Canada for all flights in control zones near major airports and have experience coordinating drone operations and flight plans with National & Provincial Parks, Transport Canada, and Municipalities.
          </p>
          <h3 className={styles.heading3}>Trusted by:</h3>
          <div className={styles.portfolioCustomers}>
            <img src="/images/logo-disney-white.png" alt="H4H: Horsepower For Hope logo" />
            <img src="/images/logo-fx-white.png" alt="Kids with Cancer Society logo" />
            <img src="/images/logo-cbc-white.png" alt="FX logo" />
            <img src="/images/logo-h4h-white.png" alt="Disney logo" />
            <img src="/images/logo-kwcs-white.png" alt="CBC logo" />
          </div>
          <Button
            text="Portfolio"
            href="/"
          />
        </div>
      </section>

      <section className={styles.sectionEquipment}>
        <h2 className={styles.heading2}>Our Equipment</h2>
      </section>

      <section className={styles.sectionServices}>
        <h2 className={styles.heading2}>Services</h2>
        
        <Accordion className={styles.servicesAccordion}>
          <Accordion.Item eventKey="0">
            <Accordion.Header>
              Film & TV
              <FontAwesomeIcon icon={faAngleDown} className={styles.accordionIcon} />
            </Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iure est ipsam, adipisci possimus. Amet excepturi eveniet ex dolor!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>FPV</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iure est ipsam, adipisci possimus. Amet excepturi eveniet ex dolor!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Construction</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iure est ipsam, adipisci possimus. Amet excepturi eveniet ex dolor!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Commercial Real Estate</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iure est ipsam, adipisci possimus. Amet excepturi eveniet ex dolor!
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Aerial Photography</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi explicabo iure est ipsam, adipisci possimus. Amet excepturi eveniet ex dolor!
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </section>
      <section>
        <h2></h2>
      </section>
      <section>
        <h2></h2>
      </section>
    </MainLayout>
  )
}
