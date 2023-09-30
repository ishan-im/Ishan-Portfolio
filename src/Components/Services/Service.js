import React from 'react'
import './Service.css'


// import {FiCheck} from 'react-icons/fi'

import ServiceList from './ServiceList'

function Service() {
  return (
    <section id='services'>
      <h5>What I Offer</h5>
      <h2>Services</h2>


      <div className="container services__container">

        <article className="service">
          <div className="service__head">
          <h3>UI/UX Design</h3>
          </div>

          <ul className="service__list">

            <ServiceList paragraph='High quality website that makes you stand out' />

            <ServiceList paragraph='I deliver creative, strategic, informative solution to help brands' />

            <ServiceList paragraph='Design attractive modern responsive website' />

            <ServiceList paragraph='I will help you redesigning your current website' />

            <ServiceList paragraph='Fully responsive and professional looking.' />

            <ServiceList paragraph='Unique and custom design' />

           
          </ul>
        </article>
        

        <article className="service">
          <div className="service__head">
          <h3>Web Development</h3>
          </div>

          <ul className="service__list">
            
            <ServiceList paragraph='Full Stack system administration'/>

            <ServiceList paragraph='MERN Stack web application'/>

            <ServiceList paragraph='RESTful & GraphQL integration'/>

            <ServiceList paragraph='Developing components / pages'/>

            <ServiceList paragraph='Building Single Page Application with Next.js'/>

            <ServiceList paragraph='Mobile App development with React Native'/>

            <ServiceList paragraph='dApps with Web3'/>
          </ul>
        </article>


        <article className="service service__third-column">
          <div className="service__head">
          <h3>Content Creation</h3>
          </div>

          <ul className="service__list">
            
            <ServiceList paragraph='Create visual design to bring meaningful experience aive'/>

           <ServiceList paragraph='Well researched and top quality content'/>

            <ServiceList paragraph='SEO Optimization'/>

            <ServiceList paragraph='Digital experience through problem solving'/>

            <ServiceList paragraph='Strategically unique content'/>

                 
          </ul>
        </article>
      </div>
    </section>
    )
  
}

export default Service