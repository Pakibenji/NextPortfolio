'use client'
import React from 'react'
import Button from './Button'
import styles from './CtaButton.module.css'
import { useRouter } from 'next/navigation'

const CtaButton = () => {
  const router = useRouter()

  const redirectToContact = () => {
    router.push('/contact')
  }

  return (
    <section className={styles.ctaContainer}>
    <Button label="ME CONTACTER" func={redirectToContact}/>
    </section>
  )
}

export default CtaButton