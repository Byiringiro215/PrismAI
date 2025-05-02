import React from 'react'
import HowPrismWorksLeft from '../Components/HowPrismWorksLeft'
import HowPrismWorksRight from '../Components/HowPrismWorksRight'
const HowPrismWorks = () => {
  return (
    <div className='grid grid-cols-1 gap-[2rem] pl-3 md:pl-[2rem] pr-[5rem] mt-[5rem] ' id='HowPrismWorks'>
      <div className='flex flex-col gap-[1rem] text-center justify-center'>
      <h3 className='text-white text-3xl font-extrabold'>How <span className='text-blue-500'> Prism</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Works</span></h3>
      <p className=' text-gray-300'>Our AI-powered platforms your hiring process in just a few simple steps.</p>
      </div>
      <div className='grid lg:grid-cols-2'>
        <div className='lg:border-r-4 border-blue-600'>
        <HowPrismWorksLeft/>
        </div>
<div className='md:px-[2rem]'>
<HowPrismWorksRight/>
</div>
      </div>
    </div>
  )
}

export default HowPrismWorks
