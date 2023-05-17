import React from 'react'
import fan1 from '../images/fan1.jpg'
import fan2 from '../images/fan2.jpg'
import fan3 from '../images/fan3.jpg'
import fan4 from '../images/fan4.jpg'
import fan5 from '../images/fan5.jpg'
import fan6 from '../images/fan6.jpg'
import fan7 from '../images/fan7.jpg'
import fan8 from '../images/fan8.jpg'
import fan9 from '../images/fan9.jpg'

const Categories = () => {
  return (
    <section className='categories'>
        <div className='container categories-container'>
            <div className='categories-head'>
                <h3><span>ALL</span></h3>
                <h3>Ceiling fan</h3>
                <h3>Standing fan</h3>
                <h3>Table fan</h3>  
            </div>
            <div className='fan-wrapper'>
                <div className='fan-content'>
                    <img src={fan1} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                    <p>$52 $65</p>
                </div>
                <div className='fan-content'>
                    <h4>SALE</h4>
                    <img src={fan2} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <h4 className='end'>END</h4>
                    <img src={fan3} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                <h4 className='sale'>SALE</h4>
                    <img src={fan4} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <img src={fan5} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <img src={fan6} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <img src={fan7} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <h4 className='eight'>END</h4>
                    <img src={fan8} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <div className='fan-content'>
                    <img src={fan9} alt='fan1'/>
                    <h3>HANDY RECHARGEABLE MINI</h3>
                    <h3>FAN</h3>
                </div>
                <button>SHOP NOW</button>
            </div>
            
        </div>
    </section>
  )
}

export default Categories