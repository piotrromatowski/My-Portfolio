import React from 'react'
import "./about.css"
import Me from "../../assets/me-about3.jpg"
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
    <h5 data-aos="zoom-in" >Get To Know</h5>
    <h2 data-aos="zoom-in" data-aos-delay="500">About Me</h2>

    <div className="container about__container">
      <div className="about__me"  data-aos="zoom-in" data-aos-delay="1000">
        <img src={Me} className="about__me-image" alt="About" />
      </div>
      <div className="about__content" data-aos="fade-left" data-aos-delay="1200">
        {/* <div className="about__cards">
          <article className='about__card'>
              <FaAward className='about__icon'/>
            <h5>Experience</h5>
            <small>2+ Years Working</small>
          </article>
          <article className='about__card'>
              <FiUsers className='about__icon'/>
            <h5>Clients</h5>
            <small>200+ Worldwide</small>
          </article>
          <article className='about__card'>
              <VscFolderLibrary className='about__icon'/>
            <h5>Projects</h5>
            <small>80+ Completed</small>
          </article>
        </div> */}
        <p>
        Hi, I'm Piotr AKA DeadCode. I started my adventure with code as a hobby in early 2020 and quickly discovered that programming gives me great satisfaction. 
        I'm still learning new technologies and frameworks, I want to further develop and expand my knowledge and skills as a Front-End Developer, and in the future learn Back-End as well. 
        </p>
        <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-delay="1500">Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About