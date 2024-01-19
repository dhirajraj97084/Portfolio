import React from 'react'

function Hero() {
  return (
    <div>
      <div className="main flex h-[30em] md:[33em] lg:h-[33em] justify-center items-center bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
        <div className="item">
          <div className="img flex justify-center">
          <img src="img/dh.jpg" alt="" className='w-32 rounded-xl ' />
          </div>
          
          <div className="container pl-12 md:pl-0 lg:pl-0    ">
            <h1 className='text-4xl font-bold text-[#facc15] italic lg:text-6xl'>Hi,</h1>
            <h2 className='text-3xl lg:text-5xl font-bold text-[#e11d48] italic'>I'M DHIRAJ KUMAR 
              
              TIWARI
              </h2>
            <h3 className='text-xl lg:text-2xl font-bold text-[#e11d48]'>Full  Stack developer</h3>
          </div>
          
        </div>

      </div>
    </div>
  )
}

export default Hero
