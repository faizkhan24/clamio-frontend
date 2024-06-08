import React from 'react';
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className="bg-secondary text-white md:px-20 p-4 grid grid-cols-1 sm:grid-cols-2 items-center z-10 sticky top-0 shadow-md">
      <div className="flex justify-between w-full sm:w-auto">
        <h1 className="text-2xl font-bold text-primary">Clamio</h1>
        <div className="sm:hidden">
          <GiHamburgerMenu size={24} />
        </div>
      </div>
      <nav className="justify-self-center sm:justify-self-end hidden sm:block md:block">
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-primary font-bold">COMMUNITY</a></li>
          <li><a href="#" className="hover:text-primary font-bold">EXPLORE</a></li>
          <li><a href="#" className="hover:text-primary font-bold">CREATORS</a></li>
          <li><a href="#" className="hover:text-primary font-bold">JOIN</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
