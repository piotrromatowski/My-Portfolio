import React, {useState} from 'react'
import "./nav.css"
import {GoHome} from 'react-icons/go'
import {FiUser} from 'react-icons/fi'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {TiMessages} from 'react-icons/ti'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#"onClick={()=>setActiveNav('#') } className={activeNav === "#" ? 'active' : ""} title="Home"><GoHome/></a>
      <a href="#about" onClick={()=>setActiveNav('#about') } className={activeNav === "#about" ? 'active' : ""} title="About"><FiUser/></a>
      <a href="#experience" onClick={()=>setActiveNav('#experience') } className={activeNav === "#experience" ? 'active' : ""} title="Experience"><BiBook/></a>
      <a href="#services" onClick={()=>setActiveNav('#services') } className={activeNav === "#services" ? 'active' : ""} title="Services"><RiServiceLine/></a>
      <a href="#contact" onClick={()=>setActiveNav('#contact') } className={activeNav === "#contact" ? 'active' : ""} title="Contact"><TiMessages/></a>
    </nav>
  )
}

export default Nav