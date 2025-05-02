import React from 'react'
import ResumeScreening from './ResumeScreening'
import HowPrismWorksFirstcomponent from './HowPrismWorksFirstcomponent'
import Chat from './Chat'

const itemslist=[
    {item:"AI-generated interview questions"},
    {item:"Real-time candidate analysis"},
    {item:"Automated interview summaries"}
]
const HowPrismWorksRight = () => {

  return (
    <div className='flex flex-col gap-[1rem]'>
      <ResumeScreening/>
      <HowPrismWorksFirstcomponent
      number={3}
      title='Smart Interviews & Selection'
      description='Conduct interviews with AI assistance, get real-time insights, and make data-driven hiring decisions with confidence.'
      listItems={itemslist}
      />
      <Chat/>
    </div>
  )
}

export default HowPrismWorksRight
