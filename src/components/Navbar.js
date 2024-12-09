import React, { useState } from 'react';

const Navbar = () => {
  // Array of navbar items
  const navItems = [
    'Home',
    'CRICKET',
    'FOOTBALL',
    'TENNIS',
    'AMERICAN FOOTBALL',
    'AUSTRALIAN RULES',
    'BASEBALL',
    'BASKETBALL',
    'ESPORTS',
    'GAELIC GAMES',
    'HANDBALL',
    'ICE HOCKEY',
    'MIXED',
    'Athletics',
    'Boxing',
    'Wrestling',
    'MMA',
    'Badminton',
    'Table Tennis',
    'Chess',
    'Esports',
    'F1',
    'Racing',
    'Gymnastics',
    'Skiing',
    'Surfing'
  ];

  // State to track active button
  const [activeItem, setActiveItem] = useState('Home');

  return (
    <div className='flex bg-[#064094]'>
      <div
        className="w-full mx-auto"
        style={{
          '--bs-gutter-x': '1.5rem',
          paddingLeft: 'calc(var(--bs-gutter-x) * 0.5)',
          paddingRight: 'calc(var(--bs-gutter-x) * 0.5)',
        }}
      >
        <ul className='flex px-0 py-[9px] flex-nowrap overflow-x-auto w-full'>
          {navItems.map((item, index) => (
            <li key={index} className='list-none'>
              <a
                href="#"
                className={`text-white uppercase px-[15px] py-[3px] text-[14px] align-middle transform-gpu shadow-[0_0_1px_transparent] text-center whitespace-nowrap inline-block transition-all duration-1000 ease-out border-b-2 ${activeItem === item ? 'border-b-white' : 'border-transparent'} hover:border-b-white`}
                onClick={() => setActiveItem(item)} // Set the active item on click
              >
                <b className="font-bold">{item}</b>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
