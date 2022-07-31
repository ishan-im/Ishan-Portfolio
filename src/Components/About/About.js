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
          I'm a full-stack developer who loves building user-friendly websites and web-app and enjoys doing it.
          I am building web apps with advanced web technology like react node and next. I'm currently interseted
          in learning more about web3 tech and blockchain. 
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