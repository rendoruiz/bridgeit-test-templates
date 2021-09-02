import { useEffect, useState } from "react";
import styles from '../styles/Video.module.css';

const Video = ({ prefix, placeholderPrefix, className, isBackground, noWebM }) => {
  const [videoResolution, setVideoResolution] = useState(null);
  const videoAttributes = !isBackground ? { controls: true } : { loop: true, muted: true }

  useEffect(() => {
    const windowWidth = window.innerWidth;
    if (windowWidth >= 1024) {
      setVideoResolution("1080p");
    } else if (windowWidth >= 720) {
      setVideoResolution("720p");
    } else {
      setVideoResolution("480p");
    }
    // console.log(windowWidth);
  }, [videoResolution])

  return (!prefix || !videoResolution) ? null : ( 
    <video 
      autoPlay
      poster={`/images/video-placeholders/${placeholderPrefix ?? prefix}-placeholder-${videoResolution}.jpg`}
      className={className ?? (isBackground ? styles.backgroundVideo : styles.video)}
      {...videoAttributes}
      // onLoadedData={(e) => { console.log(e.target.currentSrc)}}
    >
      { noWebM ? null : (
        <source src={`/videos/${prefix}-${videoResolution}.webm`} type="video/webm" />
      )}
      <source src={`/videos/${prefix}-${videoResolution}.mp4`} type="video/mp4" />
      Sorry, your browser doesn't support embedded videos.
    </video>
  );
}
 
export default Video;