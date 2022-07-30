import React from 'react'
import './serviceList.css'

import {FiCheck} from 'react-icons/fi'

function ServiceList(props) {
  return (
      <li>
          <FiCheck className='service__list-icon' />
          <p>{props.paragraph}</p>
     
      </li>
  )
}

export default ServiceList