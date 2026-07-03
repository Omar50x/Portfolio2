import React from 'react'
import './portfolio.css'

import IMG1 from '../../assets/portfolio1.png'
import IMG2 from '../../assets/portfolio2.png'
import IMG3 from '../../assets/portfolio3.png'
import IMG4 from '../../assets/portfolio4.png'
import IMG5 from '../../assets/portfolio5.png'

import burhankIMG from '../../assets/burhank.png'
import goieltsIMG from '../../assets/goielts.png'
import alexIMG from '../../assets/alex.png'
import proinsightsIMG from '../../assets/proinsights.png'
import havanatextileIMG from '../../assets/havanatextile.png'
import britchamIMG from '../../assets/britcham.png'
import autogoldpriceIMG from '../../assets/autogoldprice.png'
import mnexpressIMG from '../../assets/mnexpress.png'
import azexpressIMG from '../../assets/azexpress.png'

 const myWork = [
  {
    id: 2,
    image: IMG1,
    title: 'A professional advertising website, where the user can request a product or advertise a product.',
    video: '',
    demo: ''
  },
  {
    id: 3,
    image: IMG2,
    title: 'A professional dashboard for managing a school and all relationships within it among its components.',
    video: '',
    demo: ''
  },
  {
    id: 4,
    image: IMG3,
    title: 'A professional e-commerce website, where the user can request products with the option of paying online.',
    video: '',
    demo: ''
  },
  {
    id: 5,
    image: IMG4,
    title: 'A professional portfolio website to display your top work, with the capability to contact you.',
    video: '',
    demo: ''
  },
  {
    id: 6,
    image: IMG5,
    title: 'A multi-page professional portfolio website to showcase your best work, with the ability to communicate with you.',
    video: '',
    demo: ''
  },
 ]

 const workParticipated = [
  {
    id: 1,
    image: burhankIMG,
    title: 'Professional WordPress website for a Saudi feasibility study consultancy, emphasizing performance, SEO, and user experience.',
    video: '',
    demo: 'https://burhank.com/'
  },
  {
    id: 2,
    image: goieltsIMG,
    title: 'IELTS prep web app: full-stack (Laravel, Next.js) with AI corrections, progress tracking.',
    video: '',
    demo: 'https://goielts.ai/'
  },
  {
    id: 3,
    image: alexIMG,
    title: 'Modern WordPress website for a digital solutions company, focusing on performance, responsive design, and user experience.',
    video: '',
    demo: 'https://alex-sa.com/'
  },
  {
    id: 4,
    image: proinsightsIMG,
    title: 'Full-stack Laravel and Next.js platform, e-commerce order analysis, fraud detection, Google Sheets integration.',
    video: '',
    demo: 'https://proinsights.ai/'
  },
  {
    id: 5,
    image: havanatextileIMG,
    title: 'WordPress e-commerce website for a textile brand, optimizing product presentation, performance, and user experience.',
    video: '',
    demo: 'https://havanatextile.com/'
  },
  {
    id: 6,
    image: britchamIMG,
    title: 'Professional WordPress website for a business chamber, focusing on usability, performance, and member engagement.',
    video: '',
    demo: 'https://britcham.ma/'
  },
  {
    id: 7,
    image: autogoldpriceIMG,
    title: 'E-commerce solution React/Next.js, Laravel, Salla, Zid, auto price updates, subscriptions, access control.',
    video: '',
    demo: 'https://www.autogoldprice.gold/'
  },
  {
    id: 8,
    image: mnexpressIMG,
    title: 'A delivery site where the customer can track their package step by step.',
    video: '',
    demo: 'https://www.mnexpress.ma/'
  },
  {
    id: 9,
    image: azexpressIMG,
    title: 'A delivery site where the customer can track their package step by step.',
    video: '',
    demo: 'http://azexpress.ma/'
  },
 ]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Works I have participated in</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          workParticipated.map(({id, image, title, video, demo}) => {
            return(
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={video} className="btn">Video</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
                  </div>
                </article>
            )
          })
        }
      </div>
      <h5 className='MyRecentWork'>My Recent Work</h5>
      <div className="container portfolio__container">
        {
          myWork.map(({id, image, title, video, demo}) => {
            return(
                <article key={id} className="portfolio__item">
                  <div className="portfolio__item-image">
                    <img src={image} alt={title} />
                  </div>
                  <h3>{title}</h3>
                  <div className="portfolio__item-cta">
                    <a href={video} className="btn">Video</a>
                    <a href={demo} className="btn btn-primary" target='_blank'>Live Demo</a>
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