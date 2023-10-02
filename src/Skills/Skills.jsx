import React from 'react'
import { Outlet } from 'react-router'

const Skills = () => {

    const Skills =[
        {
            id: 1,
            image: require('../Assets/HTML5.png'),
        },
        {
            id: 2,
            image: require('../Assets/CSS3.png'),
        },
        {
            id:3,  
            image: require('../Assets/JavaScript.png'),
        },
        {
            id:4,
            image: require('../Assets/Bootstrap.png'),
        },
        {
            id:5,
            image: require('../Assets/Tailwind.png'),
        },
        {
            id:6,
            image: require('../Assets/React.png'),
        },
        {
            id:7,
            image: require('../Assets/Redux.png'),
        },
        {
            id:8,
            image: require('../Assets/MongoDB.png'),
        },
        {
            id:9,
            image: require('../Assets/MySQL.png'),
        },
        {
            id:10,
            image: require('../Assets/Node.png'),
        },
        {
            id:11,
            image: require('../Assets/Express.png'),
        },
        {
            id:12,
            image: require('../Assets/Vite.png'),
        },
        {
            id:13,
            image: require('../Assets/Python.png'),
        },
        {
            id:14,
            image: require('../Assets/Django.png'),
        },
        {
            id:15,
            image: require('../Assets/JQuery.png'),
        },
        {
            id:16,
            image: require('../Assets/JSON.png'),
        },
        {
            id:17,
            image: require('../Assets/Git.png'),
        },
        {
            id:18,
            image: require('../Assets/Github.png'),
        },
        {
            id:19,
            image: require('../Assets/NPM.png'),
        }
    ]

  return (
    <div className='h-[100vh] fade-up'>
        <div className='sm:h-20 h-5'></div>
        <div className='my-5'>
            <p className=' text-white font-extrabold text-4xl text-start py-2 sm:px-12 px-8'>My <span className='text-sky-400'>Skills</span></p>
        </div>
        <div className='grid gap-4 lg:grid-cols-6 md:grid-cols-4 sm:grid-cols-3 grid-cols-2'>
            {
                Skills.map((i, id) => (
                <div key={i.id} >
                    <img src = {i.image} alt="Skills" className='m-auto my-3 bg-white p-5 rounded-xl shadow-slate-300 shadow-lg ' />
                </div>
                ))
            }
        </div>
        <Outlet/>

    </div>
  )
}

export default Skills