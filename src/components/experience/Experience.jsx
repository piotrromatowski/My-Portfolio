import React from 'react'
import "./experience.css"
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5 data-aos="zoom-in">What Skills I Have</h5>
      <h2 data-aos="zoom-in" data-aos-delay="300">My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend" >
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="experience__details" data-aos="fade-right">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>HTML</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="100">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="200">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>JavaScript</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="300">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>React</h4>
              <small className="text-light">Intermediate and I still learning</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="400">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Gatsby</h4>
              <small className="text-light">Intermediate and I still learning</small>
             </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="500">
              <BsPatchCheckFill className="experience__details-icon"/>
             <div>
             <h4>Starpi</h4>
              <small className="text-light">Intermediate and I still learning</small>
             </div>
            </article>
          </div>
        </div>
        <div className="experience__backend">
        <h3>Backend Development</h3>
        <div className="experience__content">
        <article className="experience__details" data-aos="fade-right">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Node JS</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="100">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Mongo DB</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="200">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>Express</h4>
              <small className="text-light">In progress</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-left" data-aos-delay="300">
              <BsPatchCheckFill className="experience__details-icon"/>
              <div>
              <h4>SQL</h4>
              <small className="text-light">Basic</small>
              </div>
            </article>
            <article className="experience__details" data-aos="fade-right" data-aos-delay="400">
              <BsPatchCheckFill className="experience__details-icon"/>
            <div>
            <h4>Nest JS</h4>
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