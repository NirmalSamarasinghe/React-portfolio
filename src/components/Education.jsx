import React from 'react';
import { EDUCATION } from '../constants';
import { motion } from 'framer-motion';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <motion.h1
          whileInView={ {opacity:1,y:0}}
          initial={{opacity:0,y:-100}}
          transition={{duration:1.5}}
       className='my-20 text-center text-4xl'>Education</motion.h1>
      <div>
        {EDUCATION.map(({ year, Institute, description, technologies }, index) => (
          <div key={index} className='mn-8 flex flex-wrap lg:justify-center'>
            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:-100}}
            transition={{duration:1}}
            className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{year}</p>
            </motion.div>

            <motion.div 
            whileInView={{opacity:1,x:0}}
            initial={{opacity:0,x:100}}
            transition={{duration:1}} 
            className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{Institute}</h6>
              <p className='mb-6 text-neutral-400'>{description}</p>
              {technologies?.length > 0 && (
                <div className='flex flex-wrap'>
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='mb-4 rounded mr-2 bg-neutral-900 px-2 py-1 text-sm font-medium text-red-500'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
