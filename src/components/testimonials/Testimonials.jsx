import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.jpeg'
import AVTR3 from '../../assets/avatar3.webp'
import AVTR4 from '../../assets/avatar4.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Ahmed Al-Burhan',
    role: 'Founder & CEO, Burhank Feasibility Studies',
    review: 'Working with him on our WordPress platform was a great experience. He delivered a fast, SEO-optimized website that truly reflects the professionalism of our consulting services. His attention to performance and detail exceeded our expectations, and he was responsive throughout every phase of the project.',
  },
  {
    avatar: AVTR2,
    name: 'Dr. Yousef Kamal',
    role: 'Product Lead, Go.IELTS.Ai',
    review: 'He played a key role in building our full-stack IELTS preparation platform using Laravel and Next.js. From integrating AI-powered corrections to designing a smooth progress-tracking experience, his technical depth and clean code made a real difference. Reliable, communicative, and highly skilled.',
  },
  {
    avatar: AVTR3,
    name: 'Sarah El-Hadidi',
    role: 'E-commerce Manager, Havana Textile',
    review: 'He transformed our online store into a modern, high-performing e-commerce experience. Product pages load quickly, the checkout is seamless, and our conversion rate has improved noticeably. He genuinely cares about the end user, not just the code.',
  },
  {
    avatar: AVTR4,
    name: 'Mohammed Al-Ghamdi',
    role: 'CTO, AutoGoldPrice',
    review: 'Integrating Salla and Zid with our custom subscription and access-control system was a complex challenge, but he handled it with impressive precision. The auto price-update flow has been running flawlessly since launch. I would happily work with him again on any full-stack project.',
  },
]

const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
        {
          data.map(({avatar, name, role, review} , index) => {
            return(
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} alt={`Avatar of ${name}`} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__role">{role}</small>
                <small className="client__review">{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Testimonials