import React from 'react';
import './Buy.css';
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

const Buy = () => {
  return (
    <div className="buy-container">
      <h1 className="buy-heading">Explore Categories</h1>
      <div className="card-grid">
        {categories.map((category, index) => (
          <div key={index} className="card">
            <img src={category.image} alt={category.name} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{category.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Buy;
