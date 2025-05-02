import React from 'react'
import Logo from '../Components/Logo'
import { href, Link } from 'react-router-dom'
import { IoLogoLinkedin } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
const footercontent=[
{
    section:"Product",
    links:[
        {link:"Features",href:"#Transform"},{link:"Pricing",href:"#Transportation"},{link:"How It Works",href:"#HowPrismWorks"},{link:"Integration",href:"#"},{link:"Mobile App",href:"#Apps"},
    ]
},
{
    section:"Resources",
    links:[
        {link:"Blog",href:"#"},{link:"Help Center",href:"#"},{link:"Webinars",href:"#"},{link:"Case Studies",href:"#"},{link:"API Docs",href:"#"},
    ]
},
{
    section:"Company",
    links:[
        {link:"About Us",href:"#"},{link:"Careers",href:"#"},{link:"Contact",href:"#"},{link:"Partners",href:"#"},{link:"Press",href:"#"},
    ]
},
]
const date=new Date();
const year=date.getFullYear();
const Footer = () => {
  return (
    <div className='bg-blue-950 p-4 md:px-[3rem] md:py-[5rem] flex flex-col mt-[] '>
      <div className='grid lg:grid-cols-2 justify-between text-gray-400'>
        <div className='flex flex-col gap-[1rem] w-[25rem]'>
<Logo/>
<p className='w-[18rem] md:w-full'>Refract Talent. Perfect Matches. AI-powered recruitment that transforms hiring.</p>
<div className='flex gap-3 mb-5 '>
    <div className='h-[30px] w-[30px] text-2xl cursor-pointer hover:text-white transition-All duration-200'><FaTwitter/></div>
    <div className='h-[30px] w-[30px] text-2xl cursor-pointer hover:text-white transition-All duration-200'><IoLogoLinkedin/></div>
    <div className='h-[30px] w-[30px] text-2xl cursor-pointer hover:text-white transition-All duration-200'><FaFacebookSquare/></div>
    <div className='h-[30px] w-[30px] text-2xl cursor-pointer hover:text-white transition-All duration-200'><FaInstagram/></div>
</div>
        </div>
<div className='grid md:grid-cols-3 gap-5 justify-between'>
    {footercontent.map((section,index)=>{
        return(
            <div className='flex flex-col gap-[1rem] w-full' key={index}>
<h5 className='font-semibold text-white'>{section.section}</h5>
{
section.links.map((link,index)=>(
        <a className='text-sm hover:text-white' href={link.href} key={index}>{link.link}</a>
    ))
}
            </div>
        )
    })}
</div>
       


      </div>
      <hr className='bg-gray-500  w-full my-[3rem]' />
      <div className=' flex-col  md:flex justify-between w-full text-gray-400'>
      <p>&copy; {year} Prism AI. All rights reserved.</p>
      <div className=' grid grid-cols-3 md:gap-[2rem] text-[12px] md:text-sm mt-3 '>
        <Link className='hover:text-white'>Privacy Policy</Link>
        <Link className='hover:text-white'>Terms of Service</Link>
        <Link className='hover:text-white'>Cookie Policy</Link>
      </div>
      </div>
      
    </div>
  )
}

export default Footer
