import React from 'react'
import Button from './Button'
import styles from './CtaButton.module.css'

const CtaButton = () => {
  return (
    <section className={styles.ctaContainer}>
    <Button label="WORK WITH ME" />
    <Button label="SEE MY WORK" />
    </section>
  )
}

export default CtaButton