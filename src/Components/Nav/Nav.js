import React,{useState} from 'react'
import './Nav.css'

import {AiOutlineHome} from 'react-icons/ai'
import {GrServices} from 'react-icons/gr'
import {IoMdContacts} from 'react-icons/io'
import {FaUserNinja} from 'react-icons/fa'
import {SiBookstack} from 'react-icons/si'

function Nav() {

  const [activeNav, setActiveNav] = useState('#');

  return (
    <nav className='nav'>
      <a
       href="/#" 
       onClick={() => setActiveNav("#")}
       className={activeNav === "#" ? "active" : ""}
       >
        <AiOutlineHome  className='home'/>
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <SiBookstack />
      </a>
      <a
       href="#experience"
       onClick={() => setActiveNav("#experience")}
       className={activeNav==='#experience' ? 'active': ''}
       >
        <FaUserNinja/>
       
      </a>
      <a
       href="#services"
       onClick={() => setActiveNav("#services")}
       className={activeNav==='#services' ? 'active': ''}
       
       >
        <GrServices/>
        
      </a>
      
      <a
       href="#contact"
       onClick={() => setActiveNav("#contact")}
       className={activeNav==='#contact'? 'active': ''}
      >
        
        <IoMdContacts/>
        
      </a>
    </nav>
  );
}

export default Nav