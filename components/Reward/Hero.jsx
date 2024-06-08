import React from 'react';
import { CUATE_PNG, GOLD_SACK } from '../../constants/constants';

const Hero = () => {
  return (
    <section className="bg-secondary text-white p-4 sm:p-8 min-h-[60vh] flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center mx-auto max-w-6xl">
        <div className="text-center lg:text-left">
          <h2 className="text-5xl  mb-6"><span className="text-yellow-500 font-bold pr-4">CLAMIO</span>Reward Program</h2>
          <p className="my-5">Refer CLAMIO to fellow creators or sell 100 Digital Products through CLAMIO, & </p>
          <p className='text-3xl font-bold mb-5 text-primary'>
            earn Rs. 50000*
            </p> 

          <button className="bg-gray-300 font-semibold text-black py-3 px-20 rounded text-lg my-5">VIEW DASHBOARD</button>
        </div>
        <div className="flex justify-center">
          <img className="md:w-[35rem] md:h-[35rem]" src={GOLD_SACK} alt="Hero" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
