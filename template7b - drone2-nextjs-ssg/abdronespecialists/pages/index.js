import Head from 'next/head'
import MainLayout from '../components/layouts/MainLayout'
import Video from '../components/Video'
import styles from '../styles/Home.module.css'

export default function Home() {
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
