import React from 'react'
import CV from '../../assests/ISHAN_MONDALs_RESUME.pdf'


function Cv() {
  return (
    <div className='cta'>
        <a href={CV} download className='btn'>Download CV</a>
        <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default Cv