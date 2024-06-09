import React from 'react';
import { EARN_POINT_PNG, REWARD_PNG, STAR1_PNG, STAR2_PNG, STAR3_PNG, signInImage } from '../../constants/constants';

const LevelUp = () => {
  return (
    <>
      <h2 className="text-2xl md:text-4xl text-center font-bold my-20">How to Level up and Earn Rewards</h2>
      <section className="flex justify-center items-center my-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 text-center place-content-center max-w-7xl mx-auto">
          <div className="flex flex-col items-center my-4 md:my-2">
            <img src={STAR1_PNG} alt="CLAMIO Debut" className="w-48 h-48 my-10 md:w-52 md:h-52" />
            <h3 className="text-xl font-bold text-center mt-12 md:mt-2">
              <span className="font-bold text-primary  mr-1">CLAMIO</span>Debut
            </h3>
            <ul className="text-left list-disc list-inside mt-4">
              <li>1 Sale/1 Referral</li>
            </ul>
          </div>
          <div className="flex flex-col items-center my-4 md:my-2">
            <img src={STAR2_PNG} alt="CLAMIO Star" className="w-48 h-48 my-10 md:w-52 md:h-52" />
            <h3 className="text-xl font-bold text-center mt-4 md:mt-2">
              <span className="font-bold text-primary my-5 mr-1">CLAMIO</span>Star
            </h3>
            <ul className="text-left list-disc list-inside mt-4">
              <li>100 Sales/25 Referrals</li>
              <li>Redeem your CLAMIO Coins</li>
            </ul>
          </div>
          <div className="flex flex-col items-center my-4 md:my-2">
            <img src={STAR3_PNG} alt="CLAMIO Boss" className="w-48 my-10 h-48md:w-52 md:h-52" />
            <h3 className="text-xl font-bold text-center mt-4 md:mt-2">
              <span className="font-bold text-primary my-5 mr-1">CLAMIO</span>Boss
            </h3>
            <ul className="text-left list-disc list-inside mt-4">
              <li>5000 Sales</li>
              <li>Redeem your CLAMIO Coins</li>
              <li>45% Discount on Transactional Charges</li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default LevelUp;
