import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/BuyMe.jpg'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import './Navbar.css'

const Navbar = () => {
    const [navShowing, setNavshowing] = useState(false)
  return (
    <nav>
        <div className='container nav-container'>
            <div className='navbar-wrapper'>
            <Link to='/' className='logo' onClick={()=>setNavshowing(false)}><img src={logo} alt='logo'/></Link>
            <ul className='nav-wrapper'>
                <li className='nav-links'><NavLink to='/'>Home</NavLink></li>
                <li className='nav-links'><NavLink to='/'>About</NavLink></li>
                <li className='nav-links'><NavLink to='/'>Contact us</NavLink></li>
            </ul>
            <div className='search-wrapper'>
                 <AiOutlineSearch className='search-icon'/>
                <input className='search' type='text' placeholder='search for product'/>
            </div>
            <div className='nav-icons'>
                <RiContactsLine/>
                <BsCart/>
                <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>{
                navShowing ? <MdOutlineClose/> : <GoThreeBars/>
            }</button>
            </div>
              

            </div>
            

        </div>
    </nav>
  )
}

export default Navbar