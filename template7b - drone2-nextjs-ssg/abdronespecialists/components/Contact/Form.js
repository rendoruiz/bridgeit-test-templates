import { faEnvelope, faUser } from "@fortawesome/free-solid-svg-icons";

import FormInput from "./FormInput"
import Button from "../Button";
import api from "./api";

import styles from '../../styles/Contact/Form.module.css';
import { useEffect, useState } from "react";
import ModalSuccess from "./ModalSuccess";
import ModalError from "./ModalError";

const Form = ({ className }) => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
  const [serverMessage, setServerMessage] = useState(null);
  const [spamInterceptor, setSpamInterceptor] = useState(false);

  const toggleSuccessModal = () => {
    setIsSuccessModalOpen(!isSuccessModalOpen);
  }

  const toggleErrorModal = (error) => {
    setIsErrorModalOpen(!isErrorModalOpen);
    if (isErrorModalOpen) {
      setIsErrorModalOpen(false);
      setTimeout(() => {
        setServerMessage(null);
      }, 500);
    }
    else {
      setServerMessage(error);
      setIsErrorModalOpen(true);
    }
  }

  const toggleSpamInterceptor = () => {
    setSpamInterceptor(true);

    setTimeout(() => {
      setSpamInterceptor(false);
    }, 30000);
  }

  const sendEmail = (event) => {
    event.preventDefault();
    
    if (!spamInterceptor) {
      const formContent = {
        name: event.target.name.value,
        sender: event.target.email.value,
        subject: event.target.subject.value,
        body: event.target.message.value
      }
      // api.get('ren')
      api.post('sendemail', formContent)
      .then((response) => {
        if (response.status === 200) {
          // console.log("response:", response)
          // console.log("response.data:", response.data)
          // console.log("response.status:", response.status)
          // console.log("response.headers:", response.headers)
          toggleSuccessModal();
          toggleSpamInterceptor();
        } else {
          toggleErrorModal(response.data);
        }
      })
      .catch((error) => {
        if (error.response) {
          console.error("error.response.data:", error.response.data);
          console.error("error.response.status:", error.response.status);
          // console.error("error.response.headers:", error.response.headers);
          toggleErrorModal(error.response.data);
        } else if (error.request) {
          console.error("error.request:", error.request);
          toggleErrorModal();
        } else {
          console.error("error", error.message);
          toggleErrorModal();
        }
      });
    } 
    else {
      toggleErrorModal('Please wait for a few seconds before sending another message.');
    }
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
        min={2}
        max={50}
        required
      />
      <FormInput 
        label="Email"
        type="email"
        inputName="email"
        icon={faEnvelope}
        autoComplete="email"
        required
      />
      <FormInput 
        label="Subject"
        type="text"
        inputName="subject"
        min={2}
        max={100}
        required
      />
      <FormInput 
        label="Message"
        type="textarea"
        inputName="message"
        placeholder="Tell us about your project!"
        min={5}
        max={1000}
        required
      />
      <Button 
        text={"Send"} 
        className={styles.button} 
      />
      <ModalSuccess status={isSuccessModalOpen} toggle={toggleSuccessModal} />
      <ModalError status={isErrorModalOpen} toggle={toggleErrorModal} serverMessage={serverMessage} />
    </form>
  );
}
 
export default Form;