import React from 'react'
import {  ChevronRight } from 'lucide-react'
import { brand1,brand2,brand3,brand4,screenshot1,dotHero, element1 } from '../exports/images'
function Hero() {
  return (
    <div>
      <section className='relative flex flex-col items-center justify-center 2xl:p-[6rem] lg:p-[5rem] p-[4rem] mt-10'>

   <img src={element1} className='absolute -top-64 -right-32' alt="" />
   <img src={element1}  className='absolute -top-64 -left-32 -scale-x-[1]'  alt="" />

   <div>
      <span className=' bg-[#181A20] py-1 w-45 text-center absolute right-0 left-0 mx-auto border border-[#0BA5EC] font-medium 2xl:sm lg:sm text-xs blur-md top-10 text-[#0BA5EC] rounded-full sha' >introducting Shore</span>
      <span  className=' bg-[#181A20] py-1 w-45 text-center absolute right-0 left-0 mx-auto border border-[#0BA5EC] font-medium 2xl:sm lg:sm text-xs  top-10 text-[#0BA5EC] rounded-full' >introducting Shore</span>
   </div>
    <h1 className='text-white 2xl:text-7xl lg:6xl text-4xl pb-5 2xl:leading-[5rem] capitalize text-center mt-6'>Revolutionize your HR and <br />  payroll operations</h1>
    <p className='text-gray-400 text-center 2xl:text-[2rem] lg:[1rem] text-[1rem] '>Simplify workforce management, stay compliant , and boost employee  <br />engagement with our all-in-one platform</p>
      <button className= ' flex text-white  cursor-pointer mt-6 '> Start Your Journey  <ChevronRight/> </button>
      <p className='text-gray-300 capitalize 2xl:text-lg lg:text-lg text-sm text-center 2xl:mt-8 lg:mt-9 mt-4 z-1'>Trusted by industry-leading organizations worldwide</p>
      <div className='mt-4 grid 2xl:grid-cols-4 lg:grid-cols-2 grid-cols-1 items-center' >
      <img src={brand1} className='object contain 2xl:h-[3.5rem] lg:[3rem] h-[3rem] ' alt="" />
      <img src={brand2} className='object contain 2xl:h-[3.5rem] lg:[3rem] h-[3rem] ' alt="" />
      <img src={brand3} className='object contain 2xl:h-[3.5rem] lg:[3rem] h-[3rem] ' alt="" />
      <img src={brand4} className='object contain 2xl:h-[3.5rem] lg:[3rem] h-[3rem] ' alt="" />
      </div>
      <img src={dotHero} className='absolute 2xl:top-[13rem] object-contain' alt="" />
      <div className= '2xl:block lg-block  mt-10  '>
      <img src={screenshot1} className='object-cover mt-32 ' alt="" />
      </div>
      </section>
    </div>
  )
}

export default Hero