import React from 'react'
import './footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoYoutube} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Omar Zekri</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Expeirience</a></li>
        {/* <li><a href="#services">Services</a></li> */}
        <li><a href="#portfolio">Portfolio</a></li>
        {/* <li><a href="#testimonials">Testimonials</a></li> */}
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/omar.zakri.56/" target="blank"><FaFacebookF/></a>
        <a href="https://www.instagram.com/zekri530/?hl=fr" target="blank"><FiInstagram/></a>
        <a href="https://www.youtube.com/channel/UCovJM23WgKRdG-LwZl3Ukdw" target="blank"><IoLogoYoutube/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; AmrWorld. 2022</small>
      </div>
    </footer>
  )
}

export default Footer