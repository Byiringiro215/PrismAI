import React from 'react'
import Features from '../Components/Features'

const TransformHiring = () => {
  return (
    <div className='flex flex-col gap-[3rem] mt-[7rem]' id='Transform'>
      <div className='flex flex-col text-center items-center gap-[1rem]'>
<h3 className='text-white text-3xl  font-extrabold'>Transform Your <span className='text-blue-500'> Hiring</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Process</span></h3>
<p className='lg:w-[50rem]  text-gray-300'>Prism's AI-powered feautures help you discover, evaluate, and hire the best talent faster than ever before.</p>
      </div>
      <div className='md:px-[3rem] '>
        <Features/>
      </div>
    </div>
  )
}

export default TransformHiring
