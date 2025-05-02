import React from 'react'

const testimonies=[
    {
        profilepic:"/woman.jpg",
        name:"Jessica Thompson",
        career:"Head of Talent, TechNova",
        testimony:"Prism has reduced our time-to-hire by 40% while improving the quality of candidates. The AI insights help us  see beyond resumes to find hidden gems."
    },
    {
        profilepic:"/man1.jpg",
        name:"David Rodriguez",
        career:"CEO StartUp Labs",
        testimony:"As a small campany, we cant't afford hiring mistakes. Prism's matching algorithm has helped us build an incredible team with perfect culture fits."
    },
    {
        profilepic:"/woma.jpg",
        name:"Sarah Williams",
        career:"HR Director, GlobalCorp",
        testimony:"The interview assistant is revolutionay. It's like having an expert recruiter in every interview, helping us ask the right  questions and evaluate fairly."
    },
]
const Testimonies = () => {
  return (
    <div className='flex flex-col gap-[4rem]  md:px-[3rem] mt-[5rem]' id='Testimonies'>
      <div className='flex flex-col gap-[1rem] text-center'>
      <h3 className='text-white text-3xl font-extrabold'>Trusted by <span className='text-blue-500'> Leading</span> <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Companies</span></h3>
      <p className=' text-gray-300'>See how Prism has transformed hiring for organization of all sizes.</p>
      </div>
      <div className='grid lg:grid-cols-3 gap-[1rem] px-4'>
        {testimonies.map((testimony,index)=>{
            return(
                <div className='flex flex-col gap-[1rem] p-5 border border-purple-900 rounded-lg bg-gray-900 shadow-lg hover:-translate-y-[15px] hover:transition duration-700' key={index}>
<div className='flex gap-[1rem]'>
    <img src={testimony.profilepic} alt="" className='h-[2.5rem] w-[2.5rem] rounded-full' />
    <div className='flex flex-col'>
<h5 className='font-bold text-white'>{testimony.name}</h5>
<p className='text-gray-400 text-sm'>{testimony.career}</p>
    </div>
</div>
<div className='flex flex-col gap-[1rem]'>
    <p className='text-gray-400'>"{testimony.testimony}"</p>
<img src="/rating_starts.png" alt=""  className=' h-[1rem] w-[6rem]'/>
</div>
                </div>
            )
        })}
      </div>
      <div className='grid justify-center md:justify-start md:grid-cols-3  lg:grid-cols-5  font-extrabold text-4xl gap-[1rem] text-gray-500'>
        <span>TechNova</span>
        <span>GlobalCorp</span>
        <span>StartUp Labs</span>
        <span>InnoTech</span>
        <span>DataSys</span>
        <span>CloudNine</span>
      </div>
    </div>
  )
}

export default Testimonies
