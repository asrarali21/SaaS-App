import React from 'react'
import { dotAbout, screenshot2 } from '../exports/images'
import { DollarSign, Scale, Umbrella,ChartColumnIncreasingIcon, CircleCheck} from 'lucide-react'

function About() {
  return (
    <section className='relative flex flex-col justify-center items-center 2xl:px=[10rem]  lg:px-[4rem] px-[1rem] 2xl:py=[5rem]  lg:py-[3rem] py-[1rem]'>
  <div>
      <span className=' bg-[#181A20] py-1 w-45 text-center absolute right-0 left-0 mx-auto border border-[#0BA5EC] font-medium 2xl:sm lg:sm text-xs blur-md top-10 text-[#0BA5EC] rounded-full ' >introducting Shore</span>
      <span  className=' bg-[#181A20] py-1 w-45 text-center absolute right-0 left-0 mx-auto border border-[#0BA5EC] font-medium 2xl:sm lg:sm text-xs  top-10 text-[#0BA5EC] rounded-full' >introducting Shore</span>
   </div>
     <h1 className='text-white 2xl:text-5xl lg:3xl text-2xl  2xl:leading-[4rem] 2xl:px=[3rem]  lg:px-[2rem] px-[2rem] 2xl:py-[1rem] lg:py-[1rem] py-[1rem] font-bold  capitalize text-center mt-[3rem]'> Your complete solution <br /> for
modern HR management  </h1>
    <p className='text-gray-400 text-center 2xl:text-[1.5rem] lg:[1rem] text-[1rem] '>Automate payroll, safeguard sensitive data, and gain actionable insights <br />   
to empower your HR team and workforce.</p>
  <div className='relative flex justify-center mt-[3rem] border border-[#1b1C12] 2xl:py-[3.4rem] lg:py-[3rem] py-[2rem] 2xl:px-[16rem] lg:px-[13rem] px-[4rem] rounded-3xl'>
   <img  src={dotAbout} alt=""  className='absolute  top-0' />
   <img src={screenshot2} alt=""  className='object-contain lg:h-[18rem] h-16rem' />
   <span  className='flex items-center text-white absolute 2xl-top-[7.5rem] lg:top-[6.7rem] top-[5rem] 2xl:left-[12rem] lg:left-[9rem] left-1 bg-[#14161B] border border-[#1F2125] font-medium text-sm rounded-lg py-2 px-2 '>
    <DollarSign className='text-green-400'/>
    Payroll
   </span>
   <span  className='flex items-center text-white absolute 2xl-top-[19rem] lg:top-[15rem] top-[15rem] 2xl:left-[11rem] lg:left-[9rem] left-1 bg-[#14161B] border border-[#1F2125] font-medium text-sm rounded-lg py-2 px-2 '>
    <Scale className='text-blue-400'/>
    Compliance
   </span>
     <span  className='flex items-center text-white absolute 2xl-top-[15rem] lg:top-[6.7rem] top-[5rem] 2xl:right-[11rem] lg:right-[9rem] right-1 bg-[#14161B] border border-[#1F2125] font-medium text-sm rounded-lg py-2 px-2 '>
    <Umbrella className='text-blue-400'/>
    Time-off
   </span>
     <span  className='flex items-center text-white absolute 2xl-top-[19rem] lg:top-[15rem] top-[15rem] 2xl:right-[11rem] lg:right-[9rem] right-1 bg-[#14161B] border border-[#1F2125] font-medium text-sm rounded-lg py-2 px-2 '>
    <ChartColumnIncreasingIcon className='text-red-400'/>
    Analytics
   </span>
  </div>
  <ul className= 'flex items-center 2xl:flex-row lg:flex-row flex-col 2xl:gap-8 lg:gap-6 gap-4 text-blue-500 mt-5'>
<li className='flex gap-2' ><CircleCheck/> Unified Employee Database</li>
<li className='flex gap-2'> <CircleCheck/> Instant regulatory compliance alerts
</li>
<li className='flex gap-2'> <CircleCheck/>Tailored analytics and reporting</li>

  </ul>
    </section>
  )
}

export default About