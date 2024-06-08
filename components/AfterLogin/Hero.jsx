import React from 'react';
import { CUATE_PNG } from '../../constants/constants';

const Hero = () => {
  return (
    <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] md:min-h-[50vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mx-auto max-w-6xl">
        <div className="flex justify-center">
          <img className=" w-72 h-72 mt-5 md:w-96 md:h-96" src={CUATE_PNG} alt="Hero" />
        </div>
        <div className="text-center lg:text-left">
          <h2 className="text-5xl font-bold mb-6">Be a <span className="text-yellow-500">CLAMIO</span> Creator Now!</h2>
          <button className="bg-gray-300 font-semibold text-black py-3 px-6 rounded text-lg">START SELLING</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
