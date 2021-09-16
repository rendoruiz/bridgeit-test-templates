import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import styles from '../../styles/Contact/Form.module.css';

const FormInput = ({ label, type, inputName, icon, placeholder, autoCapitalize, autoComplete="off", min, max, required }) => {
  return (!type || !label) ? null : (
    <>
      <label 
        htmlFor={inputName}
        className={styles.label}
      >
        { label }
      </label>

      <div className={styles.inputField}>
        { type === "textarea" ? (
          <textarea 
            id={inputName}
            name={inputName} 
            placeholder={placeholder ?? label}
            autoCapitalize={autoCapitalize}
            autoComplete={autoComplete}
            required={required}
            minLength={min}
            maxLength={max}
          />
        ) : (
          <input 
            id={inputName}
            name={inputName} 
            type={type}
            placeholder={placeholder ?? label}
            autoComplete={autoComplete}
            required={required}
            minLength={min}
            maxLength={max}
          />
        )}
        { !icon ? null : (
          <FontAwesomeIcon 
            icon={icon} 
            className={styles.icon} 
            fixedWidth
          />
        )}
      </div>
    </>
  );
}
 
export default FormInput;