import React from 'react'
import { NavLink } from 'react-router-dom'
import Navbar from './Navbar';
import '../assets/style.css'; 
import './header.css';


const Header = () => {
  return (
    <>
      <header className='max-width'>
        <NavLink to='/' className='logo'>
          <h1>Rohi<span>TECH</span></h1>
        </NavLink>
        <Navbar />
      </header>
    </>
  )
}

export default Header