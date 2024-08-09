import React from 'react'
import { HERO_CONTENT } from '../constants'
import ProfilePic from "../assets/logo/profile.jpg";

const Hero = () => {
  return (
    <div>
      <div className='flex flex-wrap lg:flex-nowrap'>
        <div className='w-full lg:w-1/2'>
          <div className='flex flex-col items-center lg:items-start'>
            <h1 className='pb-10 text-6xl font-thin tracking-tight lg:mt-20 lg:text=8xl'>Nipun Nirmal</h1>
            <span className='bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 bg-clip-text text-3xl tracking-tight text-transparent'>Front-End Developer</span>
            <p className='my-2 max-w-xl py-6 font-light tracking-tighter'>{HERO_CONTENT}</p>
          </div>
        </div>
        <div className='w-full lg:w-1/2 lg:p-8'>
        <div className='flex items-center justify-center'>
        <div className='w-full max-w-md'>
            <img className='rounded-2xl max-w-xs' src={ProfilePic} alt="Nipun Nirmal"/>
          </div>
        </div>
        </div>
      </div>     
    </div>
  )
}

export default Hero
