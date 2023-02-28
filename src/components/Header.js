import React from 'react'
import cv from "./../Helpers/Ara_Zargaryan.pdf"


function Header() {
 
  
  return (
    
    <header className="header">
    <div className="header__wrapper">
        <h1 className="header__title">
            <strong>Hi, my name is <em>Aro</em></strong><br/>
            a frontend developer
        </h1>
        <div className="header__text">
            <p>with passion for learning and creating.</p>
        </div>
         <a href={cv} download="Ara resume.pdf" className="btn"  >Download CV</a>
    </div>
</header>

  )
}

export default Header