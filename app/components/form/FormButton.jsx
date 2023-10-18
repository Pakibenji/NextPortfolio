import React from 'react'
import styles from "./Form.module.css"

const FormButton = ({type, label}) => {
  return (
    <button type={type} className={styles.formButton}>{label}</button>
  )
}

export default FormButton