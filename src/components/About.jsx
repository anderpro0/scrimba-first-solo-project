import React from 'react'
import { FaEnvelope } from 'react-icons/fa'
import { FaLinkedin } from 'react-icons/fa'


export default function About() {
    return( 
        <div className='container-wrapper'>
           <div className='button-wrapper'>
              <a href="google.com" className='email-icon'><FaEnvelope />Email</a>
              <a href="https://www.linkedin.com/in/anderson-victor-5b1308224/" className='linkedin-icon'><FaLinkedin />Linkedin</a>

            <p className='about-header'>About</p>
            <p className='about-content'>
            I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
           </div>
        </div>
    )
}