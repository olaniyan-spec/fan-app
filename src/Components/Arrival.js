import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img8.jpg'


const Arrival = () => {
  return (
   <section className='arrival'>
    <div className='container arrival-container'>
        <div className='arrival-head'>
            <h3>BEST SELLER</h3>
            <h3>NEW ARRIVAL</h3>
            <h3>FEATURED</h3>
        </div>
        <div className='arrival-wrapper'>
            <div className='best-seller'>
                <img src={img1} alt='first'/>
                <h4>AKAI TOWER FAN / AIR COOLER <br/> $50</h4>
            </div>
            <div className='best-seller'>
            
                <img src={img2} alt='first'/>
                <h4>Portable Tower Fan Quiet  Fan USB  <br/><span>$50</span></h4>
            </div>
            <div className='best-seller'>
           
                <img src={img3} alt='first'/>
                <h4>Clip-on Desk USB Fan Strong Airflow <br/> <span>$17</span></h4>
            </div>
                
            <div className='best-seller'>
            
                <img src={img4} alt='first'/>
                <h4>Mini Hand Portable Fan USB  <br/> <span>$20</span></h4>
            </div>
            <div className='best-seller'>
            
                <img src={img5} alt='first'/>
                <h4>Iris Ohyama Wooz Fan Circulator <br/> <span>$15</span></h4>
            </div>
            <div className='best-seller'>
           
                <img src={img6} alt='first'/>
                <h4>Qasa Quality 56 Inches Remote<br/> <span>$10</span></h4>
            </div>
            
            <div className='best-seller'>
            
                <img src={img7} alt='first'/>
                <h4>Zoosen Rechargeable Fan <br/> <span>$15.50</span></h4>
            </div>
            <div className='best-seller'>
            
                <img src={img8} alt='first'/>
                <h4>Bladeless Neck Fan Twin-turbo <br/> <span>$50</span></h4>
            </div>
            <div className='best-seller'>
           
                <img src={img9} alt='first'/>
                <h4>Mini Portable Cooling Fan <br/> <span>$5.0</span></h4>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Arrival