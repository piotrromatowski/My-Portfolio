import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
   <div className="header__socials" data-aos="fade-right" data-aos-delay="3000">
       <a href='https://www.linkedin.com/in/piotr-romatowski/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
       <a href='https://github.com/piotrromatowski' target="_blank" rel='noreferrer'><FaGithub/></a> 
   </div>
  )
}

export default HeaderSocials