import React from 'react'
import Icon from './Icon'
import style from "./Technos.module.css"

const Technos = () => {
  return (
    <div className={style.technosContainer}>
        <h2>Technos</h2>
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