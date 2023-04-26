import React, { useState } from 'react';
import './navbar.css';
import { NavLink } from 'react-router-dom';
import { CgCloseR, CgMore } from "react-icons/cg";
const Navbar = () => {
  const [openMenu, setOpenMenu]=useState(false)
  return (
    <>
      <nav className={openMenu?'max-width active':'max-width'}>
        <ul className='navbar-links'>
          <li>
            <NavLink onClick={()=>setOpenMenu(false)} className='navbar-link' to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>setOpenMenu(false)} className='navbar-link' to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>setOpenMenu(false)} className='navbar-link' to='/service'>Service</NavLink>
          </li>
          <li>
            <NavLink onClick={()=>setOpenMenu(false)} className='navbar-link' to='/contact'>Contact</NavLink>
          </li>
        </ul>
        {/* media styling */}
        <div className='nav-mobile-btn'>
          <CgCloseR className='nav-mobile-icon close-icon' name='close-icon' 
          onClick={()=>setOpenMenu(false)} />
          <CgMore className='nav-mobile-icon' name='more-icon' onClick={()=>setOpenMenu(true)} />

        </div>
      </nav>
    </>
  )
}

export default Navbar