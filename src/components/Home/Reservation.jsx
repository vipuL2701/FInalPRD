import React from 'react'
import reserv from '../assets/reserv.jpg'
import './Reservation.css'

const Reservation = () => {
  return (
    <>
  <div className='reserv'>
   

      <h1>RESERVATION</h1>
      

      <div className="input">
     🧔
       <input type='text' placeholder='Customer Name'/>
      </div>
      <div className="input">
     📞
       <input type='text' placeholder='Phone Number'/>
      </div>
      <div className="input">
      📧
      <input type='text' placeholder='Email Address'/>
      </div>
      <div className="input">
      👪
      <input type='text' placeholder='Person Count'/>
      </div>
      <div className="input">
    📅
      <input type='text' placeholder='Booking Date'/>
      </div>
      <div className='comment'>
      <input type='text' placeholder='Any Comment'/>
      </div>
 
    </div>
    </>
  )
}

export default Reservation