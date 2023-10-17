import React from 'react'
import BigTitle from './components/BigTitle'
import Button from './components/Button'
import Technos from './components/Technos'


const Home = () => {
  return (
    <>
    <BigTitle value="BENJAMIN ALCADE"/>
    <Technos />
    <Button label="About me" />
    </>
  )
}

export default Home