/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import "./footer.css"
import DCLogo from '../../assets/DClogo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer title='Deadcode | Links'>
     <a href="#" className="footer__logo" data-aos="zoom-in" data-aos-delay="300"><img src={DCLogo} alt='DeadCode Logo'/></a>

     <ul className="permalinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
       <a href='https://www.linkedin.com/in/piotr-romatowski/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
       <a href='https://github.com/piotrromatowski' target="_blank" rel='noreferrer'><FaGithub/></a>
     </div>

     <div className="footer__copyright">
       <small>&copy; {new Date().getFullYear()} DeadCodePL. All rights reserved.</small>
     </div>
   </footer>
  )
}

export default Footer