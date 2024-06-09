import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // lg
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // md
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 640, // sm
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // xs
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto my-8 px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <Slider {...settings}>
        <div className="p-2">
          <div className="bg-gray-200 p-4 rounded-lg text-center">Category</div>
        </div>
        <div className="p-2">
        <div className="bg-gray-200 p-4 rounded-lg text-center">Category</div>
        </div>
        <div className="p-2">
        <div className="bg-gray-200 p-4 rounded-lg text-center">Category</div>
        </div>
        <div className="p-2">
        <div className="bg-gray-200 p-4 rounded-lg text-center">Category</div>
        </div>
        <div className="p-2">
        <div className="bg-gray-200 p-4 rounded-lg text-center">Category</div>
        </div>
        {/* Add more items as needed */}
      </Slider>
    </div>
  );
};

export default Carousel;
