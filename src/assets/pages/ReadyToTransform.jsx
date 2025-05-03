import React from 'react'
import IntroButtons from '../Components/Buttons/IntroButtons'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { VideoCameraIcon } from '@heroicons/react/20/solid';

const ReadyToTransform = () => {
  return (
    <div className='flex flex-col justify-center gap-[1rem] bg-gradient-to-br from-[#3C0D99] via-[#5B1FA8] to-[#1C0D4D] mt-[5rem] py-[3rem]' id='Apps'>
      <div className='flex flex-col gap-[1rem] text-center'>
      <h3 className='text-white text-3xl font-extrabold'>Ready to Transform Your <span className='text-blue-500'> Hiring</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Process?</span></h3>
      <p className=' text-gray-300'>Join thousands of companies and job seekers who have found their perfect match with Prism.</p>
      </div>
      <IntroButtons content1={`I'm Looking for Work`} content2={`I'm Hiring`} styles='flex justify-center mt-[2rem] gap-[1rem] text-white '/>
      
    </div>
  )
}

export default ReadyToTransform
