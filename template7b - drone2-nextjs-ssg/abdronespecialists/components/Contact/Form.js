import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput"
import Button from "../Button";

import styles from '../../styles/Contact/Form.module.css';

const Form = ({ className }) => {
  return ( 
    <form className={styles.form + (!className ? '' : ` ${className}`)}>
      <h2 className={styles.heading}>Send us a message.</h2>
      <FormInput 
        label="First & Last Name"
        type="text"
        inputName="name"
        icon={faUser}
        autoCapitalize="words"
        autoComplete="name"
      />
      <FormInput 
        label="Email"
        type="email"
        inputName="email"
        icon={faEnvelope}
        autoComplete="email"
      />
      <FormInput 
        label="Subject"
        type="text"
        inputName="subject"
      />
      <FormInput 
        label="Message"
        type="textarea"
        inputName="message"
        placeholder="Tell us about your project!"
      />
      <Button 
        text="Send" 
        className={styles.button} 
      />
    </form>
  );
}
 
export default Form;