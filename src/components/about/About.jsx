import React from 'react'
import "./about.css"
import Me from "../../assets/me-about3.webp"

const About = () => {
  return (
    <section id='about' title='DeadCode | About Me'>
    <h5 data-aos="zoom-in" >Get To Know</h5>
    <h2 data-aos="zoom-in" data-aos-delay="500">About Me</h2>

    <div className="container about__container">
      <div className="about__me"  data-aos="zoom-in" data-aos-delay="1000">
        <img src={Me} className="about__me-image" alt="DeadCode Front-End Developer" />
      </div>
      <div className="about__content" data-aos="fade-left" data-aos-delay="1200">
        <p>
        Hi, I'm Peter AKA DeadCode, I'm a Front End Developer based in Warsaw. I started my adventure with code as a hobby in early 2020 and quickly discovered that programming gives me great satisfaction. 
        I'm still learning new technologies and frameworks, I want to further develop and expand my knowledge and skills as a Front-End Developer, and in the future learn Back-End as well. 
        </p>
        <a href='#contact' className='btn btn-primary' data-aos="fade-up" data-aos-delay="1500">Let's Talk</a>
      </div>
    </div>
  </section>
  )
}

export default About