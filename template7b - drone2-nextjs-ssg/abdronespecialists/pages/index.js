import Head from 'next/head'
import { useState } from 'react'

import Button from '../components/Button'
import MainLayout from '../components/layouts/MainLayout'
import Modal from '../components/CustomModal'
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

      <div className={styles.banner}>
        <Video 
          prefix="main" 
          isBackground 
        />
        <div className={styles.bannerContext}>
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


      <section>
        <picture>

        </picture>
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
      <section>
        <h2></h2>
      </section>
    </MainLayout>
  )
}
