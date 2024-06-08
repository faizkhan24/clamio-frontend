import React from 'react';
import { STAR_PNG } from '../../constants/constants';


const Footer = () => {
  return (
    <footer className=" p- text-center my-10">
      <div className="grid gap-4 justify-center place-items-center">
        <img className="max-w-full h-auto " src={STAR_PNG} alt="Star" /> {/* Add the image here */}
        <p className='text-5xl my-4 font-extrabold'>Get Inspired</p>
        <p className='text-md max-w-screen-sm'>Dont't miss out on fresh content and follow your favorite creators today! Stay in the loop and never their newest creations.</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 justify-items-center">
          <button className="bg-primary text-black py-3 px-20 rounded">Browse Products</button>
          <button className="bg-primary text-black py-3 px-20 rounded">Discover Creators</button>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
