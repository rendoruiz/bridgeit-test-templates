import Modal from "../CustomModal";

import styles from '../../styles/Contact/Modal.module.css';

const ModalSuccess = ({ status, toggle }) => {
  return ( 
    <Modal
      isOpen={status}
      onRequestClose={toggle}
      contentLabel="Form submission success modal"
      closeTimeoutMS={200}
      className={styles.modal}
      overlayClassName={styles.overlay}
    >
      <div className={styles.container}>
        <h1 className={styles.heading}>Mesage sent!</h1>
        <div className={styles.body}>
          <p>
            Thank you for choosing Alberta Drone Specialists.
          </p>
          <p>
            We look forward to working with you!
          </p>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg" width="358.738" height="255.269" viewBox="0 0 358.738 255.269" className={styles.svg}>
          <defs>
            <style>{`.a{fill:#ffaeae;}.b{fill:#fff;}.c{fill:#231f20;}.d{fill:#bbbdbf;}.e{fill:none;}`}</style>
          </defs>
          <g transform="translate(-8 -24.9)"><g transform="translate(42.77 24.9)"><path class="a" d="M67.229,248.3a23.7,23.7,0,0,1,17.1,5.215,37.809,37.809,0,0,1,31.583-17.1,39.822,39.822,0,0,1,17.675,4.346,10,10,0,0,1,9.851-7.244,10.632,10.632,0,0,1,9.851,7.244,36.3,36.3,0,0,1,17.675-4.346A37.186,37.186,0,0,1,200.8,251.194a32.3,32.3,0,0,1,22.311-8.982,30.659,30.659,0,0,1,21.731,8.692,7.563,7.563,0,0,1,5.8-2.9,6.785,6.785,0,0,1,5.215,2.318,5.517,5.517,0,0,0,5.505,1.449,24.134,24.134,0,0,1,6.374-.869,23.579,23.579,0,0,1,13.908,4.636A144.884,144.884,0,0,0,164.875,24.9C84.9,24.9,20,90.094,20,170.064a145.524,145.524,0,0,0,30.134,88.663C54.19,252.933,60.275,248.876,67.229,248.3Z" transform="translate(-20 -24.9)"/></g><rect class="b" width="11.59" height="11.59" transform="translate(181.85 152.68)"/><g transform="translate(208.108 123.939)"><path class="b" d="M92.487,60h0L78,62.9l2.9,2.608a162.394,162.394,0,0,1,32.742,40.275,58.576,58.576,0,0,1,7.823,29.554h0a5.812,5.812,0,0,0,5.795,5.795h0a5.812,5.812,0,0,0,5.795-5.795v-.29a57.83,57.83,0,0,0-7.244-28.685A189.624,189.624,0,0,0,97.123,67.533,17.244,17.244,0,0,1,92.487,60Z" transform="translate(-75.284 -57.337)"/><path class="c" d="M129.036,145.771a8.537,8.537,0,0,1-8.693-8.692,56.021,56.021,0,0,0-7.244-27.816,169.639,169.639,0,0,0-32.162-39.7l-2.9-2.608a2.821,2.821,0,0,1,1.449-4.926l14.487-2.9a3.147,3.147,0,0,1,3.477,2.028,16.153,16.153,0,0,0,3.767,6.374,204.523,204.523,0,0,1,29.265,39.406,63.047,63.047,0,0,1,7.823,30.134C137.729,142,133.962,145.771,129.036,145.771ZM85.864,66.38a165.368,165.368,0,0,1,32.162,39.985,61.523,61.523,0,0,1,8.113,30.713,2.9,2.9,0,1,0,5.795,0,55.515,55.515,0,0,0-6.954-27.526,184.643,184.643,0,0,0-28.4-38.247,17.26,17.26,0,0,1-4.057-6.085Z" transform="translate(-77.062 -59.081)"/></g><g transform="translate(106.515 123.649)"><path class="b" d="M83.565,60h0l14.487,2.9-2.9,2.608A162.394,162.394,0,0,0,62.413,105.78a58.576,58.576,0,0,0-7.823,29.554h0a5.812,5.812,0,0,1-5.795,5.795h0A5.812,5.812,0,0,1,43,135.335v-.29a57.83,57.83,0,0,1,7.244-28.685A189.624,189.624,0,0,1,78.929,67.533,17.243,17.243,0,0,0,83.565,60Z" transform="translate(-40.103 -57.047)"/><path class="c" d="M50.692,145.961A8.537,8.537,0,0,1,42,137.269a60.228,60.228,0,0,1,7.823-30.424A204.525,204.525,0,0,1,79.088,67.439a17.713,17.713,0,0,0,3.767-6.375,2.98,2.98,0,0,1,3.477-2.028l14.487,2.9a3.312,3.312,0,0,1,2.318,2.028,2.779,2.779,0,0,1-.869,2.9l-2.9,2.608a162.624,162.624,0,0,0-32.162,39.7,52.7,52.7,0,0,0-7.823,28.106A8.537,8.537,0,0,1,50.692,145.961ZM87.2,65.121a17.259,17.259,0,0,1-4.057,6.085,192.672,192.672,0,0,0-28.4,38.247,55.515,55.515,0,0,0-6.954,27.526,2.978,2.978,0,0,0,2.9,3.187,2.737,2.737,0,0,0,2.9-2.9A61.524,61.524,0,0,1,61.7,106.555,171.122,171.122,0,0,1,93.865,66.57Z" transform="translate(-42 -58.981)"/></g><path class="b" d="M174.642,50.795c0,2.608-6.374,5.795-22.6,5.795C136.685,56.59,108,50.795,108,50.795S136.685,45,152.042,45C168.268,45,174.642,47.608,174.642,50.795Z" transform="translate(189.75 38.14)"/><path class="b" d="M79,50.795C79,48.187,85.374,45,101.6,45c15.357,0,44.042,5.795,44.042,5.795S116.957,56.59,101.6,56.59C85.374,56.59,79,53.982,79,50.795Z" transform="translate(134.722 38.14)"/><rect class="d" width="34.77" height="11.59" transform="translate(170.26 141.09)"/><path class="b" d="M39,67.385c49.547,23.18,130.1,23.18,179.645,0l-2.9-8.692-31.293,7.823a44.986,44.986,0,0,1-6.085,1.159,32.648,32.648,0,0,1-26.657-9.562l-.579-.579a18.744,18.744,0,0,1-2.318-2.608,10.327,10.327,0,0,0-8.4-4.926h-23.18a10.888,10.888,0,0,0-8.4,4.636c-.869.869-1.449,1.738-2.318,2.608l-.869.58a32.648,32.648,0,0,1-26.657,9.562A44.982,44.982,0,0,1,72.9,66.226l-31-7.533Z" transform="translate(58.822 47.627)"/><g transform="translate(274.57 100.525)"><rect class="e" width="28.975" height="20.282"/></g><path class="b" d="M119.385,59.487H102V50.795A5.812,5.812,0,0,1,107.795,45h5.795a5.812,5.812,0,0,1,5.795,5.795Z" transform="translate(178.365 38.14)"/><path class="b" d="M49.385,58H32a14.256,14.256,0,0,0,4.926,11.3l3.767,3.187L44.459,69.3A14.256,14.256,0,0,0,49.385,58Z" transform="translate(45.54 62.807)"/><rect class="b" width="11.59" height="8.692" transform="translate(181.85 132.397)"/><path class="c" d="M223.271,68.6l-2.9-8.692a3.147,3.147,0,0,0-3.477-2.028l-31,7.823a34.181,34.181,0,0,1-5.795,1.159c-8.4,1.159-17.675-2.318-24.049-8.982l-.579-.579c-.869-.869-1.449-1.739-2.318-2.608-1.738-2.028-5.505-5.795-10.721-5.795h-23.18c-5.216,0-8.982,3.477-10.721,5.795a18.749,18.749,0,0,1-2.318,2.608l-.579.579a30.073,30.073,0,0,1-24.049,8.982,41.023,41.023,0,0,1-5.795-1.159L44.5,57.882a3.147,3.147,0,0,0-3.477,2.028l-2.9,8.692A2.8,2.8,0,0,0,39.57,72.08c25.208,11.59,57.95,17.675,90.981,17.675s66.063-5.795,90.981-17.675A2.5,2.5,0,0,0,223.271,68.6ZM45.944,64.257,74.629,71.5A49.135,49.135,0,0,0,81,72.659c10.141,1.159,20.572-2.608,28.4-9.851V83.09c-23.47-2.028-46.07-6.954-64.614-15.067ZM112.007,83.38V59.91a4,4,0,0,0,.869-1.159c1.159-1.449,3.477-3.767,6.374-3.767h23.18c2.9,0,5.215,2.318,6.374,3.477.29.29.579.869.869,1.159V83.09A233.584,233.584,0,0,1,112.007,83.38Zm40.565-.29V62.808c7.823,7.244,18.254,11.01,28.4,9.851a49.132,49.132,0,0,0,6.374-1.159l28.685-7.244,1.159,3.767C198.642,76.136,176.042,81.062,152.572,83.09Z" transform="translate(56.804 45.54)"/><path class="c" d="M100.667,69.692H91.975V63.9a2.737,2.737,0,0,0-2.9-2.9H77.487a2.737,2.737,0,0,0-2.9,2.9v5.795H65.9a2.737,2.737,0,0,0-2.9,2.9V84.18a2.737,2.737,0,0,0,2.9,2.9H74.59V95.77a2.737,2.737,0,0,0,2.9,2.9h11.59a2.737,2.737,0,0,0,2.9-2.9V87.077h8.692a2.737,2.737,0,0,0,2.9-2.9V72.59A2.737,2.737,0,0,0,100.667,69.692Zm-11.59,11.59H76.039V75.487H90.526v5.795ZM80.385,66.795H86.18v2.9H80.385Zm-11.59,8.692h4.346v5.795H68.795ZM86.18,92.872H80.385V87.077H86.18Zm11.59-11.59H93.424V75.487H97.77Z" transform="translate(104.362 68.5)"/><path class="b" d="M104.642,50.795c0,2.608-6.374,5.795-22.6,5.795C66.685,56.59,38,50.795,38,50.795S66.685,45,82.042,45C98.268,45,104.642,47.608,104.642,50.795Z" transform="translate(56.925 38.14)"/><path class="b" d="M9,50.795C9,48.187,15.374,45,31.6,45c15.357,0,44.042,5.795,44.042,5.795S46.957,56.59,31.6,56.59C15.374,56.59,9,53.982,9,50.795Z" transform="translate(1.897 38.14)"/><path class="d" d="M56.077,73.18H32.9v-.29A101.091,101.091,0,0,1,30,50H58.975a87.006,87.006,0,0,1-2.9,22.89Z" transform="translate(41.745 47.627)"/><path class="b" d="M49.385,59.487H32V50.795A5.812,5.812,0,0,1,37.795,45H43.59a5.812,5.812,0,0,1,5.795,5.795Z" transform="translate(45.54 38.14)"/><g transform="translate(336.866 35.331)"><path class="c" d="M122.949,66.167a1.369,1.369,0,0,1-1.449-1.449V29.949a1.449,1.449,0,1,1,2.9,0v34.77A1.369,1.369,0,0,1,122.949,66.167Z" transform="translate(-121.5 -28.5)"/></g><g transform="translate(345.558 32.433)"><path class="c" d="M125.949,47.782a1.369,1.369,0,0,1-1.449-1.449V28.949a1.449,1.449,0,0,1,2.9,0V46.334A1.369,1.369,0,0,1,125.949,47.782Z" transform="translate(-124.5 -27.5)"/></g><g transform="translate(345.558 58.511)"><path class="c" d="M125.949,45.192a1.369,1.369,0,0,1-1.449-1.449V37.949a1.449,1.449,0,0,1,2.9,0v5.795A1.369,1.369,0,0,1,125.949,45.192Z" transform="translate(-124.5 -36.5)"/></g><g transform="translate(328.173 46.921)"><path class="c" d="M119.949,52.782a1.369,1.369,0,0,1-1.449-1.449V33.949a1.449,1.449,0,1,1,2.9,0V51.334A1.369,1.369,0,0,1,119.949,52.782Z" transform="translate(-118.5 -32.5)"/></g><g transform="translate(328.173 26.638)"><path class="c" d="M119.949,39.987a1.369,1.369,0,0,1-1.449-1.449V26.949a1.449,1.449,0,1,1,2.9,0v11.59A1.369,1.369,0,0,1,119.949,39.987Z" transform="translate(-118.5 -25.5)"/></g><g transform="translate(241.248 44.023)"><path class="c" d="M89.949,63.372A1.369,1.369,0,0,1,88.5,61.924V32.949a1.449,1.449,0,1,1,2.9,0V61.924A1.369,1.369,0,0,1,89.949,63.372Z" transform="translate(-88.5 -31.5)"/></g><g transform="translate(249.941 44.023)"><path class="c" d="M92.949,57.577A1.369,1.369,0,0,1,91.5,56.129V32.949a1.449,1.449,0,1,1,2.9,0v23.18A1.369,1.369,0,0,1,92.949,57.577Z" transform="translate(-91.5 -31.5)"/></g><g transform="translate(232.556 61.408)"><path class="c" d="M86.949,46.192A1.369,1.369,0,0,1,85.5,44.744V38.949a1.449,1.449,0,0,1,2.9,0v5.795A1.369,1.369,0,0,1,86.949,46.192Z" transform="translate(-85.5 -37.5)"/></g><g transform="translate(232.556 35.331)"><path class="c" d="M86.949,48.782A1.369,1.369,0,0,1,85.5,47.334V29.949a1.449,1.449,0,1,1,2.9,0V47.334A1.369,1.369,0,0,1,86.949,48.782Z" transform="translate(-85.5 -28.5)"/></g><g transform="translate(136.939 46.921)"><path class="c" d="M53.949,61.475A1.369,1.369,0,0,1,52.5,60.026V33.949a1.449,1.449,0,1,1,2.9,0V60.026A1.369,1.369,0,0,1,53.949,61.475Z" transform="translate(-52.5 -32.5)"/></g><g transform="translate(145.631 58.511)"><path class="c" d="M56.949,48.09A1.369,1.369,0,0,1,55.5,46.641V37.949a1.449,1.449,0,1,1,2.9,0v8.692A1.369,1.369,0,0,1,56.949,48.09Z" transform="translate(-55.5 -36.5)"/></g><g transform="translate(145.631 41.126)"><path class="c" d="M56.949,44.987A1.369,1.369,0,0,1,55.5,43.539V31.949a1.449,1.449,0,1,1,2.9,0v11.59A1.369,1.369,0,0,1,56.949,44.987Z" transform="translate(-55.5 -30.5)"/></g><g transform="translate(128.246 52.716)"><path class="c" d="M50.949,54.782A1.369,1.369,0,0,1,49.5,53.334V35.949a1.449,1.449,0,0,1,2.9,0V53.334A1.369,1.369,0,0,1,50.949,54.782Z" transform="translate(-49.5 -34.5)"/></g><g transform="translate(35.526 61.408)"><path class="c" d="M18.949,51.987A1.369,1.369,0,0,1,17.5,50.539V38.949a1.449,1.449,0,0,1,2.9,0v11.59A1.369,1.369,0,0,1,18.949,51.987Z" transform="translate(-17.5 -37.5)"/></g><g transform="translate(35.526 41.126)"><path class="c" d="M18.949,47.885A1.369,1.369,0,0,1,17.5,46.436V31.949a1.449,1.449,0,0,1,2.9,0V46.436A1.369,1.369,0,0,1,18.949,47.885Z" transform="translate(-17.5 -30.5)"/></g><g transform="translate(44.219 46.921)"><path class="c" d="M21.949,58.577A1.369,1.369,0,0,1,20.5,57.129V33.949a1.449,1.449,0,1,1,2.9,0v23.18A1.369,1.369,0,0,1,21.949,58.577Z" transform="translate(-20.5 -32.5)"/></g><g transform="translate(26.834 55.613)"><path class="c" d="M15.949,49.987A1.369,1.369,0,0,1,14.5,48.539V36.949A1.369,1.369,0,0,1,15.949,35.5,1.369,1.369,0,0,1,17.4,36.949v11.59A1.369,1.369,0,0,1,15.949,49.987Z" transform="translate(-14.5 -35.5)"/></g><g transform="translate(31.18 230.912)"><path class="c" d="M326.032,145.257h-3.477c-11.59,0-22.6-6.085-29.844-16.226-4.056-6.085-10.721-9.851-17.385-9.851a20.077,20.077,0,0,0-5.795.869,8.122,8.122,0,0,1-8.4-2.318,4.419,4.419,0,0,0-6.664.29,2.933,2.933,0,0,1-2.028,1.159,3.29,3.29,0,0,1-2.318-.869,29.122,29.122,0,0,0-19.7-7.823,29.476,29.476,0,0,0-20.282,8.113,3.29,3.29,0,0,1-2.318.869,2.933,2.933,0,0,1-2.028-1.159,34.58,34.58,0,0,0-27.526-13.618,36.6,36.6,0,0,0-16.516,4.057,2.771,2.771,0,0,1-2.608,0,3.382,3.382,0,0,1-1.738-1.738,7.244,7.244,0,0,0-13.908,0,2.612,2.612,0,0,1-1.738,1.738,4.02,4.02,0,0,1-2.608,0,32.556,32.556,0,0,0-15.936-4.057,34.517,34.517,0,0,0-28.975,15.646A2.933,2.933,0,0,1,92.2,121.5a3.122,3.122,0,0,1-2.318-.579,19.382,19.382,0,0,0-14.777-4.636,20.658,20.658,0,0,0-16.516,11.88,29.745,29.745,0,0,1-26.947,17.1H18.9a2.9,2.9,0,1,1,0-5.795H31.357a23.711,23.711,0,0,0,21.731-13.618v-.29A26.679,26.679,0,0,1,74.24,110.488a25.666,25.666,0,0,1,16.516,4.056A41.78,41.78,0,0,1,123.207,98.9a41.222,41.222,0,0,1,16.516,3.477,12.7,12.7,0,0,1,22.021,0A40.215,40.215,0,0,1,178.26,98.9a39.8,39.8,0,0,1,30.134,13.618,35.211,35.211,0,0,1,22.021-7.823,34.737,34.737,0,0,1,21.731,7.533,10.212,10.212,0,0,1,13.328,1.449,2.216,2.216,0,0,0,2.608.579,30.944,30.944,0,0,1,7.244-.869,27.551,27.551,0,0,1,22.311,12.169c5.8,8.692,15.357,13.908,24.918,13.908h3.477a2.9,2.9,0,0,1,0,5.795Z" transform="translate(-16 -96)"/></g><g transform="translate(168.811 255.541)"><path class="c" d="M64.949,121.885a1.449,1.449,0,1,1,0-2.9,12.985,12.985,0,0,0,13.039-13.039,1.449,1.449,0,0,1,2.9,0A16.078,16.078,0,0,1,64.949,121.885Z" transform="translate(-63.5 -104.5)"/></g><g transform="translate(264.428 264.233)"><path class="c" d="M97.949,119.09a1.449,1.449,0,0,1,0-2.9,7.173,7.173,0,0,0,7.244-7.244,1.449,1.449,0,0,1,2.9,0A10.266,10.266,0,0,1,97.949,119.09Z" transform="translate(-96.5 -107.5)"/></g><g transform="translate(232.556 261.336)"><path class="c" d="M86.949,120.987a1.369,1.369,0,0,1-1.449-1.449A12.985,12.985,0,0,1,98.539,106.5a1.449,1.449,0,0,1,0,2.9A10.266,10.266,0,0,0,88.4,119.539,1.369,1.369,0,0,1,86.949,120.987Z" transform="translate(-85.5 -106.5)"/></g><g transform="translate(84.784 264.233)"><path class="c" d="M35.949,121.987a1.449,1.449,0,0,1,0-2.9A10.266,10.266,0,0,0,46.09,108.949a1.449,1.449,0,0,1,2.9,0A12.985,12.985,0,0,1,35.949,121.987Z" transform="translate(-34.5 -107.5)"/></g><g transform="translate(134.041 264.233)"><path class="c" d="M52.949,119.09a1.369,1.369,0,0,1-1.449-1.449A10.266,10.266,0,0,1,61.641,107.5a1.449,1.449,0,1,1,0,2.9,7.173,7.173,0,0,0-7.244,7.244A1.369,1.369,0,0,1,52.949,119.09Z" transform="translate(-51.5 -107.5)"/></g><g transform="translate(154.468 270.318)"><path class="c" d="M88.829,118c-.29,0-.869,0-.869-.29a19.423,19.423,0,0,0-26.947,0,1.434,1.434,0,0,1-2.028-2.028c8.4-8.113,22.311-8.113,31,0a1.4,1.4,0,0,1,0,2.028C89.7,117.713,89.119,118,88.829,118Z" transform="translate(-58.55 -109.6)"/></g><g transform="translate(116.63 267.058)"><path class="c" d="M64.351,114.342a1.064,1.064,0,0,1-.869-.29,13.039,13.039,0,0,0-15.646,0,1.449,1.449,0,0,1-1.739-2.318,15.654,15.654,0,0,1,19.123,0,1.785,1.785,0,0,1,.29,2.028A2.2,2.2,0,0,1,64.351,114.342Z" transform="translate(-45.491 -108.475)"/></g><g transform="translate(273.095 267.104)"><path class="c" d="M106.761,114.312a8.641,8.641,0,0,1-6.954-3.477,1.449,1.449,0,1,1,2.318-1.738c2.608,3.187,6.954,3.187,9.272,0a1.449,1.449,0,1,1,2.318,1.738A8.641,8.641,0,0,1,106.761,114.312Z" transform="translate(-99.491 -108.491)"/></g><path class="d" d="M126.077,73.18H102.9v-.29A101.091,101.091,0,0,1,100,50h28.975a87.007,87.007,0,0,1-2.9,22.89Z" transform="translate(174.57 47.627)"/><path class="b" d="M119.385,58H102a14.256,14.256,0,0,0,4.926,11.3l3.767,3.187,3.767-3.187A14.256,14.256,0,0,0,119.385,58Z" transform="translate(178.365 62.807)"/><path class="c" d="M208.967,45.9c-13.039,0-34.19,3.767-41.724,5.215A8.617,8.617,0,0,0,159.13,45.9a2.9,2.9,0,1,0-5.795,0,9.435,9.435,0,0,0-8.113,5.215C137.688,49.664,116.247,45.9,103.5,45.9,86.982,45.9,78,49.085,78,54.59c0,5.795,8.4,8.692,25.5,8.692,12.459,0,33.031-3.767,41.144-5.215v2.318h-2.9a2.737,2.737,0,0,0-2.9,2.9,91.382,91.382,0,0,0,2.9,23.47v.29a3.12,3.12,0,0,0,2.9,2.318h.29a17.471,17.471,0,0,0,5.505,10.721l3.767,3.187a2.129,2.129,0,0,0,1.738.579,3.106,3.106,0,0,0,1.738-.579l3.767-3.187a17.471,17.471,0,0,0,5.505-10.721h.29a2.822,2.822,0,0,0,2.9-2.318v-.29a92.977,92.977,0,0,0,2.9-23.47,2.737,2.737,0,0,0-2.9-2.9h-2.9V58.067c8.113,1.449,28.685,5.215,41.144,5.215,16.516,0,25.5-3.187,25.5-8.692C234.465,48.795,226.062,45.9,208.967,45.9ZM103.5,57.487c-13.908,0-18.254-2.028-19.413-2.9,1.449-1.159,6.954-2.9,19.413-2.9,7.533,0,18.544,1.449,27.526,2.9C122.042,56.039,111.031,57.487,103.5,57.487Zm64.324,8.692a61,61,0,0,1-.579,7.244H145.222a61,61,0,0,1-.579-7.244h23.18ZM165.5,83.565H146.96c-.579-2.318-.869-4.926-1.449-7.244h21.152A62.746,62.746,0,0,1,165.5,83.565Zm-7.244,11.88-2.028,1.738L154.2,95.445a11.654,11.654,0,0,1-3.477-6.085h11.01A10.629,10.629,0,0,1,158.261,95.445Zm-7.823-35.06V54.59a2.737,2.737,0,0,1,2.9-2.9h5.795a2.737,2.737,0,0,1,2.9,2.9v5.795Zm58.529-2.9c-7.533,0-18.544-1.449-27.526-2.9,8.982-1.449,19.993-2.9,27.526-2.9,13.908,0,18.254,2.028,19.413,2.9C226.642,55.459,221.426,57.487,208.967,57.487Z" transform="translate(132.825 34.345)"/><g transform="translate(164.465 158.475)"><circle class="d" cx="20.282" cy="20.282" r="20.282" transform="translate(2.897 2.897)"/><path class="c" d="M85.18,117.36a23.18,23.18,0,1,1,23.18-23.18A23.248,23.248,0,0,1,85.18,117.36Zm0-40.565A17.385,17.385,0,1,0,102.565,94.18,17.436,17.436,0,0,0,85.18,76.795Z" transform="translate(-62 -71)"/></g><g transform="translate(174.606 168.616)"><circle class="b" cx="11.59" cy="11.59" r="11.59" transform="translate(1.449 1.449)"/><path class="c" d="M78.539,100.577A13.039,13.039,0,1,1,91.577,87.539,12.985,12.985,0,0,1,78.539,100.577Zm0-23.18A10.141,10.141,0,1,0,88.68,87.539,10.266,10.266,0,0,0,78.539,77.4Z" transform="translate(-65.5 -74.5)"/></g><g transform="translate(180.401 174.411)"><path class="c" d="M68.949,85.192A1.369,1.369,0,0,1,67.5,83.744,7.173,7.173,0,0,1,74.744,76.5a1.449,1.449,0,1,1,0,2.9A4.456,4.456,0,0,0,70.4,83.744,1.369,1.369,0,0,1,68.949,85.192Z" transform="translate(-67.5 -76.5)"/></g><path class="c" d="M138.967,45.9c-13.039,0-34.19,3.767-41.724,5.215A9.436,9.436,0,0,0,89.13,45.9a2.9,2.9,0,1,0-5.795,0,9.435,9.435,0,0,0-8.113,5.215C67.688,49.664,46.247,45.9,33.5,45.9,16.982,45.9,8,49.085,8,54.59c0,5.795,8.4,8.692,25.5,8.692,12.459,0,33.031-3.767,41.144-5.215v2.318h-2.9a2.737,2.737,0,0,0-2.9,2.9,91.383,91.383,0,0,0,2.9,23.47v.29a3.12,3.12,0,0,0,2.9,2.318h.29a17.471,17.471,0,0,0,5.505,10.721l3.767,3.187a2.129,2.129,0,0,0,1.738.579,3.107,3.107,0,0,0,1.739-.579l3.767-3.187A17.471,17.471,0,0,0,96.953,89.36h.869a2.822,2.822,0,0,0,2.9-2.318v-.29a92.975,92.975,0,0,0,2.9-23.47,2.737,2.737,0,0,0-2.9-2.9h-2.9V58.067c8.113,1.449,28.685,5.215,41.144,5.215,16.516,0,25.5-3.187,25.5-8.692C164.465,48.795,156.062,45.9,138.967,45.9ZM33.5,57.487c-13.908,0-18.254-2.028-19.413-2.9,1.449-1.159,6.954-2.9,19.413-2.9,7.533,0,18.544,1.449,27.526,2.9C52.042,56.039,41.031,57.487,33.5,57.487ZM97.822,66.18a61,61,0,0,1-.579,7.244H75.222a61,61,0,0,1-.579-7.244h23.18ZM95.5,83.565H76.96c-.579-2.318-.869-4.926-1.449-7.244H96.663A62.749,62.749,0,0,1,95.5,83.565Zm-7.244,11.88-2.028,1.738L84.2,95.445a11.654,11.654,0,0,1-3.477-6.085h11.01A10.629,10.629,0,0,1,88.261,95.445Zm-7.823-35.06V54.59a2.737,2.737,0,0,1,2.9-2.9H89.13a2.737,2.737,0,0,1,2.9,2.9v5.795Zm58.529-2.9c-7.533,0-18.544-1.449-27.526-2.9,8.982-1.449,19.993-2.9,27.526-2.9,13.908,0,18.254,2.028,19.413,2.9C156.641,55.459,151.426,57.487,138.967,57.487Z" transform="translate(0 34.345)"/>
          </g>
        </svg>

        <button 
          className={styles.button}
          onClick={toggle}
        >
          Close
        </button>
      </div>
      
    </Modal>
  );
}
 
export default ModalSuccess;