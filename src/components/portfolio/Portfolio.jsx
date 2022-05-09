import React from 'react'
import "./portfolio.css"
import IMG1 from '../../assets/Higienistka.webp'
import IMG2 from '../../assets/MrDentist.webp'
import IMG3 from '../../assets/CarRental.webp'
import IMG4 from '../../assets/Weather.webp'
import IMG5 from '../../assets/Anime.webp'
import IMG6 from '../../assets/Food.webp'


const data = [
  {
    id:1,
    image: IMG1,
    title: "Dental hygienist website | Gatsby | Strapi",
    github:"https://github.com/piotrromatowski/higienistka",
    live: "https://higienistkamagdalena.pl/",
  },
  {
    id:2,
    image: IMG2,
    title: "Dental clinic website | React",
    github:"https://github.com/piotrromatowski/Dental-Clinic-Website",
    live: "https://mrdentist.netlify.app/",
  },
  {
    id:3,
    image: IMG3,
    title: "Car rental website | React",
    github:"https://github.com/piotrromatowski/Car-Rental-App-React",
    live: "https://luxury-car-rental.netlify.app/",
  },
  {
    id:4,
    image: IMG4,
    title: "Website showing actual weather | React",
    github:"https://github.com/piotrromatowski/Weather-App-React",
    live: "https://warm-rolypoly-d3064e.netlify.app/",
  },
  {
    id:5,
    image: IMG5,
    title: "Simply website with anime | React",
    github:"https://github.com/piotrromatowski/anime-api-app",
    live: "https://rainbow-malabi-837299.netlify.app/",
  },
  {
    id:6,
    image: IMG6,
    title: "Simply website with recipes | React",
    github:"https://github.com/piotrromatowski/Food-App-React",
    live: "https://inspiring-cat-64105d.netlify.app/",
  },
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2 data-aos="zoom-in" data-aos-delay="300">Portfolio</h2>

      <div className="container portfolio__container" data-aos="fade-up" data-aos-duration="500">
       {
         data.map(({id, image, title, github, live})=>{
           return(
            <article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
              <div className="portfolio__item-cta">
              <a href={github} className="btn"  target='_blank' rel='noreferrer' data-aos="fade-left"  data-aos-delay="800" data-aos-duration="700">Github</a>
              <a href={live} className="btn btn-primary" target='_blank' rel='noreferrer' data-aos="fade-left"  data-aos-delay="1000" data-aos-duration="700">Live</a>
              </div>
          </article>
           )
         })
       }
      </div>
    </section>
  )
}

export default Portfolio