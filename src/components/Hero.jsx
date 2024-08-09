import React from 'react'
import { HERO_CONTENT } from '../constants'
import ProfilePic from "../assets/logo/profile.jpg";
import { motion } from "framer-motion"

const container=(delay)=>({
  hidden:{x:-100, opacity:0},
  visible:{
    x:0,
    opacity:1,
    transition:{duration:1, delay:delay},
  }
})
const Hero = () => {
  return (
    <div>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <motion.h1
            variants={container(0.2)}
            initial="hidden"
            animate="visible"
              className='pb-10 text-6xl font-thin tracking-tight lg:mt-20 lg:text=8xl'>Nipun Nirmal
            </motion.h1>
            <motion.span 
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className='bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent'>
              Front-End Developer</motion.span>
            <motion.p
             variants={container(0.7)}
             initial="hidden"
             animate="visible"
             className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</motion.p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
        <div className='w-full max-w-md'>
            <motion.img 
            initial={{x: 100,opacity: 0}}
            animate={{x: 0, opacity: 1}}
            transition={{duration:1, delay:1.2}}
            className='rounded-2xl max-w-xs' src={ProfilePic} alt="Nipun Nirmal"/>
          </div>
        </div>
        </div>
      </div>     
    </div>
  )
}

export default Hero
