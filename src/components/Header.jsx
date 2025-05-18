import React from 'react'
import {  AlignRight, LogIn, X } from 'lucide-react';
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from "./ui/sheet";
function Header() {
    const array = ["Benefits" ,"Abouts" , "Integration" , "Testimonials"] 
  return (
    <div>
      <header className='flex  justify-between  items-center 2xl:px-[10rem] lg:px-[4rem] px-[1rem] 2xl:h-[6rem] lg:h-[5rem] h-[4rem]'>

        <h1 className='text-white font-semibold 2xl-text-4xl lg:text-3xl text-2xl'>Shore</h1>
        <ul className='lg:flex gap-8 items-center  px-3 bg-[#141618] rounded-full hidden py-3 border border-gray-700'>
            {array.map((item, i )=>{
              return <li key={i} className='text-gray-300'>{item}</li>
            })}
        </ul>
        <div > 
        <button className='2xl:flex hidden  items-center gap-1  bg-[#0BA5EC] 2xl:text-[17px] lg:text-sm text-sm font-medium 2xl:px-5 lg:px-3 px-2  2xl:2xl:py-3 lg:py-2 py-1 rounded-full cursor-pointer hover:bg-red-50 transition duration-150'>Sign In  <LogIn /></button>
        <Sheet>

      <SheetTrigger  asChild>
        <AlignRight className='text-gray-100  2xl:hidden block '/>
      </SheetTrigger>
      <SheetContent className={'bg-[#14161B] p-8 '}>
        <SheetClose asChild>
          <button className='absolute right-4 top-4 text-gray-400'>
          <X size={30}/> 
          </button>
        
        </SheetClose>
        <ul className='flex flex-col gap-8 mt-[3rem] '>
           {array.map((item,i)=>(
             <li className='text-gray-300 font-medium text-lg hover:text-blue-300 transition duration-150'>{item}</li>
          ))}
          </ul>
          <div>
             <button className='flex   gap-1  bg-[#0BA5EC] 2xl:text-[17px] lg:text-sm text-sm font-medium 2xl:px-5 lg:px-3 px-2  2xl:2xl:py-3 lg:py-2 py-1 rounded-full cursor-pointer hover:bg-red-50 transition duration-150'>Sign In  <LogIn /></button>
          </div>
      </SheetContent>
        </Sheet>
        </div>
            </header>
    </div>
   
  )
}

export default Header