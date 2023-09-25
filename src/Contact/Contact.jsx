import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import { RiSendPlaneFill } from "react-icons/ri"
import { Outlet } from 'react-router'

const Contact = () => {

  // const currentDate = new Date();
  // const currentYear = currentDate.getFullYear();

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
    .sendForm(
      'service_9o6l0q7', 
      'template_7i6ig5x', 
      form.current, 
      '5hYUJ97Dttg1f9rT7'
    )
      .then((result) => {
          console.log(result.text);
          console.log('Message Sent');
          form.current.reset();
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='h-[90vh] fade-up'>
      <div className='sm:h-20 h-10'></div>
      <p className=' text-white font-extrabold text-4xl text-start py-2 sm:px-12 px-8'>Contact <span className=' text-sky-400 '>Me</span></p>

      <form className=' lg:w-[50%] md:w-[70%] sm:px-12 px-5 text-white text-left font-semibold my-auto mx-4 py-8 rounded-lg' ref={form} onSubmit={sendEmail}>
        {/* <p className=' text-lg font-semibold text-slate-200'>Get in Touch</p> */}

        <input type="text" placeholder="Enter your Name" name="user_name" className='m-4 mx-auto w-full font-semibold rounded-full px-5 sm:h-12 h-10 outline-none bg-slate-900 focus:ring-2 focus:ring-slate-200' required/>
        <input type="email" placeholder="Enter your Email" name="user_email" className='m-4 mx-auto w-full font-semibold rounded-full px-5 sm:h-12 h-10 outline-none bg-slate-900 focus:ring-2 focus:ring-slate-200' required/>
        <textarea type="text" placeholder="Message here..." rows="4" cols="50" name="message" className='m-4 mx-auto w-full font-semibold rounded-lg px-5 py-2 h-44 outline-none bg-slate-900 focus:ring-2 focus:ring-slate-200' required/>

        <button className="m-4 mx-auto sm:h-12 h-10 w-full bg-sky-400 text-slate-100 font-bold text-lg p-2 rounded-full flex items-center justify-center space-x-2 hover:bg-sky-500" type="submit" >
          <span>Send</span>
          <RiSendPlaneFill/>
        </button>
      </form>
      
      <Outlet/>
    </div>
  )
}

export default Contact