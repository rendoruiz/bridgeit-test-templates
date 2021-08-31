import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

import styles from '../styles/Button.module.css';

const Button = ({ text, noIcon = false, onClick, className, iconClassName, title, href }) => {
  const addIcon = () => {
    return noIcon ? null :
      <FontAwesomeIcon 
        icon={faAngleRight} 
        className={iconClassName ?? styles.buttonIcon}
      />
  }

  return href
    ? <Link 
        href={href}
        onClick={onClick}
        className={className ?? styles.button}
        title={title ?? 'link button'}
      >
        { text }
        { addIcon() }
      </Link>
    : <button
        onClick={onClick}
        className={className ?? styles.button}
        title={title ?? 'button'}
      >
        { text }
        { addIcon() }
      </button>
}
 
export default Button;