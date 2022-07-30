import React from 'react'

import {FiSun} from 'react-icons/fi'
import {FaMoon} from 'react-icons/fa'


import './ToogleButton.css'

function ToogleButton(props) {

    
      let button;
  
        if( props.theme === 'dark'){

             button =  (

               <button className="toogle__button toogle__button-light" onClick={props.changeTheme}>
                 <FiSun className='toogle__icon' />
               </button>
              
            )
        }
            else{

                button = (
                   
                  <button className="toogle__button toogle__button-dark" onClick={props.changeTheme}>
                    <FaMoon className='toogle__icon' />
                  </button>
                 
                )
            }
        
    

  return (
    <div className="dark-light__mode">

       
    {button} 
    
    </div>
  )
}

export default ToogleButton