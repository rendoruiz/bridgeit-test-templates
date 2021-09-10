import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../../components/Button'
import classNames from 'classnames';

import styles from '../../styles/Services/ServiceCard.module.css'

const ServiceCard = ({ className, title, body, icon, svgIcon, routeTo }) => {
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
        <div className={styles.svgIcon}>
          { svgIcon }
        </div>
      ) 
    }
  }

  return ( 
    <div className={classNames(styles.card, className)}>
      { getIcon() }
      <h3 className={styles.heading}>{ title }</h3>
      <p className={styles.body}>{ body }</p>

      <Button 
        className={styles.link}
        iconClassName={styles.linkIcon}
        text={"Explore " + title}
        title={title + "page link"}
        href={routeTo}
      />
    </div>
  );
}
 
export default ServiceCard;