import React from 'react'
import HowPrismWorksFirstcomponent from './HowPrismWorksFirstcomponent'
import HowPrismWorksLeftsecon from './HowPrismWorksLeftsecon'


const itemslist1=[
    {item:"AI extracts key skills and qualifications"},
    {item:"Identifies cultural fit indicators"},
    {item:"Creates ideal candidate profile"}
]

const itemslist2=[
    {item:"Analyzes resumes and online profiles"},
    {item:"Scores candidates on multiple dimensions"},
    {item:"Identifies high-potential candidates"}
]
const HowPrismWorksLeft = () => {
  return (
    <div className='flex flex-col gap-[1rem] md:px-[1rem]'>
      <HowPrismWorksFirstcomponent
      number={1}
      title='Upload Job Requirements'
      description='Start by telling us about the position you are hiring for. Our AI will analyze your job description and requirements to understand what makes the perfect candidate.'
      listItems={itemslist1}
      />
      <HowPrismWorksLeftsecon/>
      <HowPrismWorksFirstcomponent
      number={2}
      title='AI Candidate Screening'
      description='Our platform scans thousands of profiles to find candidates that match your requirements, ranking them based on fit and potential.'
      listItems={itemslist2}
      />
      
    </div>
  )
}

export default HowPrismWorksLeft
