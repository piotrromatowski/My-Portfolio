import React from 'react'
import CV from "../../assets/cv.pdf"

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} download className='btn' data-aos="zoom-out" data-aos-delay="3000">Download CV</a>
        <a href='#contact' className='btn btn-primary' data-aos="zoom-out" data-aos-delay="3000">Let's Talk</a>
    </div>
  )
}

export default CTA