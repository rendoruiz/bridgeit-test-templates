import styles from '../styles/Divider.module.css';

const Divider = ({ className, isDark }) => {
  return ( 
    <div className={(!isDark ? styles.divider : styles.dark) + (!className ? '' : ` ${className}`)}></div>
  );
}
 
export default Divider;