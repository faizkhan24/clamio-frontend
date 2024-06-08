import React from 'react';
import { BOY_PNG, BRO_PNG } from '../../constants/constants';

const RewardDetails = () => {
  return (
    <section className="text-center mb-8">
      <h2 className="md:text-4xl text-2xl font-bold my-10">Getting Reward is Easy</h2>

      {/* Grid for larger screens */}
      <div className="hidden md:grid grid-cols-5 gap-2 max-w-7xl mx-auto">
        <p className='font-semibold underline'>Category</p>
        <p className='font-semibold underline'>Category</p>
        <p className='font-semibold underline'>Category</p>
        <p className='font-semibold underline'>Category</p>
        <p className='font-semibold underline'>Category</p>
      </div>

      {/* Select box for mobile screens */}
      <div className="block md:hidden flex justify-start">
        <select className="w-[180px] mx-5 p-2 border border-gray-300 rounded">
          <option value="" disabled selected>Select Category</option>
          <option className='bg-primary' value="category1">Category 1</option>
          <option  className='bg-primary'  value="category2">Category 2</option>
          <option className='bg-primary'  value="category3">Category 3</option>
          <option className='bg-primary'  value="category4">Category 4</option>
          <option className='bg-primary'  value="category5">Category 5</option>
        </select>
      </div>

      <div className="flex flex-col gap-4 my-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Refer to Creators</h3>
            <p className="max-w-lg my-3 md:text-lg mx-5 md:mx-0">On every successful referral you will earn 500 CLAMIO Reward Coins. Every 100 coin = Rs. 1</p>
          </div>
          <img src={BOY_PNG} alt="Refer Creators" className="max-w-xs h-auto" />
        </div>
        <div className="flex flex-col md:flex-row-reverse items-center justify-center gap-2 md:gap-4">
          <div className="text-center md:text-left">
            <h3 className="text-xl font-bold">Sell 100 Products</h3>
            <p className="md:max-w-lg my-3 md:text-lg mx-5 md:mx-0">On every successful sale of 100 Product you will earn 10,000 CLAMIO Reward Coins. Every 100 coin = Rs. 1</p>
          </div>
          <img src={BRO_PNG} alt="Sell Products" className="md:max-w-md h-auto" />
        </div>
      </div>
    </section>
  );
};

export default RewardDetails;
