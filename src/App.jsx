import React from 'react'
import Navbar from './componenets/navbar/Navbar'
import Hero from './componenets/Hero/Hero'
import Nanigation from './componenets/navbar/Nanigation'
import Products from './componenets/Products/products'
import AOS from 'aos';
import "aos/dist/aos.css";
import Topproducts from './componenets/Products/Topproducts'
import Sale from './componenets/Sales/Sale'
import Subdscribed from './componenets/Subscription/Subdscribed'
import Footer from './componenets/Footer/Footer'

const App = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sone",
      delay: 100
    });
    AOS.refresh();
  }, []);
  return (
    <div>
      <Navbar />
      <Nanigation />
      <Hero />
      <Products />
      <Topproducts/>
      <Sale/>
      <Subdscribed/>
      <Products  />
<Footer/>
    </div>
  )
}

export default App

