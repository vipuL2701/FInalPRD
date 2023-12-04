import React from 'react'
import './Menu.css'
import MenuSection from './MenuSection';

const Menu = () => {

  const menuData = [

  { section: 'Appetizers',
    items: [
      { name: 'Samosa', price: '$4.99' },
      { name: 'Paneer Tikka', price: '$6.99' },
      // Add more items as needed
    ],
  },
  {
    section: 'Main Course',
    items: [
      { name: 'Chicken Curry', price: '$11.99' },
      { name: 'Vegetable Biryani', price: '$9.99' },
      // Add more items as needed
    ]
  } 
] 
    return (
      <div className= "todo">
        <h1 className="text">TAndoori Restaurant Menu</h1>
        {menuData.map((section, index) => (
          <MenuSection key={index} section={section} />
        ))}
      </div>
    );
  };
  export default Menu