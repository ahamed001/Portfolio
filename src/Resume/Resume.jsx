import React from 'react'
import { Outlet } from 'react-router'
import resumePDF from "../Assets/ahamed.pdf"

const Resume = () => {

    const internship = [
        {
            id: 1,
            title:'Robot Process Automation - Intern',
            company:'Best Enlist',
            duration:'September 2020 - October 2020',
            desc:"I led a team of 5 during my first internship, where we automated payment and checkout processes for an E-commerce product similar to Flipkart and Amazon. Additionally, I optimized social media post scheduling, demonstrating leadership, innovation, and teamwork. This internship marked the beginning of my journey in web development, igniting my enthusiasm for the field. It was a transformative experience that taught me the power of collaborative problem-solving and inspired my commitment to crafting innovative solutions in the world of web development."
        },
        {
            id: 2,
            title:'Software and UI/UX Development - Intern',
            company:'Maxffort Technologies',
            duration:'March 2021 - May 2021',
            desc:"I'm a goal-oriented and innovative software developer with hands-on experience in UI development gained during a dynamic internship. I actively contributed to web-based software applications, using HTML, CSS, and UI Path to enhance user interfaces. My internship experience instilled in me the importance of user-centric design and efficient interfaces. I'm eager to apply my acquired skills and collaborative mindset to drive impactful software projects and deliver exceptional user experiences that make a lasting impact on users and industries."
        },
        {
            id: 3,
            title:'FullStack Web Development - Intern',
            company:'Why Global Services',
            duration:'April 2023 -  Present',
            desc:"During my full-stack web development internship, I played a key role in the frontend development of the admin side for the 'Abhis LMS Website.' My responsibilities included designing an intuitive user interface and implementing complex functionalities to streamline the learning management system. This experience allowed me to refine my frontend development skills and reinforced my passion for contributing to innovative web projects. Additionally, I enthusiastically took on various other tasks, such as adjusting alignment and fine-tuning user experiences in several smaller projects. These experiences broadened my skills and taught me the importance of attention to detail in web development. I'm now eager to leverage this expertise in future collaborative development endeavors, creating user-centric and engaging web applications."
        },
    ]

    const education = [
        {
            id: 1,
            degree:'B.Tech, Information Technology',
            institute:'Saveetha University, Chennai',
            duration:'August 2018 - November 2022',
            desc:"During my four-year journey pursuing a B.Tech degree in Information Technology was a dynamic period of exploration and growth. I immersed myself in various programming languages and technologies, which paved the way for my subsequent internships and ignited my passion for web development. This experience equipped me with a strong foundation and a commitment to continuous learning in the field of IT and software development."
        },
    ]

  return (
    <div className='fade-up'>
        <div className='sm:h-20 h-5'></div>
        <div className='my-5'>
            <p className=' text-sky-400 font-extrabold text-4xl text-start py-2 sm:px-12 px-8'>Resume</p>
            <p className='text-white text-left font-semibold sm:px-12 px-8'>Here are my experiences and qualifications.</p>
        </div>
        <div className='text-white'>
            <p className='font-extrabold text-4xl text-start py-2 sm:px-12 px-8'>About <span className=' text-sky-400 '>Me</span></p>
            <div className='lg:mx-4 md:mx-8 sm:mx-8 mx-4'>
                <div className='px-4 lg:mx-4 my-4 text-left text-slate-100 text-lg font-semibold '>
                    <p className='py-2'>
                        I'm Ahamed Irfan, a passionate MERN stack web developer with a strong foundation in software engineering. 
                        My journey in web development began during my undergraduate studies, where I explored a diverse range of 
                        programming languages and technologies.
                    </p>
                    <p className='py-2'>
                        Through hands-on experience and internships, I've honed my skills in frontend and backend development and 
                        problem-solving. My commitment to creating user-centric web applications is fueled by my enthusiasm for 
                        innovative projects and my drive to deliver exceptional user experiences.
                    </p>
                    <p className='py-2'>
                        I'm excited about the ever-evolving world of technology and look forward to contributing to cutting-edge 
                        web solutions. Let's connect and collaborate on exciting ventures in the realm of web development.
                    </p>
                    <div className=' w-40 py-2 my-4'>
                        <a href={resumePDF} download='Ahamed`s resume'>
                            <p className=' flex items-center justify-center h-10 w-[90%] p-2 text-white font-semibold rounded-md border-[2px] border-sky-500 hover:bg-sky-500'>Download CV</p>  
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <p className=' text-white text-lg font-bold border-2 border-sky-400 rounded-full w-40 mx-auto sm:my-10 my-5'>Internship</p>
            
            <div className='grid grid-cols-1 md:grid-cols-2 w-[96%] mx-auto'>
                {
                    internship.map((i, id) => (
                        <div className='text-white text-left p-4 border-2 border-sky-400 rounded-xl m-4 shadow-sky-300 shadow-lg' key={i.id}>
                            <p className=' text-xl font-bold text-slate-100'>{i.title}</p>
                            <p className='font-semibold py-1'>{i.company}</p> 
                            <p className='text-sky-300 text-lg font-semibold pb-5'>{i.duration}</p>
                            <p className=' text-base'>{i.desc}</p>
                        </div>
                    ))
                }
                
            </div>
        </div>
        <div>
            <p className=' text-white text-lg font-bold border-2 border-sky-400 rounded-full w-40 mx-auto my-10'>Education</p>
            <div className='md:w-[66%] w-[95%] mx-auto'>
            {
                education.map((i, id) => (
                    <div className='text-white text-left p-4 border-2 border-sky-400 rounded-xl m-4 shadow-sky-300 shadow-lg' key={i.id}>
                        <p className=' text-xl font-bold text-slate-100'>{i.degree}</p>
                        <p className='font-semibold py-1'>{i.institute}</p> 
                        <p className='text-sky-300 text-lg font-semibold pb-5'>{i.duration}</p>
                        <p className=' text-base'>{i.desc}</p>
                    </div>
                ))
            }
            </div>
        </div>
        
        <Outlet/>
    </div>
  )
}

export default Resume