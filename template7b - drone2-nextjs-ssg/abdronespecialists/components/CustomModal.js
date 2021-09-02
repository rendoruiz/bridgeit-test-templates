import Modal from 'react-modal';
import styles from '../styles/Modal.module.css';

Modal.setAppElement('#__next');

const CustomModal = ({ children, title, isOpen, onRequestClose }) => {
  return !children ? null : ( 
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title ?? "Modal"}
      className={styles.modal}
      overlayClassName={styles.overlay}
      closeTimeoutMS={200}
    >
      { children }
    </Modal> 
  );
}
 
export default CustomModal;