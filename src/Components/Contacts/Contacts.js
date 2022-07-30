import React, { useRef } from 'react'
import './Contacts.css'

import {MdMailOutline} from 'react-icons/md'
import  {BsTwitter, BsWhatsapp} from 'react-icons/bs'

import emailjs from '@emailjs/browser';

function Contacts() {

  const form = useRef();

  const sendEmail = (e) => {

    e.preventDefault();


    emailjs.sendForm('service_jmky6m4', 'template_dwibpac', form.current, 'nCuUGI1bVoR7_20mr')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });

      e.target.reset();
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          
          <article className='contact__option'>
            <MdMailOutline className='contact__option_icon'/>
            <h4>Email</h4>
            <h5>Email Me</h5>
            <a href="mailto:ishan.webdeveloper7.bdn@gmail.com" target='#blank'>Send Mail</a>
          </article>

          <article className='contact__option'>
            <BsTwitter className='contact__option_icon'/>
            <h4>Twitter</h4>
            <h5>Ishan Mondal</h5>
            <a href="https://twitter.com/IshanMondaljs" target='#blank'>Message Me</a>
          </article>

          <article className='contact__option'>
            <BsWhatsapp className='contact__option_icon'/>
            <h4>Whats App</h4>
            <h5>Ishan Mondal</h5>
            <a href="https://api.whatsapp.com/send?phone=918918853317" target='#blank'>Send a Message</a>
          </article>
        </div>

        <form ref={form} onSubmit={sendEmail} >
            <input type="text" name='name' placeholder='Your Full Name' required/>
            <input type="email" name="email" placeholder='Your Email' required />
            <textarea type="message" name='message' rows='7' placeholder='Your Message' required />
            <div className='submit__button'>
            <button type="submit" className='btn btn-primary'>Send Message</button>
            </div>
        </form>

      </div>
    </section>
    )
  
}

export default Contacts