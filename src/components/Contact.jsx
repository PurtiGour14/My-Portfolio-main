import React from 'react'
import "./Contact.css"
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function Contact() {
  return (
    <>
      <div className="container contact" id='contact'>
        <center>
        <h1>CONTACT ME</h1>
        </center>
        <div  className="contact-icon"data-aos="zoom-in-up">
         
          <a href='

' className="items">
            <FaLinkedin className='icons
            ' />
          </a>
          <a href='https://github.com/purtigour14
' className="items">
            <FaGithub className='icons
            ' />
          </a>
          <a href='purtigour418@gmail.com' className="items">
            <SiGmail className='icons
            ' />
          </a>
        </div>
      </div>
    </>
  )

}

export default Contact
