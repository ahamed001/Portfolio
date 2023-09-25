import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header>
      <nav className='flex justify-between w-full mx-auto py-4 sm:py-8 sm:bg-black sm:fixed'>
        <div className='my-auto  fixed bg-black w-full left-0 top-0 py-3 pl-8' onClick={toggleMenu}>
          <GiHamburgerMenu className='text-white text-3xl cursor-pointer sm:hidden' />
        </div>
        <div
          className={`nav-links sm:static absolute sm:min-h-fit min-h-[35vh] bg-black w-full left-0 ${
            isMenuOpen ? 'top-[5%] z-50' : 'top-[-100%]'
          } sm:w-auto w-full flex items-center px-5`}
        >
          <ul className='flex sm:flex-row flex-col text-left pl-4 sm:items-center sm:gap-[3vw] gap-6 sm:fixed sm:right-10'>
            <li>
              <Link to={`/`} className='text-2xl text-white font-semibold sm:px-3 hover:text-sky-400' onClick={closeMenu}>
                Home
              </Link>
            </li>

            <li>
              <Link to={`/Skill`} className='text-2xl text-white font-semibold sm:px-3 hover:text-sky-400' onClick={closeMenu}>
                Skills
              </Link>
            </li>

            <li>
              <Link to={`/Work`} className='text-2xl text-white font-semibold sm:px-3 hover:text-sky-400' onClick={closeMenu}>
                Works
              </Link>
            </li>

            <li>
              <Link to={`/Resume`} className='text-2xl text-white font-semibold sm:px-3 hover:text-sky-400' onClick={closeMenu} >
                Resume
              </Link>
            </li>
            
            <li>
              <Link to={`/Contact`} className='text-2xl text-white font-semibold sm:px-3 hover:text-sky-400' onClick={closeMenu}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
