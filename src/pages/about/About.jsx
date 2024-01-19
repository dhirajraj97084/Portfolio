import React from 'react'
import Layout from '../../component/layout/Layout'

function About() {
  return (
    <Layout>
        <div className="main flex justify-center items-center h-[25em] bg-gradient-to-r bg-gray-200 shadow-md ">
        <div className="item">
          <div className="img flex justify-center">
          <img src="img/logo_01.png" alt="" className='w-36 rounded-full ' />
          </div>
          
          <div className="text px-5 ">
            <h1 className='text-4xl font-bold text-[#facc15] italic lg:text-6xl'>Hi,</h1>
            <h2 className='text-3xl lg:text-5xl font-bold text-[#e11d48] italic'>I'M DHIRAJ KUMAR TIWARI</h2>
            <h3 className='text-xl lg:text-2xl font-bold text-[#e11d48]'>Full Stack developer</h3>
          </div>          
        </div>
      </div>
      <div className="head flex justify-center py-3 ">
        <h1 className=' text-4xl font-bold'>About Me</h1>
      </div>
      <div className="secmain flex justify-center h-[15em] items-center">
        <div className="div px-5  w-[60em]">
        <h1 className='text-3xl text-[#f834c7] leading-normal font-semibold italic '>I'am Dhiraj kumar tiwari</h1>
         <h2 className='text-xl'>Studying my second year in Computer Science Engineering at Uttaranchal University, Dehradun located in India. I am always ready to have new experiences, meet new people and learn new things. I find the idea of creating value for people and impacting the world through my work delightful.</h2>
        </div>
      </div>
    </Layout>
  )
}

export default About
