import React from 'react'
import Logo from './Logo'
import { Nav } from './Nav'
import style from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
        <Logo />
        <Nav />     
    </header>
  )
}

export default Header