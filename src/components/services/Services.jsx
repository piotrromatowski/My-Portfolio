import React from 'react'
import "./services.css"
import {BsCheck2} from "react-icons/bs"

const Services = () => {
  return (
    <section id='services' title='DeadCode | Services'>
      <h5 data-aos="zoom-in">What I Offer</h5>
      <h2 data-aos="zoom-in" data-aos-delay="300">Services</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3>Your satisfaction is my satisfaction!</h3>
          </div>
          <ul className="service__list">
            <li data-aos="fade-up" data-aos-delay="500">
              <BsCheck2 className="service__list-icon"/>
              <p>My focus is to make projects as user friendly as possible.</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <BsCheck2 className="service__list-icon"/>
              <p>Websites created by me are easy to use and easy to look at.</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              <BsCheck2 className="service__list-icon"/>
              <p>Visual clarity and transparency is my main goal.</p>
            </li>
           
          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Responsive Web Design is the key!</h3>
          </div>
          <ul className="service__list" data-aos="fade-up">
          <li data-aos="fade-up" data-aos-delay="500">
              <BsCheck2 className="service__list-icon"/>
              <p>20% of users only use mobile devices to surf the internet.</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <BsCheck2 className="service__list-icon"/>
              <p>My websites looks good on desktop and mobile devices.</p>
            </li>

          </ul>
        </article>
        <article className="service">
          <div className="service__head">
            <h3>Content management really helps!</h3>
          </div>
          <ul className="service__list" data-aos="fade-up">
            <li data-aos="fade-up" data-aos-delay="500">
              <BsCheck2 className="service__list-icon"/>
              <p>Do you want a blog that you manage yourself?</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="700">
              <BsCheck2 className="service__list-icon"/>
              <p>I will make it possible for you to add articles and photos yourself.</p>
            </li>
            <li data-aos="fade-up" data-aos-delay="900">
              <BsCheck2 className="service__list-icon"/>
              <p>You don't need any technical knowledge to do this!</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services