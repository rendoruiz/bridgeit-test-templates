import classNames from 'classnames';
import Modal from 'react-modal';
import styles from '../styles/Modal.module.css';

Modal.setAppElement('#__next');

const CustomModal = ({ children, title, isOpen, onRequestClose, className, overlayClassName }) => {
  return !children ? null : ( 
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel={title ?? "Modal"}
      className={classNames(styles.modal, className)}
      overlayClassName={classNames(styles.overlay, overlayClassName)}
      closeTimeoutMS={200}
    >
      { children }
    </Modal> 
  );
}
 
export default CustomModal;