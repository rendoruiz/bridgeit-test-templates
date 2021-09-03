import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

import Image from "./Image";
import Modal from "./CustomModal"

import styles from '../styles/VideoModal.module.css';
import Button from "./Button";
import YouTube from "react-youtube";

const VideoModal = ({ imagePrefix, buttonText, children, youtubeEmbedId, title, className }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  }

  const _onReady = (e) => {
    e.target.pauseVideo();
  }

  return (!imagePrefix && !buttonText) ? null : ( 
    <>
      { imagePrefix ? (
        <div 
          onClick={toggleModal} 
          className={styles.videoPreview + (!className ? '' : ` ${className}`)}
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
            <YouTube 
              className={styles.youtubeIframe}
              videoId={youtubeEmbedId}
              opts={{ playerVars: { autoplay: 1 } }}
              onReady={_onReady}
            />
          </div>
        ) : children }
      </Modal>
    </>
  );
}
 
export default VideoModal;