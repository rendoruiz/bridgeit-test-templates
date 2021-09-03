import Highlights from "../../components/About/Highlights";
import Divider from "../../components/Divider";
import MainLayout from "../../components/layouts/MainLayout";

import styles from '../../styles/About/AboutPage.module.css'

const AboutPage = () => {
  return ( 
    <MainLayout>
      <h2>About</h2>
      <Divider className={styles.divider} />
      <Highlights className={styles.highlights} />
    </MainLayout>
  );
}
 
export default AboutPage;