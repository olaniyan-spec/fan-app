import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/BuyMe.jpg'
import {AiOutlineSearch} from 'react-icons/ai'
import {BsCart} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import {Links} from '../data'
import './Navbar.css'

const Navbar = () => {
    const [navShowing, setNavshowing] = useState(false)
  return (
    <nav onClick={()=>setNavshowing(false)}>
        <Link to ='/' className='logo' onClick={()=>setNavshowing(false)}>
                <img src={logo} alt='nav_logo'></img>
        </Link>
        <div>
        <ul className={`navbar ${navShowing ? 'show-nav' : 'hide-nav' }`}>
                {Links.map(({name, path}, index)=>{
                    return(
                        <li key={index}><NavLink to={path} >{name}</NavLink></li>
                    )     
                })}
                    <li><input className='search' type='text' placeholder='search for product'/></li>
                    <span>
                    <li className><RiContactsLine/></li>
                    <li className><BsCart/></li> 
                    </span>    
            </ul>
                <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>
                    { navShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
        </div>
    </nav>
  )
}

export default Navbar

{/* <div className='nav-container'>
            <div className='navbar-wrapper'>
            <Link to='/' className='logo' onClick={()=>setNavshowing(false)}>
                <img src={logo} alt='logo'/></Link>
            <ul className={`nav-wrapper ${navShowing ? 'show-nav' : 'hide-nav'}`}>
                <li className='nav-links'><NavLink to='/'>Home</NavLink></li>
                <li className='nav-links'><NavLink to='/'>About</NavLink></li>
                <li className='nav-links'><NavLink to='/'>Contact us</NavLink></li>
            </ul>
                <div className='search-wrapper'>
                    <AiOutlineSearch className='search-icon'/>
                    <input className='search' type='text' placeholder='search for product'/>
                    <RiContactsLine/> <BsCart/>
                </div>
                <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>{
                navShowing ? <MdOutlineClose/> : <GoThreeBars/>
            }</button>
            </div>
            </div>
        </div> */}