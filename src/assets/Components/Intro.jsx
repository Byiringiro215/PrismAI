git add .

import IntroButtons from './Buttons/IntroButtons'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Intro = () => {
  return (
    
    <div className='bg-gradient-to-br from-[#3C0D99]  via-[#5B1FA8] to-[#1C0D4D] min-h-full flex flex-col gap-[2rem] px-2 md:px-[2rem] lg:px-[6rem] py-[10rem] '>
      <h1 className='font-extrabold text-[60px] font-poppins leading-[3rem] animate-pulse'><span className='text-white'>Refract Talent. <br /> </span><span className='text-blue-500'> Perfect </span><span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Matches.</span></h1>
      <p className='text-lg text-gray-100 md:w-[45rem] animate-pulse'>AI-powered recruitment that transforms hiring from screening to selection. Unveil the true potential within candidates beyond what's visible on resumes.</p>
      <IntroButtons content1='Start Free Trial' content2='See Demo ' styles='flex gap-[1rem] text-white '/>
      <a href="#Transform"  className='flex justify-center text-gray-500 cursor-pointer mt-[2rem] animate-bounce'>
      <ChevronDownIcon className='h-[55px]'/>
      </a>

    </div>
  )
}

export default Intro
