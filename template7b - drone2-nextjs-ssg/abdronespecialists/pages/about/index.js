import Highlights from "../../components/About/Highlights";
import Partners from "../../components/About/Partners";
import Banner from "../../components/Banner";
import Divider from "../../components/Divider";
import MainLayout from "../../components/layouts/MainLayout";
import Image from '../../components/Image'

import styles from '../../styles/About/AboutPage.module.css'

const AboutPage = () => {
  return ( 
    <MainLayout>
      <div className={styles.about}>

        <Banner imagePrefix="about-banner">
          <div className={styles.bannerContent}>
            <p className={styles.bannerHeading}>
              <span>Our experience&nbsp;</span>
              <span>brings you exceptional results.</span> 
            </p>
            <h3 className={styles.bannerSubheading}>Trusted by:</h3>
            <Partners className={styles.partners} />
          </div>
        </Banner>

        <div className={styles.aboutContent}>
          <h2 className={styles.heading2}>About Us</h2>
          <h3 className={styles.heading3}>We love to fly.</h3>
          <p>
            Alberta Drone Specialists goes above and beyond other drone companies. Simply put, we love to fly, and it shows in our constant growth and dedication to improving our skills and technology. Our pilots use cutting-edge drone equipment and cameras, and have provided services to various industries that are in demand of high-quality aerial content. We provide unparalleled quality in our aerials and offer new innovative services using the latest developments in drone technology. 
          </p>
          <h3 className={styles.heading3}>Who have we flown for?</h3>
          <p>
            At Alberta Drone Specialists, we collaborate closely with our clients to capture the shots they need to fulfill their vision for the project. Our team has experience providing specialized drone services to leading companies across a wide range of industries all over Canada including CBC and DIsney. Our pilots are trained and well versed in flying in industrial environments, indoors, over construction projects, on TV & Film productions, and in downtown locations within dense urban environments.
          </p>
          <h3 className={styles.heading3}>How did we get started?</h3>
          <p>
            Our pilots have been in the drone industry since 2014 having started in drone racing and eventually channeling thier skills into cinematic filming. The skills our lead pilot, Travis Ames, learned in racing are now being used to bring our clients exceptional FPV footage never seen before in the industry.
          </p>
          <div className={styles.profiles}>
            <div className={styles.profileItem}>
              <Image 
                prefix="about-profile-travis"
                title="Travis Ames profile image"
                fileExtension="png"
                className={styles.profileImage}
                noMd
                noLg
              />
              <span className={styles.heading3}>Travis Ames</span>
              <span className={styles.profileRole}>Co-Founder/Pilot</span>
            </div>
            <div className={styles.profileItem}>
              <Image 
                prefix="about-profile-hayden"
                title="Hayden Wilson profile image"
                fileExtension="png"
                className={styles.profileImage}
                noMd
                noLg
              />
              <span className={styles.heading3}>Hayden Wilson</span>
              <span className={styles.profileRole}>Co-Founder</span>
            </div>
          </div>
        </div>
        
        <Divider className={styles.divider} />
        <Highlights className={styles.highlights} />
      </div>
    </MainLayout>
  );
}
 
export default AboutPage;