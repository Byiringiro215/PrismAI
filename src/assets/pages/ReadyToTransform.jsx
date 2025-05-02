import React from 'react'
import IntroButtons from '../Components/Buttons/IntroButtons'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { VideoCameraIcon } from '@heroicons/react/20/solid';

const ReadyToTransform = () => {
  return (
    <div className='flex flex-col justify-center gap-[1rem] bg-gradient-to-br from-[#3C0D99] via-[#5B1FA8] to-[#1C0D4D] mt-[5rem] py-[3rem]' id='Apps'>
      <div className='flex flex-col gap-[1rem] text-center'>
      <h3 className='text-white text-3xl font-extrabold'>Ready to Transform Your <span className='text-blue-500'> Hiring</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Process?</span></h3>
      <p className=' text-gray-300'>Join thousands of companies using Prism to find perfect candidates faster and more efficiently.</p>
      </div>
      <div className='flex justify-center mt-[3rem] '>
  <div className=' flex gap-[1rem] text-white' id='Intro'>
      <button className='flex items-center justify-center md:h-[4rem] text-[14px] md:text-sm md:w-[15rem] rounded-full bg-gradient-to-r from-dark-purple to-light-purple p-5'>
         Start Free Trial <ChevronRightIcon className='ml-2 h-5 w-5'/>
      </button>
      <button className='flex items-center justify-center relative text-[14px] md:text-sm md:h-[4rem] md:w-[13rem] border-2 border-blue-500 p-5'>
        Request Demo <VideoCameraIcon className='ml-2 h-[25px] w-[25px]'/>
      </button>
    </div>
      </div>
      
    </div>
  )
}

export default ReadyToTransform
