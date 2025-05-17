import React from 'react'
import {  LogIn } from 'lucide-react';
function Header() {
    const array = ["Benefits" ,"Abouts" , "Integration" , "Testimonials"] 
  return (
    <div>
      <header className='flex  justify-between  items-center 2xl:px-[10rem] lg:px-[4rem] px-[1rem] 2xl:h-[6rem] lg:h-[5rem] h-[4rem]'>

        <h1 className='text-white font-semibold 2xl-text-4xl lg:text-3xl text-2xl'>Shore</h1>
        <ul className='flex gap-5 items-center  px-3 bg-[#141618] rounded-full py-3 border border-gray-700'>
            {array.map((item, i )=>{
              return <li className='text-gray-300' >{item}</li>
            })}
        </ul>
        <div > 
        <button className='flex gap-2'>Sign In  <LogIn /></button>
        </div>
            </header>
    </div>
  )
}

export default Header