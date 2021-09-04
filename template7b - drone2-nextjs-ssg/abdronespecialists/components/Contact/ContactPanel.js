import Form from "../Form";
import Image from "../Image";

import styles from '../../styles/Contact/ContactPanel.module.css'

const ContactPanel = () => {
  return ( 
    <section className={styles.sectionContact}>
      <div className={styles.contactNotice}>
        <Image 
          prefix="home-contact-bg"
          title="race car image"
          noLg
          className={styles.contactImage}
        />
        <div className={styles.contactContext}>
          <div className={styles.contactText}>
            <span className={styles.contactTextHeading}>
              <span>We're always ready</span>
              <span> to take on new projects.</span>
            </span>
            <p>Keep scrolling to send us a quick message and we will get back to you within 24 hours. Thank you for choosing Alberta Drone Specialists.</p>
          </div>
        </div>
      </div>
      <Form className={styles.form} />
    </section>
  );
}
 
export default ContactPanel;