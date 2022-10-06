import React from 'react'
import './contact.css'
import {MdOutlineMail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMail />
            <h4>Email</h4>
            <h5>omarzekri217@gmail.com</h5>
            <a href="mailto:omarzekri217@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine />
            <h4>Messenger</h4>
            <h5>OmarZekri</h5>
            <a href="https://www.facebook.com/omar.zakri.56/">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp />
            <h4>WhatsApp</h4>
            <h5>+212 0643076263</h5>
            <a href="https://api.whatsapp.com/send?phone">Send a message</a>
          </article>
        </div>
        {/* End Of Contact Options */}
        <form action=""></form>
      </div>
    </section>
  )
}

export default Contact