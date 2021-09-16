import { faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { useEffect } from 'react';

import styles from '../styles/Button.module.css';

const Button = ({ text, noIcon = false, onClick, className, appendClassName, iconClassName, title, href, disabled }) => {
  const addIcon = () => {
    return noIcon ? null :
      <FontAwesomeIcon 
        icon={faAngleRight} 
        className={iconClassName ?? styles.buttonIcon}
      />
  }

  return href
    ? <Link href={href}>
        <a
          onClick={onClick}
          className={!appendClassName ? (className ?? styles.button) : (styles.button + (!className ? '' : ` ${className}`))}
          title={title ?? 'link button'}
        >
          { text }
          { addIcon() }
        </a>
      </Link>
    : <button
        onClick={onClick}
          className={!appendClassName ? (className ?? styles.button) : (styles.button + (!className ? '' : ` ${className}`))}
        title={title ?? 'button'}
        disabled={disabled}
      >
        { text }
        { addIcon() }
      </button>
}
 
export default Button;