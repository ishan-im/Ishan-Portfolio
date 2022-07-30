import React from 'react'
import './Footer.css'

import {BsInstagram,BsLinkedin,BsTwitter, BsGithub} from 'react-icons/bs'

import {SiBuymeacoffee} from 'react-icons/si'

import {FaReact} from 'react-icons/fa'

function Footer() {
  return (
    <footer id="footer">
      <a href="/#" className="footer__logo">
        ISHAN
      </a>

      <ul className="permalinks">
        <li>
          <a href="/#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">experience</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://twitter.com/IshanMondaljs" target="#blank">
          <BsTwitter style={{ color: "#1191e6" }} />
        </a>
        <a href="https://www.linkedin.com/in/ishanmondaljs/" target="#blank">
          <BsLinkedin style={{ color: "#1191e6" }} />
        </a>
        <a href="https://github.com/ishan-im" target="#blank">
          <BsGithub
          style={{color:'#f0f0f0'}}
          />
        </a>
        <a href="https://www.instagram.com/ig_ismondal7" target="#blank">
          <BsInstagram
            style={{
              color:' #fd5949'
            }}
          />
        </a>
        <a href="https://www.buymeacoffee.com/ishanmondal" target="#blank">
          <SiBuymeacoffee style={{ color: "yellow" }} />
        </a>
      </div>

      <div className="react_name">
        <h3>
          Created With ❤️ Using{'  '}
          <a href="https://reactjs.org/" target="#blank">
            <FaReact className="react__icon" />
          </a>
        </h3>
      </div>

      <div className="footer_copyright">
        <small>&copy; All rights reserved</small>
      </div>
    </footer>
  );
}

export default Footer