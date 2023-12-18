import React from 'react'
import and from '../assets/playstore.png';
import apple from '../assets/appstore.png';
import phone from '../assets/app_view.png';
import './Download.css';
function Download() {
  return (
    <div className='down'>
       
        <h8>Download the TandooriRestaurant app</h8><br />
        <h9>Click, sit back and enjoy.</h9> 
      
       <div className='but'>
       <button type='button'><img src={and} className='and' /></button>&nbsp;
       <button type='button'><img src={apple} className='apple' /></button>
       </div>
     <img src={phone} className='phone' /> 
    </div>
  )
}

export default Download