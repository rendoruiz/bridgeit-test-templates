import Image from '../../components/Image'

import styles from '../../styles/About/Partners.module.css'

const Partners = ({ className }) => {
  return ( 
    <div className={styles.partners + ` ${className}`}>
      <Image 
        prefix="logo-disney-white"
        fileExtension="png"
        title="H4H: Horsepower For Hope logo"
        isContained
        className={styles.partnerLogo}
        noMd
      />
      <Image 
        prefix="logo-fx-white"
        fileExtension="png"
        title="Kids with Cancer Society logo"
        isContained
        className={styles.partnerLogo}
        noMd
      />
      <Image 
        prefix="logo-cbc-white"
        fileExtension="png"
        title="FX logo"
        isContained
        className={styles.partnerLogo}
        noMd
      />
      <Image 
        prefix="logo-h4h-white"
        fileExtension="png"
        title="Disney logo"
        isContained
        className={styles.partnerLogo4}
        noMd
      />
      <Image 
        prefix="logo-kwcs-white"
        fileExtension="png"
        title="CBC logo"
        isContained
        className={styles.partnerLogo}
        noMd
      />
    </div>
  );
}
 
export default Partners;