import styles from '../styles/Divider.module.css';

const Divider = ({ className}) => {
  return ( 
    <div className={styles.divider + (!className ? '' : ` ${className}`)}></div>
  );
}
 
export default Divider;