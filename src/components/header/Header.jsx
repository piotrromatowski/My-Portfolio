import React from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/me7.png"


const Header = () => {


  return (
    <header title='Deadcode | Front-End Developer'> 
      <div className="container header__container">
      <h5 data-aos="fade-down" data-aos-delay="500">Hello I'm</h5>
      <h1 data-aos="fade-down" data-aos-delay="1000">Peter</h1>
      <h5 data-aos="fade-down" data-aos-delay="1500" className='text-light'>Frontend Developer</h5>
      <CTA/>
      <HeaderSocials/>
      <div className="me"  data-aos="fade-up" data-aos-delay="2500">
        <img src={ME} alt='DeadCode Front-End Developer' />
      </div>
      <a href='#contact' className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header