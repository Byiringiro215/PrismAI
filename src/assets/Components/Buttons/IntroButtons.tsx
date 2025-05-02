import React from 'react';
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { VideoCameraIcon } from '@heroicons/react/20/solid';

type Props = {
  content1: string;
  content2: string;
  styles:string;
};

const IntroButtons = ({content1,content2,styles}:Props) => {
  return (
    <div className={`${styles} `} id='Intro'>
      <button className='flex items-center justify-center h-[4rem] w-[15rem] rounded-full bg-gradient-to-r from-dark-purple to-light-purple p-5'>
        {content1} <ChevronRightIcon className='ml-2 h-5 w-5'/>
      </button>
      <button className='flex items-center justify-center relative h-[4rem] w-[12rem] border-2 border-blue-500 p-5'>
        {content2} <VideoCameraIcon className='ml-2 h-[25px] w-[25px]'/>
      </button>
    </div>
  );
}

export default IntroButtons;
