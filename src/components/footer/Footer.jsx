import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'
import DCLogo from '../../assets/DClogo.png'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
   <footer>
     <a href="#" className="footer__logo" data-aos="zoom-in" data-aos-delay="300"><img src={DCLogo} alt='DeadCode Logo'/></a>

     <ul className="permalinks">
       <li><a href="#">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#experience">Experience</a></li>
       <li><a href="#services">Services</a></li>
       <li><a href="#portfolio">Portfolio</a></li>
       {/* <li><a href="#testimonials">Testimonials</a></li> */}
       <li><a href="#contact">Contact</a></li>
     </ul>

     <div className="footer__socials">
       <a href='https://www.linkedin.com/in/piotr-romatowski/' target="_blank" rel='noreferrer'><BsLinkedin/></a>
       <a href='https://github.com/piotrromatowski' target="_blank" rel='noreferrer'><FaGithub/></a>
       {/* <a href="https://twitter.com"><IoLogoTwitter/></a> */}
     </div>

     <div className="footer__copyright">
       <small>&copy; DeadCodePL. All rights reserved.</small>
     </div>
   </footer>
  )
}

export default Footer