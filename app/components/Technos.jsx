import React from 'react'
import Icon from './Icon'
import style from "./Technos.module.css"
import { bigTitle } from '../fonts'

const Technos = () => {
  return (
    <div className={style.technosContainer}>
      <h3 style={bigTitle.style}>Développeur WEB</h3>
        <Icon icon="html" />
        <Icon icon="css" />
        <Icon icon="sass" />
        <Icon icon="js" />
        <Icon icon="react" />
        <Icon icon="redux" />
        <Icon icon="next" />
        </div>
  )
}

export default Technos