import React from 'react'
import styles from './Form.module.css'
import FormField from './FormField'
import FormButton from './FormButton'

const ContactForm = () => {
  return (
    <form className={styles.formContainer}>
      <FormField label="Name" type="text" id="name" placeholder="Ton nom" required />
      <FormField label="Email" type="email" id="email" placeholder="Ton email" required />
      <FormField label="Message" type="textarea" id="message" placeholder="Ton message" required />
      <FormButton type="submit" label="ENVOYER" />
    </form>
  )
}

export default ContactForm