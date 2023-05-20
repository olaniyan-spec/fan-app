import React from 'react'
import Header from '../Components/Header'
import './Home.css'
import Categories from '../Components/Categories'
import Discount from '../Components/Discount'
import Arrival from '../Components/Arrival'
import NewCategories from '../Components/NewCategories'
import Partners from '../Components/Partners'


const Home = () => {

  return (
    <div>
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