import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classNames from "classnames";

import Button from "../Button";

import styles from '../../styles/Services/ServiceDetailCard.module.css'

const ServiceDetailCard = ({ className, heading, subtitle, body, icon, svgIcon }) => {
  const getIcon = () => {
    if (icon) {
      return (
        <FontAwesomeIcon 
          icon={icon} 
          className={styles.icon} 
        />
      );
    } else if (svgIcon) {
      return (
        <div className={classNames(styles.icon, styles.svgIcon)}>
          { svgIcon }
        </div>
      ) 
    }
  }

  return ( 
    <div className={classNames(styles.card, className)}>
      { getIcon() }
      <h2 className={styles.heading2}>{ heading }</h2>
      <span className={styles.subtitle}>{ subtitle }</span>
      <p className={styles.body}>{ body }</p>
      <Button 
        text="Contact Us"
        title="Contact page link"
        href="/contact"
        className={styles.button}
        appendClassName
      />
    </div>
  );
}
 
export default ServiceDetailCard;