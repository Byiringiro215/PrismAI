import React from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { FaUserAlt } from "react-icons/fa";
const details=[
    {
        pic:"/woma.jpg",
        name:"Sarah Johnson",
        career:"Senior UX Designer ",
        years:"5 yrs exp",
        percentage:92,
        status:"Match",
        textcolor:'text-purple-500',
        bgcolor:'bg-purple-500'
    },
    {
        pic:"/woman.jpg",
        name:"Michael Chen ",
        career:"Product Designer ",
        years:"4 yrs exp",
        percentage:87,
        status:"Match",
        textcolor:'text-blue-500',
        bgcolor:'bg-blue-500'
    },
    {
        pic:"/man1.jpg",
        name:"Emma Rodriguez ",
        career:"UX Researcher ",
        years:"6 yrs exp",
        percentage:84,
        status:"Match",
        textcolor:'text-pink-500',
        bgcolor:'bg-pink-500'
    }
]
const ResumeScreening = () => {
  return (
    <div className='flex flex-col gap-[1rem] p-5 bg-gray-900 rounded-lg border border-purple-950 w-full my-[3rem]'>
      <div className='flex justify-between'>
<h5 className='text-white font-bold'>Top Matches</h5>
<h6 className='text-gray-400 text-sm'>Sorted by AI Score</h6>
      </div>
      <div className='flex flex-col gap-[1rem]'>
{
    details.map((detail,index)=>{
return(
    <div className='p-2 flex justify-between w-full h-[5rem ] rounded-md bg-slate-700' key={index}>
<div className='flex gap-[1rem] items-center'>
<div className={`${detail.bgcolor} h-[3rem] w-[3rem] p-4 text-white rounded-full`} >
    <FaUserAlt/>
</div>
<div className='flex flex-col gap-[]'>
    <h5 className='text-white'>{detail.name}</h5>
    <h6 className='text-gray-400 text-sm -mt-5'><span>{detail.career}</span><span className='text-4xl'>.</span> {detail.years}</h6>
</div>
</div>
<div className='flex flex-col gap-[]'>
    <h5 className={`${detail.textcolor} font-bold`}>{detail.percentage}%</h5>
    <h6 className='text-gray-400 text-[14px]'>{detail.status}</h6>

</div>
    </div>
)
    })
}
      </div>
      <button className='w-full rounded-md h-[3rem]  flex items-center gap-[0.5rem] bg-slate-800 justify-center text-purple-800'>
        View All Candidages <ChevronDownIcon className='relative h-[30px] w-[30px]'/>
      </button>
    </div>
  )
}

export default ResumeScreening
