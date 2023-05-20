import React from 'react'
import { useState } from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../images/BuyMe.jpg'
import {BsCart} from 'react-icons/bs'
import {RiContactsLine} from 'react-icons/ri'
import {MdOutlineClose} from 'react-icons/md'
import {GoThreeBars} from 'react-icons/go'
import {Links} from '../data'
import './Navbar.css'

const Navbar = () => {
    const [navShowing, setNavshowing] = useState(false)
  return (
    <nav>
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
                    <li><input className='search' type='text' placeholder='Search for Product'/></li>
                    <Link to = '/'>
                    <span>
                    <li className><RiContactsLine/></li>
                    <li className><BsCart/></li> 
                    </span>
                    </Link>    
            </ul>
                <button className='nav-toggle' onClick={()=>setNavshowing(prev=>!prev)}>
                    { navShowing ? <MdOutlineClose/> : <GoThreeBars/>}
                </button>
        </div>
    </nav>
  )
}

export default Navbar
