import React from 'react'
import CV from '../../assests/ISHAN_MONDALs_RESUME.pdf'

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