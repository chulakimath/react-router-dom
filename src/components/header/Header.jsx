import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../static/lg.jpg'

const Header = () => {
  const navigte = useNavigate()
  const handler = () => {
    navigte('/')
  }
  return (
    <>
      <div className=' bg-white flex justify-between items-center border-b  sticky top-0 z-50 max-sm:block max-sm:static '>
        <div className=' flex justify-center'><img width={'80px'} src={logo} /></div>
        <div className='links '>
          <ul className='flex gap-8 max-sm:items-center justify-center py-4 text-xl max-sm:text-base  max-sm:py-2 max-sm:gap-4'>
            <li>
              <NavLink to={''}
                className={({ isActive }) =>
                  ` hover:text-blue-400 ${isActive ? 'text-blue-600 shadow-sm shadow-blue-400 rounded-md px-1 py-1'
                    : 'text-black'}`}>Home</NavLink>
            </li>
            <li>
              <NavLink to={'about'}
                className={({ isActive }) =>
                  ` hover:text-blue-400 ${isActive ? 'text-blue-600 shadow-sm shadow-blue-400 rounded-md px-1 py-1'
                    : 'text-black'}`}>About</NavLink>
            </li>
            <li>
              <NavLink to={'contact'}
                className={({ isActive }) =>
                  ` hover:text-blue-400 ${isActive ? 'text-blue-600 shadow-sm shadow-blue-400 rounded-md px-1 py-1'
                    : 'text-black'}`}>Contact</NavLink>
            </li>
            <li>
              <NavLink to={'github'}
                className={({ isActive }) =>
                  ` hover:text-blue-400 ${isActive ? 'text-blue-600 shadow-sm shadow-blue-400 rounded-md px-1 py-1'
                    : 'text-black'}`}>User</NavLink>
            </li>

          </ul>
        </div>
        <div className=' flex gap-5 pr-4 max-sm:justify-center items-start py-3'>
          <button
            onClick={handler}
            className='hover:text-blue-600 hover:shadow-sm hover:shadow-blue-400 rounded-md px-1 py-1'>Login</button>
          <button
            onClick={handler}
            className='hover:text-blue-600 hover:shadow-sm hover:shadow-blue-400 rounded-md px-1 py-1'>Register</button>

        </div>
      </div>

    </>
  );
}

export default Header;


