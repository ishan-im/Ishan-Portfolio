import React from 'react'

import './Experience.css'

import {BsFillPatchCheckFill} from 'react-icons/bs'

function ExperienceItem(props) {
  return (
    <article className='experience__details'> 
    <BsFillPatchCheckFill className='experience__details-icon'/>
    <div>
    <h4>{props.item}</h4>
    <small className='text-gray'>{props.experience}</small>
    </div>
</article>
  )
}

export default ExperienceItem