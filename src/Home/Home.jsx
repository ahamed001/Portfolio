import React from 'react'
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoGmail } from 'react-icons/bi'
import profile from '../Assets/Ahamed.jpg'
import resumePDF from "../Assets/ahamed.pdf"
import { Outlet } from 'react-router'

const Home = () => {
  return (
    <div className='h-[100vh] md:flex justify-between block fade-up'>
      <div className='sm:h-20 h-10'></div>

      <div className='flex items-center'>
        <div className='mx-5'>
          <p className=' text-white font-extrabold text-4xl text-start py-4 sm:px-10'>
            Hi, I'm <span className='text-sky-400'>Ahamed Irfan. </span> <br/>
            A MERN Stack Developer.
          </p>

          <p className='text-slate-100 text-start text-lg font-semibold sm:px-10'>I'm a passionate MERN stack web developer.</p>
          <p className='text-slate-100 text-start text-lg font-semibold sm:px-10'>I hold a B.Tech degree in 
            <span className='text-sky-400'> Information Technology</span>
          </p>

          <div className='md:flex justify-around my-4 sm:ml-10'>
            <div className='md:w-full sm:w-[50%] sm:py-3 py-3'>
              <a href="https://www.linkedin.com/in/ahamed-irfan-6735521b7/" target='blank'>
                <p className=' flex items-center justify-center h-10 w-[90%] p-2 text-white font-semibold rounded-md border-[2px] border-sky-500 hover:bg-sky-500'>Hire Me</p>
              </a>
            </div>
            
            <div className='md:w-full sm:w-[50%] sm:py-3 py-3'>
              <a href={resumePDF} download='Ahamed`s resume'>
                <p className=' flex items-center justify-center h-10 w-[90%] p-2 text-white font-semibold rounded-md border-[2px] border-sky-500 hover:bg-sky-500'>Download CV</p>  
              </a>
            </div>
          </div>
          
          <div className='flex justify-evenly ml-[-35px] text-white font-extrabold text-4xl md:px-2 sm:px-10 md:flex my-4 sm:ml-10'>
            <a href="https://www.linkedin.com/in/ahamed-irfan-6735521b7/" target='blank'>
              <FaLinkedin className='hover:text-[#0072b1]'/>
            </a>
            <a href="https://github.com/ahamed001" target='blank'>
              <FaGithub className='hover:text-slate-300'/>
            </a>
            <a href="https://stackoverflow.com/users/22385995/ahamed-irfan" target='blank'>
              <FaStackOverflow className='hover:text-[#f48024]'/>
            </a>
            <a href="https://twitter.com/AhamedIrfan001" target='blank'>
              <FaXTwitter className='hover:text-slate-400'/>
            </a>
            <a href="mailto:ahamed.irfan001@gmail.com" target='blank'>
              <BiLogoGmail className='hover:text-[#EA4335]'/>
            </a>

          </div>
          
        </div>
      </div>

      <div className=' md:flex items-end px-10'>
        <img src={profile} alt='profile'/>
      </div>
        <Outlet/>
    </div>
  )
}

export default Home