import React from 'react'
import logo from '../assets/logo/my_logo.png'
import {FaLinkedin} from "react-icons/fa"
import {FaGithub} from "react-icons/fa"
import {FaFacebook} from "react-icons/fa6"
import {FaInstagram} from 'react-icons/fa'
import { motion } from 'framer-motion'

const NavBar = () => {
  return <nav className="flex items-center justify-between py-3">
    <div className="flex flex-shrink-0 items-center">
      <motion.h3 
       initial={{x: -100,opacity: 0}}
       animate={{x: 0, opacity: 100}}
       transition={{duration:1, delay:1.2}}
      className='bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent'>N</motion.h3>
    </div>
    <motion.div
      initial={{opacity: 0,x:0}}
      animate={{opacity:100 ,x:-100}}
      transition={{duration:1, delay:1.2}}
    className='m-8 flex items-center justify-center gap-4 text-2xl'>
    <FaLinkedin/>
    <FaGithub/>
    <FaFacebook/>
    <FaInstagram/>
    </motion.div>
  </nav>
}

export default NavBar
