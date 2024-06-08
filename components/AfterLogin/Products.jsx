import React from 'react';
import { STAR_PNG, products } from '../../constants/constants';

const Products = () => {
  return (
    <section className="p-4 sm:p-8">
      {/* Centered and responsive image */}
      <div className="flex justify-center">
        <img className="max-w-full h-auto" src={STAR_PNG} alt="Star" />
      </div>
      <h3 className="text-3xl font-bold mb-4 text-center">Top Digital Products</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-7xl  mx-auto my-10">
        {products.map((product, index) => (
          <div key={index} className="border py-8 px-7 flex flex-col items-center">
            <h4 className="font-bold mb-2 text-xl self-start py-3">{product.name}</h4>
            <p className='text-lg'>{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;
