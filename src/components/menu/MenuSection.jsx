import React from 'react';
import MenuItem from './MenuItem';

const MenuSection = ({ section }) => {

  return (
    <div>
      <h2>{section.section}</h2>
      <ul>
        {section.items.map((item, index) => (
          <MenuItem key={index} item={item} />
        ))}
      </ul>
    </div>
  );
};

export default  MenuSection