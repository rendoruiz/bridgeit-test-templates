import "slick-carousel/slick/slick.css"; 
import '../styles/bootstrap_accordion.css';
import '../styles/_globals.css';

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
config.autoAddCss = false

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
