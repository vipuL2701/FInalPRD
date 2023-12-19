import React from 'react'
import './Menu.css'
import top from '../assets/namaste.jpg'
import Content from './Content';

function Menu() {
  const menuItems = [
    { name: 'Dish 1', price: '$10.99' },
    { name: 'Dish 2', price: '$12.99' },
    { name: 'Dish 3', price: '$8.99' },
   
  ];
  return (
  <>
  <div className='back'>
    <div>
    <Content items={menuItems} />
    </div>
  </div>
  </>
  )
}

export default Menu