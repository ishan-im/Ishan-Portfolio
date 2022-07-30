import React from 'react'

import './About.css'
import MYImg from '../../assests/me-about-copy-2.png'

import {FaAward} from 'react-icons/fa'

import {CgFolder} from 'react-icons/cg'

function About() {
  return (
    <section id="about">
      <h5 className='text-gray'>Get to Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me_image">
            <img src={MYImg} alt="My-img" />
          </div>
        </div>

        <div className=" about__content">
          <div className="about__Cards">
            <article className="about__Card">
              <CgFolder className="about__icon" />
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
          

            <article className="about__Card">
              <FaAward className="about__icon" />
              <h5>Projects</h5>
              <small>20+ Projects</small>
            </article>
          </div>
          
          <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
          distinctio rerum? Sunt, veritatis officia magni eum quia alias hic!
          Praesentium numquam rem tenetur voluptates quis, cum enim illo
          laudantium explicabo.
          </p>
          
          <div className="submit__button">
          <a href="#contact" className='btn btn-primary '>Let's Talk</a>
          </div>
        </div>

        
      </div>
    </section>
  );
}

export default About