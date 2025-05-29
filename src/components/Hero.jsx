import React from 'react'
import Button from './Button'
const Hero  = () => {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 '>
      <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase text-blue-400 font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl textShadow'>BIG</h1>
      </div>
        
      <p className='text-sm md:text-base font-light'>I hereby acknowledgement that I may become unbelievably <span className='text-blue-400 font-medium '>BIG</span> and accept all risks of becoming the local <span className='text-blue-400 font-medium'>GIANT</span>, unable to fit through doors.</p>
      <Button func={() =>{
        window.location.href = '#generate'
      }} text={'Accept & Begin'}/>
    </div>
  )
}

export default Hero
