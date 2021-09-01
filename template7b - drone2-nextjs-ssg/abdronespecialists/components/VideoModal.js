import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Image from "./Image";
import Modal from "./CustomModal"

import styles from '../styles/VideoModal.module.css';

const VideoModal = ({ children, imagePrefix, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (!imagePrefix || !children) ? null : ( 
    <>
      <div 
        onClick={toggleModal} 
        className={styles.videoPreview}
      >
        <Image
          prefix={imagePrefix}
          title={title + " preview image"}
          noMd 
          noLg
        />
        <div className={styles.playButton}>
          <FontAwesomeIcon 
            icon={faPlay} 
            className={styles.buttonIcon} 
          />
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        title={title + " modal"}
      >
        { children }
      </Modal>
    </>
  );
}
 
export default VideoModal;