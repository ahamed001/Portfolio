import React from 'react'
import { Outlet } from 'react-router'
import { AiOutlineGithub } from "react-icons/ai"


const Work = () => {

   const work=[
      {
        id: 1,
        img: require("../Assets/Restaurant.png"),
        title: "Restaurant Website",
        desc: "I made this Restaurant website, using HTML, CSS and it is responsive.",
        git: "https://github.com/ahamed001/Restaurant",
      },
      {
        id: 2,
        img: require("../Assets/Codehub.png"),
        title: "Educational Website",
        desc: "I made this Educational website, using ReactJS and CSS.",
        git: "https://github.com/ahamed001/Learning-app",
      },
      {
        id: 3,
        img: require("../Assets/Footprint.png"),
        title: "E-Commerce Website",
        desc: "This is an E-Commerce web application built using ReactJS, Tailwind CSS, MongoDB, ExpressJS.",
        git: "https://github.com/ahamed001/FootPrint",
      },
   ]

  return (
    <div className='h-[100vh] fade-up'>
      <div className='sm:h-20 h-5'></div>
      <div className='my-5'>
          <p className=' text-white font-extrabold text-4xl text-start py-2 sm:px-12 px-8'>My <span className='text-sky-400'>Works</span></p>
      </div>
      <div className='grid gap-4 lg:grid-cols-2 grid-cols-1'>
        {
          work.map((i, id) => (

          <div key={i.id} className=' flex justify-center items-center'>
            <div className='my-5'>
              <div className=' group relative items-center justify-center overflow-hidden hover:shadow-xl hover:shadow-black/30 transition-shadow'>
                <div className=' h-52'>
                  <img src = {i.img} alt="Works" className='md:h-full md:w-full h-[90%] w-[90%] mx-auto rounded-lg object-cover group-hover:scale-110 transition-transform duration-500' />
                </div>

                <div className='absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black group-hover:from-black/70 group-hover:via-black/60 group-hover:to-black/70'></div>
                <div className='absolute inset-0 flex flex-col items-center justify-center px-9 text-center translate-y-[60%] group-hover:translate-y-6 transition-all'>
                  <p className='text-lg italic text-white mb-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                    {i.desc}
                  </p>
                  <div className='flex'>
                    
                    <a 
                      href={i.git}
                      target='blank'
                      className=' rounded-full shadow shadow-black/60 hover:ring-2 ring-white mx-3 py-1 px-3.5 text-sm w-full bg-black text-slate-100 font-bold flex items-center justify-center space-x-2 hover:bg-sky-500'
                    >
                        <AiOutlineGithub/>
                        <span>Code</span> 
                    </a>
                  </div>
                </div>
              </div>

              <p className='text-white my-3 font-semibold text-xl'>{i.title}</p>

            </div>
          </div>
          ))
        } 
      </div>
      <Outlet/>

    </div>
  )
}

export default Work