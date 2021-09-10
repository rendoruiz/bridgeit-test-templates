import classNames from "classnames";
import { useRouter } from "next/dist/client/router";
import Link from 'next/link'
import { useState } from "react";

import styles from '../../styles/Equipment/DroneMenu.module.css'

const DroneMenu = ({ className }) => {
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  // console.log(router.query.id)

  const setActiveMenuItem = (id) => {
    if (!router.query.id && id === 0) {
      return styles.active;
    }
    else if (router.query.id == id) {
      return styles.active;
    }
    return null;
  }

  return ( 
    <div className={classNames(styles.container, className)}>
      <button className={classNames(styles.toggle, isMenuOpen ? styles.active : null)} onClick={toggleMenu}>Menu</button>

      <div className={classNames(styles.menu, isMenuOpen ? styles.active : null)} onClick={toggleMenu}>
        <Link href="/equipment?id=0" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem(0))}>DJI Inspire 2</a>
        </Link>
        <Link href="/equipment?id=1" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem(1))}>Zenmuse X7</a>
        </Link>
        <Link href="/equipment?id=2" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem(2))}>Indemnis Nexus</a>
        </Link>
        <Link href="/equipment?id=3" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem(3))}>iFlight Cidora SL5</a>
        </Link>
        <Link href="/equipment?id=4" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem(4))}>GEPRC CineLog30</a>
        </Link>
      </div>
    </div>
  );
}
 
export default DroneMenu;