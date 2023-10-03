import React from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css'
import user_icon from "./assets/person.png"


function Navbar(){
    return ( 
              <ul>
               <li className='navBar'>

                    <div className='Home'><Link to="/">Home</Link></div></li>

                <li className='Menu'><Link to="/Menu">Menu</Link></li>   

                <li className='Cart'><Link to="/Cart">Cart</Link> </li>

                <li className='About Us'><Link to="/About Us">About Us</Link> </li>

                <li className='Contact Us'><Link to="/Contact Us">Contact Us</Link>
                    </li>

                <li class="dropdown"><a href="javascript:void(0)" class="dropbtn">
                <img  src={user_icon} alt="" /></a>

                <div class="dropdown-content"><a className='Login'><Link to="/Login">Login</Link></a>
                <a className='Register'><Link to="/Register">Register</Link></a>
                     </div>
                </li>          
            </ul>              
              )}    
export default Navbar;                 

               
               
                   
                        
                     
               

             
  
                    
                       
               
               
                        
               
                        
                   

                    
                      
                   
                   
                  