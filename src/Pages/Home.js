import React from 'react'
import {useState} from 'react'
import Header from '../Components/Header'
import './Home.css'
import Categories from '../Components/Categories'
import Discount from '../Components/Discount'
import Arrival from '../Components/Arrival'
import NewCategories from '../Components/NewCategories'
import Partners from '../Components/Partners'


const Home = () => {
  const [navShowing, setNavshowing] = useState(false)
  return (
    <div onClick={()=> setAnswerShowing(prev => !prev)}>
        <Header/>
        <Categories/>
        <Discount/>
        <Arrival/>
        <NewCategories/>
        <Partners/>
    </div>
  )
}

export default Home