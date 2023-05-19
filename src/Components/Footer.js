import React from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'
import {FaLinkedin} from 'react-icons/fa'
import {AiOutlineTwitter} from 'react-icons/ai'
import { AiFillInstagram } from 'react-icons/ai'

const Footer = () => {
  return (
    <section className='footer'>
        <div className='footer-container'>
            <div className='footer-wrapper'>
                  <article className='footer-content'>
                        <h4>Our Company</h4>
                        <h5>Ceiling fan</h5>
                        <h5>Standing fan</h5>
                        <h5>Table fan</h5>
                    </article>
                    <article className='footer-content'>
                        <h4>ABOUT US</h4><br/>
                        <Link className='h5'to='/'>Our Story</Link><br/>
                        <Link  className='h5'to='/'>Materials</Link><br/>
                        <Link  className='h5'to='/'>Contact</Link><br/>
                        <Link  className='h5'to='/'>As Seen on</Link>
                    </article>
                    <article className='footer-content'>
                        <h4>SUPPORT</h4><br/>
                        <Link  className='h5' to='/'>Terms of service</Link><br/>
                        <Link  className='h5'to='/'>Privacy Policy</Link><br/>
                        <Link  className='h5'to='/'>Shipping and Returns</Link>
                    </article>
                    <article className='footer-content'>
                        <h4>NEED HELP</h4>
                        <h5>We are available by phone</h5>
                        <h5>234-810-979</h5>
                        <h5>Monday to Friday 10 to 6 EST</h5>
                        <div className='footer-socials'>
                         <a href='https://linkedin.com/' target='_blank' rel='noreferrer noopener'><FaLinkedin/></a>
                         <a href='https://twitter.com/@TofunmiOlaniyan' target='_blank' rel='noreferrer noopener'><AiOutlineTwitter/></a>
                         <a href='https://instagram.com/tofunmi_olaniyan' target='_blank' rel='noreferrer noopener'><AiFillInstagram/></a>
                        </div>
                    </article>
            </div>
             <div className='footer-copyright'>
               <small>2023 TofunmiOlaniyan &copy; All rights reserved</small>
             </div>
        </div>
    
    </section>
  )
}

export default Footer