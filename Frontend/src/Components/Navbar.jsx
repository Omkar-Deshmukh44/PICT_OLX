import React, { useState } from 'react';
import './Navbar.css'
import logo_light from '../assets/logo_w.png' ;
import search_button_light from '../assets/search-b.png' ;
import { Link } from 'react-router-dom';
import LoginPopup from '../pages/LoginPopup';



const Navbar = ({ isLoggedIn, user, login, logout }) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const handlePopupOpen = () => setIsPopupOpen(true);
    const handlePopupClose = () => setIsPopupOpen(false);
    return(
    <div className= 'navbar' >
        <img src={ logo_light} alt="" className='logo'/>

        <ul >
           <li><Link to="/" >Home </Link> </li>
           <li><Link to="/sell">Sell</Link></li>
           <li><Link to="/buy">Buy</Link></li>
           <li><Link to="/profile">Profile</Link></li>
        </ul>
        <div className="search-box">
          <input type="text" placeholder="Search" />
          <img src={search_button_light} alt="Search" className="search-icon" />
        </div>
        <div className="Login">
        {isLoggedIn ? (
          <>
            <button onClick={logout}>Logout</button>
          </>
        ) : (
          <button onClick={handlePopupOpen}>Sign In</button>
        )}
      </div>
      <LoginPopup isOpen={isPopupOpen} onClose={handlePopupClose} onLogin={login} />
    </div>
  )
}

export default Navbar