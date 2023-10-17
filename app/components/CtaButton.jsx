import React from 'react'
import Button from './Button'
import styles from './CtaButton.module.css'

const CtaButton = () => {
  return (
    <section className={styles.ctaContainer}>
    <Button label="ME CONTACTER" />
    <Button label="MES PROJETS" />
    </section>
  )
}

export default CtaButton