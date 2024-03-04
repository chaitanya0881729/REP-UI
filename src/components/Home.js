import React from 'react';
import './Style.css';
import Navbar from './Navbar';
import Header from './Header';
import Pricing from './Pricing';
import { FooterContainer } from './footer/footer';


const Home = () => {
  return (
    <div>

   <div className=''>
      <Navbar/>
      <Header/>
      <Pricing/>
      <FooterContainer/>
    </div>
      
    </div>
  )
}

export default Home
