import React from 'react';
import { EDUCATION } from '../constants';

const Experience = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>Education</h1>
      <div>
        {EDUCATION.map(({ year, Institute, description, technologies }, index) => (
          <div key={index} className='mn-8 flex flex-wrap lg:justify-center'>
            <div className='w-full lg:w-1/4'>
              <p className='mb-2 text-sm text-neutral-400'>{year}</p>
            </div>
            <div className='w-full max-w-xl lg:w-3/4'>
              <h6 className='mb-2 font-semibold'>{Institute}</h6>
              <p className='mb-6 text-neutral-400'>{description}</p>
              {technologies?.length > 0 && (
                <div className='flex flex-wrap'>
                  {technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className='mb-4 rounded bg-neutral-900 px-2 py-1 text-sm font-medium text-red-500'
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
