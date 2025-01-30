import React from 'react'
import Navbar from './componenets/navbar/Navbar'
import Hero from './componenets/Hero/Hero'
import Nanigation from './componenets/navbar/Nanigation'
import Products from './componenets/Products/products'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Nanigation/>
      <Hero/>
      <Products/>
    </div>
  )
}

export default App

