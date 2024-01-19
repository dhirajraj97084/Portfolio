import React from 'react'
import Layout from '../../component/layout/Layout'

function Projects() {
  return (
    <Layout>
       <div className="main flex justify-center items-center h-[25em] bg-gradient-to-r bg-gray-200 shadow-md ">
        <div className="item">
          <div className="img flex justify-center">
          <img src="img/logo1.png" alt="" className='w-36 rounded-full ' />
          </div>
          
          <div className="text px-5 ">
            <h1 className='text-4xl font-bold text-[#facc15] italic lg:text-6xl'>Hi,</h1>
            <h2 className='text-3xl lg:text-5xl font-bold text-[#e11d48] italic'>I'M DHIRAJ KUMAR TIWARI</h2>
            <h3 className='text-xl lg:text-2xl font-bold text-[#e11d48]'>Full Stack developer</h3>
          </div>          
        </div>
      </div>

      <div className="main flex justify-center py-4">
        <h1 className='text-3xl font-bold lg:mb-12 mb-6'>Projects</h1>
    </div>
    <div className="main flex flex-wrap justify-center  ">
     <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white py-3 rounded-xl shadow-xl">
            <a href="https://vite-project-sage.vercel.app/"><img src="img/port.png" alt=" img" className='rounded-xl  mx-auto ' /></a>
            <a href="https://vite-project-sage.vercel.app/"><h1 className=' hover:text-cyan-500 text-3xl font-semibold text-center py-4 '>Portfolio</h1></a>
            
          </div>
        </div>

        <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white py-3 rounded-xl shadow-xl">
            <a href="https://react-calculator-kappa-black.vercel.app/"><img src="img/cal.png" alt=" img" className='rounded-xl  mx-auto h-56 w-full' /></a>
            <a href="https://react-calculator-kappa-black.vercel.app/"> <h1 className=' hover:text-cyan-500 text-3xl font-semibold text-center py-4 '>Calculator</h1></a>           
          </div>
        </div>
        
        <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white py-3 rounded-xl shadow-xl">
            <a href=""><img src="img/login.png" alt=" img" className='rounded-xl  mx-auto h-56 w-full' /></a>
            <a href=""> <h1 className=' hover:text-cyan-500 text-3xl font-semibold text-center py-4 '>Login_Form</h1></a>           
          </div>
        </div>

        <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white py-3 rounded-xl shadow-xl">
            <a href=""><img src="img/food.png" alt=" img" className='rounded-xl  mx-auto h-56 w-full' /></a>
            <a href=""> <h1 className=' hover:text-cyan-500 text-3xl font-semibold text-center py-4 '>Food_Seach</h1></a>           
          </div>
        </div>

        <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white py-3 rounded-xl shadow-xl">
            <a href=""><img src="img/mov.png" alt=" img" className='rounded-xl  mx-auto h-56 w-full' /></a>
            <a href=""> <h1 className=' hover:text-cyan-500 text-3xl font-semibold text-center py-4 '>Movies_Seach</h1></a>           
          </div>
        </div>

     </div>   


    </Layout>
  )
}

export default Projects
