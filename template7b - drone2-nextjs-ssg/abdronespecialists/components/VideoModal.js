import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Image from "./Image";
import Modal from "./CustomModal"

import styles from '../styles/VideoModal.module.css';
import Button from "./Button";

const VideoModal = ({ imagePrefix, buttonText, children, youtubeEmbedId, title }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  return (!imagePrefix && !buttonText) ? null : ( 
    <>
      { imagePrefix ? (
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
      ) : buttonText ? (
        <Button
          text={buttonText}
          onClick={toggleModal}
        />
      ) : null }

      <Modal
        isOpen={isModalOpen}
        onRequestClose={toggleModal}
        title={title + " modal"}
      >
        { youtubeEmbedId ? (
          <div className={styles.videoWrapper}>
            <iframe src={"https://www.youtube.com/embed/" + youtubeEmbedId} title="YouTube video player" frameBorder="0" allow="autoplay; picture-in-picture" allowFullScreen></iframe>
          </div>
        ) : children }
      </Modal>
    </>
  );
}
 
export default VideoModal;