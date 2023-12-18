import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Home.css';
import pin from '../assets/pin.jpg';
import image from '../assets/image1.png';
import Reservation from './Reservation';
import reserv from '../assets/reserv.jpg';

const Home = () => {

  const [searchTerm, setSearchTerm] = useState('');
  const Navigate = useNavigate();
  const handleSearch = () => { 
  };

  return (
    <>
     <div className='img-box '>

       <img src={image} className="img-box img" alt=""/>
     </div>
     <div className='search'>
       ORDER NOW <br /> 
       {<img src={pin} className='pin'/>} 
      
      <input className='round'
         
        type="text"
    
        placeholder="Please Enter Your Postal Code Here."

        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />&nbsp;&nbsp;
      <button class="button" onClick={handleSearch}>DELIVERY</button>&nbsp;&nbsp;
      <button class="button1" onClick={handleSearch}>TAKEWAY</button>
     </div>
     <div >
     <img src={reserv} className='reserv'/> 
     <Reservation />
     </div>
    </>
  ); 
};
export default Home
