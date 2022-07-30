import React from 'react'

import './Experience.css'

import ExperienceItem from './ExperienceItem'



function Experience() {
  return (
    <section id='experience'>
      <h5>Skills</h5>
      <h2>My Experience</h2>


      <div className="container experience__container">
        <div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">

              <ExperienceItem item='HTML' experience='Experienced'/>

              <ExperienceItem item='CSS' experience='Experienced'/>

              <ExperienceItem item='JavaScript' experience='Experienced'/>
              
              <ExperienceItem item='Bootstrap' experience='Experienced'/>

              <ExperienceItem item='React.js' experience='Experienced'/>

              <ExperienceItem item='Next.js' experience='Intermediate'/>

              <ExperienceItem item='Material UI' experience='Experienced'/>

              <ExperienceItem item='Tailwind CSS' experience='Experienced'/>

              
            </div>
        </div>

        <div className="experience__backend">
        <h3>Backend Development</h3>
            <div className="experience__content">
              
            <ExperienceItem item='Node.js' experience='Experienced'/>

              <ExperienceItem item='Express.js' experience='Experienced'/>

              <ExperienceItem item='Mongo DB' experience='Experienced'/>

              <ExperienceItem item='My Sql' experience='Intermediate'/>
              
              <ExperienceItem item='Python' experience='Basic'/>
              
            </div>
        </div>
      </div>
    </section>
    )
  
}

export default Experience