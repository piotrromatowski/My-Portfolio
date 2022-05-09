import React, {useEffect} from 'react'
import "./header.css"
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import ME from "../../assets/me7.png"
import {FaDotCircle} from 'react-icons/fa'






const Header = () => {


  return (
    <header>
      <div className="container header__container">
      <h5 data-aos="fade-down" data-aos-delay="500">Hello I'm</h5>
      <h1 data-aos="fade-down" data-aos-delay="1000">Peter</h1>
      <h5 data-aos="fade-down" data-aos-delay="1500" className='text-light'>Frontend Developer</h5>
      {/* <button>EN</button>
      <button>PL</button> */}
      
      <CTA/>
      {/* <button><FaDotCircle/></button>
      <button><FaDotCircle/></button>
      <button><FaDotCircle/></button>
      <button><FaDotCircle/></button>
      <button><FaDotCircle/></button>
      <button><FaDotCircle/></button>
      <button><FaDotCircle/></button> */}
      <HeaderSocials/>

      <div className="me"  data-aos="fade-up" data-aos-delay="2500">
        <img src={ME} alt='me' />
      </div>
      <a href='#contact' className='scroll__down' >Scroll Down</a>
      </div>
    </header>
  )
}

export default Header