import React from 'react';
import './Style.css';
import Navbar from './Navbar';
import Header from './Header';
import Pricing from './Pricing';
import { FooterContainer } from './footer/footer';
import Testimonials from './testimonials/Testimonials';


const Home = () => {
  return (
    <div>

   <div className=''>
      <Navbar/>
      <Header/>
      <Pricing/>
      <Testimonials/>
      <FooterContainer/>
    </div>
      
    </div>
  )
}

export default Home
