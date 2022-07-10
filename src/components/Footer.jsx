import React from 'react'
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export default function Footer() {
    return( 
        <div className='footer'>
            <div className='footer-content'>
            <div className='font-icon twitter'><a href="https://twitter.com/Andertunes_9" ><FaTwitterSquare /></a> </div>
            <div className='font-icon'><a href="https://web.facebook.com/Boyd6997" className='footer-icon facebook'><FaFacebookSquare /></a></div>
            <div className='font-icon instagram '><a href="https://www.instagram.com/andertunes_9/" className='footer-icon instagram'><FaInstagramSquare /></a></div>
            <div className='font-icon github'><a href="https://github.com/anderpro0" className='footer-icon github'><FaGithubSquare /></a></div>

            </div>
        </div>
    )
}
