import React from 'react'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { FaRobot } from "react-icons/fa6";
import { FaUsers } from "react-icons/fa6";
import { FaShareAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaBrain } from "react-icons/fa6";
import { MdConnectWithoutContact } from "react-icons/md";
const features = [
    {
      icon: <FaBrain className="text-white h-6 w-6 " />,
      feature: "AI Resume Analysis",
      description: "Our AI scans resumes to uncover hidden skills and potential beyond keywords, giving you deep insights into each candidate."
    },
    {
      icon: <FaRobot className="text-white h-6 w-6" />,
      feature: "Smart Matching",
      description: "Automatically matches candidates to your open positions based on skills, culture fit, and potential for growth."
    },
    {
      icon: <MdConnectWithoutContact className="text-white h-7 w-7" />,
      feature: "Interview Assistant",
      description: "Get real-time suggested questions, candidates insights, and automated note-taking during interviews."
    },
    {
      icon: <FaUsers className="text-white h-6 w-6" />,
      feature: "Team Collaboration",
      description: "Share candidate profiles, leave feedback, and make hiring decisions together in one centralized platform."
    },
    {
      icon: <MdMarkEmailUnread className="text-white h-6 w-6" />,
      feature: "Automated Scheduling",
      description: "Eliminate back-and-forth emails with smart scheduling that syncs with everyone's calendars automatically."
    },
    {
      icon: <FaShareAlt className="text-white h-6 w-6" />,
      feature: "Pipeline Analytics",
      description: "Track your hiring funnel with real-time analytics and identify bottlenecks in your recruitment process."
    }
  ];
  

const Features = () => {
  return (
    <div className='grid  lg:grid-cols-3 gap-[2rem] px-2'>
      {features.map((feature,index)=>{
        return(
            <div className='flex flex-col gap-[1rem] w-full p-6 rounded-3xl border border-purple-900 bg-gray-900' key={index}>
<div className='h-[3rem] w-[3rem] p-3 rounded-full  bg-gradient-to-br from-[#3C0D99]  via-[#5B1FA8] to-[#1C0D4D]'>
{feature.icon}
</div>
<h4 className='text-white font-bold text-2xl'>{feature.feature}</h4>
<p className='text-gray-300'>{feature.description}</p>
<button className='flex items-center justify-start relative  text-purple-600 '>
    Learn more <ChevronRightIcon className='h-[30px] w-[30px]'/>
    </button>
            </div>
        )
      })}
    </div>
  )
}

export default Features
