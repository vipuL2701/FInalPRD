import React from 'react';
import {Link,NavLink} from 'react-router-dom';
import './Header.css'
import brand_logo from'../assets/tandori.jpg'
import log from'../assets/person.png'



 export default function Header() {
   return ( 
    <header >
       <div className="header">
         <div className='nav-logo'>
          <img src={brand_logo} className="logo border" alt="Logo"/>
         </div>
          <ul className="navbar-list">
           <li className="navbar-item">
            <Link to="/" className="navbar-link color border">Home</Link>
           </li>
           <li className="navbar-item">
            <Link to="/menu" className="navbar-link border">Menu</Link>
           </li>
           <li className="navbar-item">
            <Link to="/about" className="navbar-link border">AboutUs</Link>
           </li>
           <li className="navbar-item">
            <Link to="/contact" className="navbar-link border">ContactUs</Link>
           </li>
           <li className="navbar-item">
            <Link to="/login" className="navbar-link border">Login</Link>
           </li>
          </ul>
         </div>
    </header>
)
}
