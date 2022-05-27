import './App.css'
import React from 'react'
import Navbar from './components/navbar'
import Intro from './components/intro'
import Content from './components/content'
import { useState } from 'react'
import Img from './components/pics/Rectangle 3 (3).png'

let name1='Siddharth Goyal'

export default function App() {
  const [login, setLogin] = useState(true)

  const changeLogin=(value)=>{
    setLogin(value);
  }
  return (
    <>
    <Navbar login={login} setLogin={changeLogin} img={Img} name={name1}/>
    <Intro login={login} setLogin={changeLogin}/>
    <Content login={login} setLogin={changeLogin}/>
    </>
  )
}

