

import IntroButtons from './Buttons/IntroButtons'
import { ChevronDownIcon } from '@heroicons/react/20/solid';

const Intro = () => {
  return (
    
    <div className='bg-[##15192D] min-h-full flex flex-col justify-center text-center gap-[] px-2 md:px-[2rem] lg:px-[6rem] py-[10rem] '>
      <h1 className='font-extrabold text-[42px]  font-poppins leading-[3rem]  bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Refracting Talents.</h1>
      <h1 className='font-extrabold text-[42px] text-white font-poppins leading-[3rem] '>Perfect Matches.</h1>
      <p className='text-[20px] text-gray-400 text-center font-semibold'>Make AI a job creator — not a job taker.</p>
      <p className='text-[17px] text-gray-100 md:w-[] text-center '>Prism is an AI-powered job matching platform that connects employers with <br /> talent through intelligent matching and streamlined hiring processes.</p>
      <IntroButtons content1={`I'm Looking for Work`} content2={`I'm Hiring`} styles='flex justify-center mt-[2rem] gap-[1rem] text-white '/>
      <a href="#Transform"  className='flex justify-center text-gray-500 cursor-pointer mt-[3rem] animate-bounce'>
      <ChevronDownIcon className='h-[55px]'/>
      </a>

    </div>
  )
}

export default Intro
