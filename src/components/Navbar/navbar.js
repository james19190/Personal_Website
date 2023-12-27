import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt="Logo" className='logo'/>

        <div className='desktopMenu'>
            <a href='/' className='desktopMenuListItem'>Home</a>
            <a href='/about' className='desktopMenuListItem'>About</a>
            <a href='/work' className='desktopMenuListItem'>Work</a>
            <a href='/projects' className='desktopMenuListItem'>Projects</a>
            <a href='/contact' className='desktopMenuListItem'>Contact</a>
        </div>
        
    </nav>
  )
}

export default Navbar
