import React from 'react'
import './style.scss'
import { FaFacebookF } from 'react-icons/fa'
import { FaTwitter } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'
import { FiSearch } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'

const index = () => {
 return (
  <header>
   <div className='iconsLeft'>
    <FaFacebookF />
    <FaTwitter/>
    <GrInstagram/>
   </div>
   <h1>Alka Blog</h1>
   <div className='iconsRight'>
   <FiSearch/>
   <GiHamburgerMenu/>
   </div>
  </header>
 )
}

export default index