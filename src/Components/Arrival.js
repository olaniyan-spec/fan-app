import React from 'react'
import img1 from '../images/img1.jpg'
import img2 from '../images/img2.jpg'
import img3 from '../images/img3.jpg'
import img4 from '../images/img4.jpg'
import img5 from '../images/img5.jpg'
import img6 from '../images/img6.jpg'
import img7 from '../images/img7.jpg'
import img8 from '../images/img8.jpg'
import img9 from '../images/img9.jpg'


const Arrival = () => {
  return (
   <section className='arrival'>
    <div className='container arrival-container'>
        <div className='arrival-head1'>
            <h3>BEST SELLER</h3>
            <ul className='text'>
                <li>
                <img src={img1} alt='first'/>
                <h6>AKAI TOWER FAN / AIR COOLER <br/> $50</h6>
                </li>
                <li>
                <img src={img2} alt='first'/>
                <h6>Portable Tower Fan Quiet  Fan USB <br/> $50</h6>
                </li>
                <li>
                <img src={img3} alt='first'/>
                <h6>Clip-on Desk USB Fan Strong Airflow <br/> $50</h6>
                </li>
            </ul>
        </div>
        <div className='arrival-head1'>
            <h3>NEW ARRIVAL</h3>
            <ul className='text'>
                <li>
                <img src={img4} alt='first'/>
                <h6>Mini Hand Portable Fan USB  <br/> $50</h6>
                </li>
                <li>
                <img src={img5} alt='first'/>
                <h6>Iris Ohyama Wooz Fan Circulator <br/> $50</h6>
                </li>
                <li>
                <img src={img6} alt='first'/>
                <h6>Qasa Quality 56 Inches Remote <br/> $50</h6>
                </li>
            </ul>
        </div>
        <div className='arrival-head1'>
            <h3>FEATURED</h3>
            <ul className='text'>
                <li>
                <img src={img7} alt='first'/>
                <h6>Zoosen Rechargeable Fan  <br/> $50</h6>
                </li>
                <li>
                <img src={img8} alt='first'/>
                <h6>Bladeless Neck Fan Twin-turbo <br/> $50</h6>
                </li>
                <li>
                <img src={img9} alt='first'/>
                <h6>Mini Portable Cooling Fan <br/> $50</h6>
                </li>
            </ul>
        </div>
    </div>
   </section>
  )
}

export default Arrival

