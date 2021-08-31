import Head from 'next/head'
import { useState } from 'react'
import Modal from 'react-modal'
import MainLayout from '../components/layouts/MainLayout'
import Video from '../components/Video'

import styles from '../styles/Home.module.css'
import modalStyles from '../styles/Modal.module.css'

Modal.setAppElement("#__next");

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
        <Video prefix="main" />
        <div className={styles.bannerContext}>
          <p>
            <span>Quality&nbsp;</span>
            <span>drone services&nbsp;</span>
            <span>from experienced pilots.</span>
          </p>
        </div>
      </div>

      <section>
        <button onClick={toggleBannerModal}>Open Modal</button>
        <Modal
          isOpen={isBannerModalOpen}
          onRequestClose={toggleBannerModal}
          contentLabel="View Reel Video Modal"
          className={modalStyles.modal}
          overlayClassName={modalStyles.overlay}
          closeTimeoutMS={200}
        >
          kek
        </Modal>
      </section>

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
