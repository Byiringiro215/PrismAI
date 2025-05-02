import React from 'react'
import { TfiBag } from "react-icons/tfi";
const bars=[
    {width:70,color:'bg-purple-500'},
    {width:90,color:'bg-blue-500'},
    {width:65,color:'bg-pink-500'}
]

const sections=[{
    section:"Key Skills",
    labels:[{label:"UI/UX Design",color:"text-purple-500" },{label:"Figma",color:"text-blue-500" },{label:"User Research",color:"text-pink-500" },]
},{
section:"Culture Fit",
labels:[{label:"Collaborative",color:"text-purple-500"  },{label:"Innovative",color:"text-blue-500" },{label:"Detail-oriented",color:"text-pink-500" },]
}

]
const HowPrismWorksLeftsecon = () => {
  return (
    <div className='flex flex-col gap-[1rem] p-5 bg-gray-900 border border-purple-900 rounded-lg w-full md:w-full my-[2rem]'>
      <div className='flex items-center gap-[1rem]'>
<div className='h-[2.5rem] w-[2.5rem] bg-purple-900 text-white font-extrabold rounded-full p-3 '>
    <TfiBag/>
</div>
<div>
    <h5 className='text-white font-bold'>Senior UX Designer</h5>
    <p className='text-gray-200 text-sm'>San Fransisco, CA . Full-time</p>
</div>
      </div>
      <div className='flex flex-col gap-[1rem]'>
{
    bars.map((bar,index)=>(
        <div className='w-full bg-gray-700 h-[12px] rounded-full' key={index}>
            <div className={`${bar.color} h-[12px] w-full rounded-full`} style={{ width: `${bar.width}%` }}></div>
        </div>
    ))
}
      </div>
      <div className='flex justify-between'>
<div className='flex justify-between gap-[2rem]'>
{
    sections.map((section,index)=>{
        return(< div key={index}>
        <h5 className='text-gray-300 mb-3'>{section.section}</h5>
<div className='grid md:grid-cols-2 gap-[0.5rem]'>  
{
    section.labels.map((label,index)=>(
        <span className={`${label.color} rounded-full bg-blue-900/35 text-[12px] md:text-sm py-[2px] px-2 h-[1.5rem]`} key={index}>{label.label}</span>
    ))
}
</div>
        </div>

        )
    })
}

</div>
      </div>
    </div>
  )
}

export default HowPrismWorksLeftsecon
