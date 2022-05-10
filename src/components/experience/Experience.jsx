import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience' title='DeadCode | Experience'>
      <h5 data-aos="zoom-in">What Skills I Have</h5>
      <h2 data-aos="zoom-in" data-aos-delay="300">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" >
          <h3 title='Frontend Development'>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details" data-aos="fade-right">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='HTML'>HTML</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="100">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='CSS'>CSS</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="200">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='JavaScript'>JavaScript</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="300">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='React'>React</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="400">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4 title='Gatsby'>Gatsby</h4>
              <small className="text-light">Intermediate and I still learning</small>
             </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="500">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4 title='Strapi'>Strapi</h4>
              <small className="text-light">Intermediate and I still learning</small>
             </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3 title='Backend Development'>Backend Development</h3>
        <div className="experience__content">
        <article className="experience__details" data-aos="fade-right">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='Node JS'>Node JS</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="100">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='Mongo DB'>Mongo DB</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="200">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='Express'>Express</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="300">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4 title='SQL'>SQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="400">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4 title='Nest JS'>Nest JS</h4>
              <small className="text-light">In progress</small>
            </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience