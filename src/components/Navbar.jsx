import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Navbar.css'
import brand_logo from'./assets/tandu.png'


 export default function Navbar() {
   return ( 
         <header>
          <div className="logo">
              <Link to="/" ><img src={brand_logo} alt="logo"  /></Link>
          </div>
            <div className="nav">
             <Link to="/">Home</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/menu">Menu</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/cart">Cart</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/login">Login</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/about">About Us</Link>&nbsp;&nbsp;&nbsp;&nbsp;
             <Link to="/contact">Contact Us</Link>
           </div>
         
        </header>
    )
}