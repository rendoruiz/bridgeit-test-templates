import Head from 'next/head'
import { useState } from 'react'

import Button from '../components/Button'
import MainLayout from '../components/layouts/MainLayout'
import Modal from '../components/CustomModal'
import Image from '../components/Image'
import Video from '../components/Video'

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


      <section>
        <h2></h2>
      </section>
      <section>
        <h2></h2>
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
