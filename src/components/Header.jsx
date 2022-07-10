import React from 'react'
import headerimage from '../images/icon.jpg'

export default function Header() {
    return( 
        <div className='header'>
            <img src= {headerimage} 
            alt="reactlogo" className='header-image' />
          <div>
            <p className='user-name'>Anderson Victor</p>
            <p className='user-role'>JS Developer</p>
           
            <a href='https://google.com'className='user-website'>play.com</a>    
          </div>
        </div>
    )
} 