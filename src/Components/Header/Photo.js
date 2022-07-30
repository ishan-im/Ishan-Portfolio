import React from 'react'
import './Photo.css'

function Photo(props) {
  return (
    <div className="me__container">
              
                <img src={props.img} alt="MY_Image" className='my__img'/>
             
            </div>
  )
}

export default Photo