import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiYoutube} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/omar-zekri-0483b8235/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/Omar50x" target="_blank"><FaGithub/></a>
        <a href="https://www.youtube.com/channel/UCovJM23WgKRdG-LwZl3Ukdw" target="_blank"><FiYoutube/></a>
    </div>
  )
}

export default HeaderSocials