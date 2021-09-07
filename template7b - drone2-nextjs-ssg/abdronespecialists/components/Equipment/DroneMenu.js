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

  const setActiveMenuItem = (id) => {
    if (router.query.id === id) {
      return styles.active;
    }
    return null;
  }

  return ( 
    <div className={classNames(styles.container, className)}>
      <button className={classNames(styles.toggle, isMenuOpen ? styles.active : null)} onClick={toggleMenu}>Menu</button>

      <div className={classNames(styles.menu, isMenuOpen ? styles.active : null)}>
        <Link href="/equipment?id=0" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem('0'))}>DJI Inspire 2</a>
        </Link>
        <Link href="/equipment?id=1" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem('1'))}>Zenmuse X7</a>
        </Link>
        <Link href="/equipment?id=2" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem('2'))}>Indemnis Nexus</a>
        </Link>
        <Link href="/equipment?id=3" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem('3'))}>Outdoor FPV</a>
        </Link>
        <Link href="/equipment?id=4" shallow>
          <a className={classNames(styles.menuItem, setActiveMenuItem('4'))}>Indoor FPV</a>
        </Link>
      </div>

      {/* <button onClick={() => router.push('/equipment?id=0', undefined, { shallow: true })}>1</button>
      <button onClick={() => router.push('/equipment?id=1', undefined, { shallow: true })}>2</button>
      <button onClick={() => router.push('/equipment?id=2', undefined, { shallow: true })}>3</button>
      <button onClick={() => router.push('/equipment?id=3', undefined, { shallow: true })}>4</button>
      <button onClick={() => router.push('/equipment?id=4', undefined, { shallow: true })}>5</button> */}
    </div>
  );
}
 
export default DroneMenu;