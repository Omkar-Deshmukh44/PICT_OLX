import React from 'react'
import './Home.css'
import Hero_banner from '../assets/Hero_b2.webp' ;
import { useNavigate } from "react-router-dom";
import Books from '../assets/Books.jpg' ;
import Furniture from '../assets/Furniture.jpg';
import Electronics from '../assets/Electronics.jpg' ;
import Others from '../assets/Others.png';

const categories = [
  { name: 'Books', image: Books },
  { name: 'Furniture', image: Furniture },
  { name: 'Electronics', image: Electronics},
  { name: 'Others', image: Others },
];
const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='Slogan'>
        <img src={Hero_banner} alt="" />
        <div class="overlay1">
          <h3>Find everything you need for your student life – books, furniture, gadgets, and more!</h3>
          <h1>Buy & Sell Pre-loved Items on Campus!</h1>
          <div className='button1'>
            <button onClick={() => navigate('/buy')}>Buy</button>
          </div>
          <div className='button2'>
            <button onClick={() => navigate('/sell')} >Sell</button>
          </div>
          <div className='button3'>
            <button onClick={() => navigate('/profile')}>Profile</button>
          </div>
        </div>
        
    </div>
  )
}

export default Home