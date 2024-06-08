import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Pricing from './Pricing';
import Products from './Products';
import FAQ from './FAQ';
import Footer from './Footer';


const MainContainer = () => {
  return (
    <div >
      <Header/>
      <Hero/>
      <Pricing/>
      <Products/>
      <FAQ/>
      <Footer/>
 
    </div>
  )
}

export default MainContainer;
