import React from 'react'

import cv from '../../assests/Ishan_Mondal_Resume.pdf'


function Cv() {
  return (
    <div className='cta'>
        <a href={cv} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv