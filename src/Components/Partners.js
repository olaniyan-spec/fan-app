import React from 'react'
import logo from '../images/Coin.jpg'
import partner1 from '../images/Coindesk.jpg'
import partner2 from '../images/reuters.jpg'
import partner3 from '../images/tracker.jpg'

const Partners = () => {
  return (
   <section className='partners'>
    <div className='container partners-container'>
        <div className='partners-wrapper'>
            <div className='first'>
                <img className='logo'src={logo} alt='logo'/>
                <img className='partner1'src={partner1} alt='logo'/>
            </div>
            <img className='partner2'src={partner2} alt='logo'/>
            <img className='partner3'src={partner3} alt='logo'/>
        </div>
    </div>
   </section>
  )
}

export default Partners