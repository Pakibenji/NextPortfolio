import React from 'react'
import { bigTitle } from '@/app/fonts'
import style from './Title.module.css'

const LittleTitle = ({label}) => {
  return (
    <h2 style={bigTitle.style} className={style.secondaryTitle} >{label}</h2>
  )
}

export default LittleTitle