import React from 'react';

const FAQ = () => {
  return (
    <>
    
      <h3 className="text-3xl font-bold mx-7 mt-5  md:mx-40 ">FAQs</h3> {/* Added self-start for aligning the title to the start (left) */}
      <section className="p-8 grid place-items-center"> {/* Added grid and place-items-center for centering */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-20 ">
        <div>
          <h4 className="font-bold text-xl text-blue-950 my-5">Can I add a wide range of products?</h4>
          <p className='text-lg'>Absolutely! Our platform allows you to easily add a wide range of products from your catalog.</p>
        </div>
        <div>
          <h4 className="font-bold text-xl text-blue-950 my-5">What kind of digital products can I sell?</h4>
          <p className='text-lg'>You can sell a wide range of digital products like ebooks, software, videos, music, and more.</p>
        </div>
      </div>
    </section>
    </>
    
  );
}

export default FAQ;
