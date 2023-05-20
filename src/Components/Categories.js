import React  from 'react'
import {Link} from 'react-router-dom'
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
                    <h6>HANDY RECHARGEABLE MINI</h6>
                    <h6>FAN</h6>
                    <p>$52 $65</p>
                </div>
                <div className='fan-content'>
                    <img src={fan2} alt='fan1'/>
                    <h6>USB Charging Folding Retractable Table Fan</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan3} alt='fan1'/>
                    <h6>Mini Foldable USB Rechargable Mini Hand Fan With Battery</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan4} alt='fan1'/>
                    <h6>Futina 4" Metal Ventilation / Heat Extractor Fan</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan5} alt='fan1'/>
                    <h6>Multi-function Rechargeable Folding Retractable Table Fan</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan6} alt='fan1'/>
                    <h6>Iris Ohyama Woozoo Powerful And Silent Fan With Oscillation </h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan7} alt='fan1'/>
                    <h6>Andrakk REACHARGEABLE MIST FAN - USB+SOLAR PORTS</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan8} alt='fan1'/>
                    <h6>Ox 62" Inches Mega Ceiling Fan - White</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
                <div className='fan-content'>
                    <img src={fan9} alt='fan1'/>
                    <h6>Ox Standing Fan Industrial 26" Inches</h6>
                    <h6>FAN</h6>
                    <p>$52</p>
                </div>
            </div>
            <Link to = '/'><button>SHOP NOW</button></Link>
            
        </div>
    </section>
  )
}

export default Categories