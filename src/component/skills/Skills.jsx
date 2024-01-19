import React from 'react'

function Skills() {
  return (
    <div>
    <div className="main flex justify-center py-4">
        <h1 className='text-3xl font-bold lg:mb-12 mb-6'>Technicals Skills</h1>
    </div>

    <div className="main flex flex-wrap justify-center  ">
        <div className="sub w-full lg:w-1/3 px-4 mb-4 ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/html.jpeg" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>HTML</h1>
          </div>
        </div>

        <div className="sub w-full lg:w-1/4 px-4 mb-4 ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/css.jpeg" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>CSS</h1>
          </div>
        </div>

        <div className="sub w-full lg:w-1/4 px-4 mb-4 ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/js.jpeg" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>Javascript</h1>
          </div>
        </div>

        <div className="sub w-full lg:w-1/4 px-4 mb-4  ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/react.jpeg" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>React</h1>
          </div>
        </div>

        <div className="sub w-full lg:w-1/4 px-4 mb-4  ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/fr.jpeg" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>Firebase</h1>
          </div>
        </div>

        <div className="sub w-full lg:w-1/4 px-4 mb-4  ">
          <div className="inner bg-white p-3 rounded-xl shadow-xl">
            <img src="img/tail-css.webp" alt=" img" className='rounded-xl w-44 mx-auto' />
            <h1 className='text-3xl font-semibold text-center py-4 '>Tailwind CSS</h1>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills
