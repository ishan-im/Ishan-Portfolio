import React from 'react'

import './Header.css'

import { Typewriter } from 'react-simple-typewriter'

import Socials from './Socials/Socials'

import MyPic from '../../assests/my-img-background.png'

import Hello from '../../assests/Hello.json'

import ButtonCV from './Cv'

import ToogleButton from './ToogleButton'

import Photo from './Photo'

function Header(props) {


  

    const textArr = []
    
    Hello.map(text => {

      return textArr.push(text.hello)

    })
    
    

    


  return (
    <header>
        <div className="container header__container">
        <h5 className='text-gray' >

          <Typewriter
            words={textArr}
            loop={0}
            cursor
            cursorStyle='_'
            typeSpeed={80}
            deleteSpeed={60}
            delaySpeed={1500}

          />

        </h5>
            <h1 className='text-light'>Ishan Mondal</h1>
            <h5 className='text-gray'>Full-Stack Developer</h5>

            <ButtonCV/>

            <ToogleButton theme = {props.theme}  changeTheme={props.changeTheme}/>

            <Photo img={MyPic}/>

            <Socials/>
           
        </div>
    </header>
  )
}

export default Header