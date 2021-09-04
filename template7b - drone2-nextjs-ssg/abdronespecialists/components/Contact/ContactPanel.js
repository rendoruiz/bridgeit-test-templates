import Form from "../Form";
import Image from "../Image";

import styles from '../../styles/Contact/ContactPanel.module.css'

const ContactPanel = ({ className }) => {
  return ( 
    <section className={styles.contact + (!className ? '' : ` ${className}`) }>
      <div className={styles.sideContent}>
        <Image 
          prefix="home-contact-bg"
          title="race car image"
          noLg
        />
        <div className={styles.textContainer}>
          <div className={styles.sideText}>
            <span className={styles.heading}>
              <span>We're always ready</span>
              <span> to take on new projects.</span>
            </span>
            <p className={styles.subtitle}>Keep scrolling to send us a quick message and we will get back to you within 24 hours. Thank you for choosing Alberta Drone Specialists.</p>
          </div>
        </div>
      </div>
      <Form className={styles.form} />
    </section>
  );
}
 
export default ContactPanel;