import React from 'react'
import fan1 from '../images/discount1.jpg'
import fan2 from '../images/discount2.jpg' 


const Discount = () => {
  return (
    <section className='discount'>
        <div className='container discount-container'>
            <div className='discount-wrapper'>
                <div className='discount-left'>
                    <h5>OFFICIAL@BUYME</h5>
                    <h2>Extra 10% off</h2>
                    <h4>Top brands at checkout with Buyme</h4>
                    <small>Avaliable to shop now</small>
                </div>
                <div className='discount-right'>
                    <img className='small'src={fan1} alt='fan'/>
                    <img  src={fan2} alt='fan2'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Discount