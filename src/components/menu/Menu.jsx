import React from 'react'
import './Menu.css'
import top from '../assets/namaste.jpg'
import Content from './Content';
import soup from '../assets/soup.webp'

function Menu() {
  const menuItems = [
    { name: 'CHICKEN SOUP (Hühnersuppe)', price: '4,40 €', }, 
    { name: 'MULLIGATAWNY SOUP (Currysuppe mit Zitrone und Reis)', price: '3,90 €' },
    { name: 'VEGETABLE SOUP (Gemüsesuppe)', price: '4,20 €' },
   
  ];
  return (
  <>
  <div className='back'>
    <img src={top} className='tops' />
     <div className='text'>
        Namaste
        Welcome<br />
     </div>
    <div>
      <br/><br/>
    <Content items={menuItems} />

    </div>
  </div>
  </>
  )
}

export default Menu