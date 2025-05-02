import React from 'react'
import { CheckIcon } from '@heroicons/react/20/solid'
import { ChevronRightIcon } from '@heroicons/react/20/solid';
import { Link } from 'react-router-dom'
const transports=[
    {
        title:"Starter",
        description:"Perfect for small teams and occasional hiring",
        price:"$99/month",
        info1:"Up to 3 active jobs",
        info2:"100 candidate profiles/month",
        info3:"Basic AI matching",
        info4:"Email support",
        info5:"",
        button:"Get Started",
        popular:"",
        bgcolor:"bg-slate-700"
    },
    {
        title:"Professional",
        description:"For growing teams with regular hiring needs",
        price:"$299/month",
        info1:"Up to 10 active jobs",
        info2:"500 candidate profiles/month",
        info3:"Basic AI matching",
        info4:"Interview assistant",
        info5:"Priority support",
         button:"Start Free Trial",
         popular:"MOST POPULAR",
         bgcolor:"bg-purple-900"
    },
    {
        title:"Enterprise",
        description:"For large organizations with complex hiring",
        price:"Custom",
        info1:"Un limited active jobs",
        info2:"Unlimited candidates",
        info3:"Premium AI features",
        info4:"Dedicated account manager",
        info5:"API access",
         button:"Contact Sales",
         postMessage:"",
         bgcolor:"bg-slate-700"
    },
]
const Transportation = () => {
  return (
    <div className='flex flex-col gap-[3rem] md:mx-[3rem] mt-[5rem]' id='Transportation'>
       <div className='flex flex-col text-center items-center gap-[1rem]'>
<h3 className='text-white text-3xl font-extrabold'>Simple,Transparent <span className='bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400'>Pricing</span></h3>
<p className='md:w-[50rem] text-gray-300'>Choose the plan that fits your hiring needs.Start with a free trial to experience Prism's power.</p>
      </div>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-[1rem] px-5'>
        {transports.map((transport,index)=>{
            return(
                <div className=' flex flex-col  md:w-[20rem] gap-[1rem] border border-purple-900 p-5  rounded-2xl bg-gray-900 overflow-hidden shadow-lg hover:scale-105 transition-all duration-700' 
                style={{ boxShadow: '0 30px 60px rgba(128, 90, 213, 0.3)' }}
                key={index}>
                    <div className='bg-purple-600 text-white text-sm font-bold px-3 py-1 absolute -mt-[1.3rem] ml-[9rem] md:ml-[10.3rem] rounded-tr-lg rounded-bl-lg'><span>{transport.popular}</span></div>
                    <h5 className='text-white font-bold text-lg'>{transport.title}</h5>
                    <p className='text-gray-400'>{transport.description}</p>
                    <h3 className='text-white text-2xl font-extrabold'>{transport.price}</h3>
                    <ul className='text-gray-400 flex flex-col gap-1'>
                        <li className='flex items-center gap-2 '><CheckIcon className='h-[20px] w-[20px] rounded-full bg-purple-800 text-black round-full'/>{transport.info1}</li>
                        <li className='flex items-center gap-2'><CheckIcon className='h-[20px] w-[20px] rounded-full bg-purple-800 text-black round-full'/>{transport.info2}</li>
                        <li className='flex items-center gap-2'><CheckIcon className='h-[20px] w-[20px] rounded-full bg-purple-800 text-black round-full'/>{transport.info3}</li>
                        <li className='flex items-center gap-2'><CheckIcon className='h-[20px] w-[20px] rounded-full bg-purple-800 text-black round-full'/>{transport.info4}</li>
                        {
                            transport.info5.trim()>0 &&(
                                <li className='flex items-center '><CheckIcon className='h-[20px] w-[20px] rounded-full bg-purple-800 text-black round-full'/>{transport.info1}</li>
                            )
                        }
                        
                    </ul>
                    <button className={`w-full mt-4 h-[3rem] rounded-lg  text-center  text-white font-semibold ${transport.bgcolor}`}>{transport.button}</button>
                   
                </div>
            )
        })}
      </div>
      <div className='text-center'>
                        <p className='text-gray-400 text-lg'>Need something different?</p>
                        <Link to='#' className='text-purple-800 flex items-center justify-center mt-2 cursor-pointer hover:text-purple-300'>Compare All Features <ChevronRightIcon className=' h-[30px] w-[30px]'/> </Link>
                    </div>
    </div>
  )
}

export default Transportation
