import React, { useRef } from 'react';
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsPhone} from 'react-icons/bs'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_lfgrm2m', 'template_2ne3zn9', form.current, 'user_KAu5GebCnGeCX5HGIKkua')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

      e.target.reset()
  };

  return (
    <section id='contact' title='Deadcode | Contact'>
      <h5 h2 data-aos="zoom-in">Get In Touch</h5>
      <h2 h2 data-aos="zoom-in" data-aos-delay="300">Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option" data-aos="zoom-in" data-aos-delay="500">
            <MdOutlineEmail className="contact__option-icon"/>
            <h4>Email</h4>
            <h5>deadcodepl@gmail.com</h5>
            <a href="mailto:deadcodepl@gmail.com" target="_blank" rel="noreferrer">Send a message</a>
          </article>
          <article className="contact__option" data-aos="zoom-in" data-aos-delay="600">
            <BsPhone className="contact__option-icon"/>
            <h4>Phone</h4>
            <h5>791361461</h5>
            <a href="tel:+48791361461" target="_blank" rel="noreferrer">Call now</a>
          </article>
          <article className="contact__option" data-aos="zoom-in" data-aos-delay="700">
            <BsWhatsapp className="contact__option-icon"/>
            <h4>Whatsapp</h4>
            <h5>+48791361461</h5>
            <a href="https://api.whatsapp.com/send?phone=+48791361461" target="_blank" rel="noreferrer">Send a message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail} data-aos="fade-left" data-aos-delay="900">
          <input type="text" name='name' placeholder='Your Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary' data-aos="fade-up" data-aos-delay="1200">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact