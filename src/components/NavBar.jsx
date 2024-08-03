import React from 'react'
import logo from '../assets/logo/my_logo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa6"
import {FaInstagram} from 'react-icons/fa'

const NavBar = () => {
  return <nav className="mb-20 flex items-center justify-between py-6">
    <div className="flex flex-shrink-0 items-center">
        <img className="max-2 w-20" src={logo} alt="Logo" />
    </div>
    <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <FaLinkedin/>
    <FaGithub/>
    <FaFacebook/>
    <FaInstagram/>
    </div>
  </nav>
}

export default NavBar
