import React from 'react'
import headerFan from '../images/header-fan.jpg'

const Header = () => {
  return (
    <div className='main-header'>
        <div className='main-header-content'>
            <div className='main-header-left'>
                <h2>Fan that everyone loves</h2>
                <p>We have 5000+ reviews and our customers trust our fan and quality product</p>
                <button>SHOP NOW</button>
            </div>
            <div className='main-header-right'>
                <img src={headerFan} alt='header-img'/>
            </div>
        </div>
    </div>
  )
}

export default Header