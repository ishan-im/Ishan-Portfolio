import React from 'react'

import { BsLinkedin, BsTwitter,BsGithub} from 'react-icons/bs';
import  {SiBuymeacoffee} from 'react-icons/si'

import classes from  './Socials.module.css'

function Socials(props) {

    
  return (
    <div className={classes.socials}>

        <a href="https://twitter.com/IshanMondaljs" target="#blank"><BsTwitter /></a>
        <a href="https://www.linkedin.com/in/ishanmondaljs/" target="#blank"><BsLinkedin /></a>
        <a href="https://github.com/ishan-im" target="#blank"><BsGithub /></a>
        <a href="https://www.buymeacoffee.com/ishanmondal" target="#blank"><SiBuymeacoffee /></a>
    </div>
  )
}

export default Socials