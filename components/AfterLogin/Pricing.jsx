import React from 'react';

const Pricing = () => {
  return (
    <section className="p-4 sm:p-8 text-center">
      <h3 className="text-3xl font-bold mb-4">Take home 100% of your Revenue</h3>
      <p className="mb-8">We charge 12.5% on each successful transaction</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 justify-items-center max-w-5xl mx-auto">
        <div className="border-2 border-gray-300 p-4 w-full max-w-xs">
          <h4 className="font-bold">You</h4>
          <hr className="my-4" />
          <p>You will be charged 12.5%</p>
          <hr className="my-4" />
          <p className="mt-2">Example:</p>
          <p>Product price: Rs.100</p>
          <p>Customer pay: Rs.100</p>
          <hr className="my-4" />
          <p>You earn: Rs.87.5</p>
        </div>
        <div className="border-2 border-gray-300 p-4 w-full max-w-xs">
          <h4 className="font-bold">Your Customers</h4>
          <hr className="my-4" />
          <p>Customers will be charged 12.5%</p>
          <hr className="my-4" />
          <p className="mt-2">Example:</p>
          <p>Product price: Rs.100</p>
          <p>Customer pay: Rs.112.5</p>
          <hr className="my-4" />
          <p>You earn: Rs.100</p>
        </div>
      </div>
      <button className="mt-8 bg-primary font-semibold text-black   py-3 px-6 rounded md:text-lg w-56 md:w-2/3 lg:w-96 mx-auto">START SELLING</button>
    </section>
  );
}

export default Pricing;
