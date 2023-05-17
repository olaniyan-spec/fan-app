import { standingFan } from '../data';
import {fan} from '../data'
import Card from './Card'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { responsive } from '../data';

const NewCategories = () => {
const fanData =   fan.map((data, id)=>{
  return <Card key={id} className='fans-fan'>
  <div className='fan-image'>
    <img src={data.image} alt='fan'/>
  </div>
  <small>{data.title}</small>
  <p className='price'>{data.price}</p>
</Card>
})
const fanDataRight =standingFan.map((data,id)=>{
  return <Card key={id} className='fans-fan'>
  <div className='fan-image'>
    <img src={data.image} alt='fan'/>
  </div>
  <small>{data.title}</small>
  <p className='price'>{data.price}</p>
</Card>
})

  return (
    <section>
      <div className='container new-categories-container'>
        <div className='new-categories-wrapper'>
          <div className='new-left'>
            <h4>Ceiling Fan</h4>
            <small>Shop all ceiling fan choose from over 5000 models</small><br/>
            <button className='btn'>SHOP NOW</button>
          </div>
            <div className='new-right'>
              <Carousel responsive={responsive}>
                  {fanData}
              </Carousel>;  
            </div>
        
        </div>
        <div className='new-categories-wrapper'>
          <div className='new-left'>
            <h4>Standing Fan</h4>
            <small>Shop all ceiling fan choose from over 5000 models</small><br/>
            <button className='btn'>SHOP NOW</button>
          </div>
            <div className='new-right'>
              <Carousel responsive={responsive}>
                  {fanDataRight}
              </Carousel>; 
            </div>
        </div>
      </div> 
    </section>
  )
}

export default NewCategories
