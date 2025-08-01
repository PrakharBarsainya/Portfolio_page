import React from 'react'
import ProjectCard from './ProjectCard'

const Projects = () => {
  return (
    <div id="Projects" className="p-10 md:p-20 text-white">
        <h1 className='text-2xl md:text-4xl font-bold text-center mb-8 md:mb-20'>Projects</h1>
        <div className='flex flex-wrap py-7 px-8 gap-5 md:gap-10 justify-center'>
            <ProjectCard title='Live Chat Room' main='Using Python, Flask, SocketIO, HTML, CSS, JavaScript created a chat room where one can have a text conversation with anyone. '/>
            <ProjectCard title='Gym Club Fusion' main='Using React Vite, Express.js, Node.js created a Gym Club interface where we can send details to join club and check BMI.'/>
            <ProjectCard title='Weather App' main='Using React and OpenWeatherAPI created a weather app which tells weather update from different locations'/>

        </div>
    </div>
  )
}

export default Projects