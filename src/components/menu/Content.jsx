import React from 'react'
import './Content.css';
import top from '../assets/namaste.jpg'

const Content = ({ items }) => {
  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span>
            <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  

  )
}

export default Content