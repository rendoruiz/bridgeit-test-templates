import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput"
import Button from "../Button";
import api from "./api";

import styles from '../../styles/Contact/Form.module.css';
import { useState } from "react";
import ModalSuccess from "./ModalSuccess";

const Form = ({ className }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);

  const toggleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  }
  const toggleErrorModal = (error) => {
    setIsErrorModalOpen(!isErrorModalOpen);
  }

  const sendEmail = (e) => {
    e.preventDefault();
    toggleSuccessModal();

    // const formContent = {
    //   name: event.target.name.value,
    //   sender: event.target.email.value,
    //   subject: event.target.subject.value,
    //   body: event.target.message.value
    // }
    // api.post('sendemail', formContent)
    // .then((response) => {
    //   if (request.status === 200) {
    //     console.log("response:", response)
    //     console.log("response.data:", response.data)
    //     console.log("response.status:", response.status)
    //     console.log("response.headers:", response.headers)
    //     toggleSuccessModal();
    //   }
    // })
    // .catch((error) => {
    //   if (error.response) {
    //     console.log("error.response.data:", error.response.data);
    //     console.log("error.response.status:", error.response.status);
    //     console.log("error.response.headers:", error.response.headers);
    //   } else if (error.request) {
    //     console.log("error.request:", error.request);
    //   } else {
    //     console.log("error", error.message);
    //   }
    // })
  }

  return ( 
    <form 
      className={styles.form + (!className ? '' : ` ${className}`)}
      onSubmit={sendEmail}
    >
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
      <ModalSuccess status={isSuccessModalOpen} toggle={toggleSuccessModal} />
    </form>
  );
}
 
export default Form;