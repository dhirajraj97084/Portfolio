import React from 'react'

function Projt() {
  return (
    <div>
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
    </div>
  )
}

export default Projt
