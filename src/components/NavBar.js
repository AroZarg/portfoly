import React from 'react'
import { NavLink } from 'react-router-dom'
import DarkBtn from './DarkBtn'
function NavBar() {
    const activeLink = "nav-list__link nav-list__link-active"
    const normalLink = "nav-list__link"
  return (
   
    <nav className="nav">
    <div className="container">
        <div className="nav-row">
            <NavLink to="/" className="logo">
            <strong>My</strong> portfolio
            </NavLink>
                <DarkBtn/>
            <ul className="nav-list">
                <NavLink to="/projects"className={({isActive})=>isActive? activeLink:normalLink}>
                <li className="nav-list__item">Projects</li>
                </NavLink>
               <NavLink to = "/contacts"  className={({isActive})=>isActive? activeLink:normalLink}>
               <li className="nav-list__item">Contacts</li>
               </NavLink>
               
            </ul>
        </div>
    </div>
</nav>
  )
}

export default NavBar