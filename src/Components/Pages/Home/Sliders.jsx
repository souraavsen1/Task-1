import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Sliders = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className='max-w-7xl mx-auto my-24'>
      <h1 className='text-ptsans text-3xl text-purple m-20 text-center'>
        Title 1
      </h1>
      <div className='relative'>
        <Slider {...settings}>
          <div>
            <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
              <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                  <h4 class='mb-8'>Title 1</h4>
                  <h4>Hello, Here will be a text</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
              <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                  <h4 class='mb-8'>Title 2</h4>
                  <h4>Hello here will be another text</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
              <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                  <h4 class='mb-8'>Title 2</h4>
                  <h4>Hello here will be another text</h4>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
                <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                  <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                  <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                    <h4 class='mb-8'>Title 4</h4>
                    <h4>Hello here will be another text</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
                <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                  <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                  <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                    <h4 class='mb-8'>Title 4</h4>
                    <h4>Hello here will be another text</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
                <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                  <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                  <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                    <h4 class='mb-8'>Title 4</h4>
                    <h4>Hello here will be another text</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className='mb-2 bg-white shadow-md shadow-gray-500 rounded-2xl p-2.5 mr-14'>
                <div class='flex justify-between items-center rounded-2xl p-2.5 border border-dashed border-tomoto'>
                  <div class='w-48 h-48 mr-10 bg-lightGray'></div>
                  <div class='text-purple font-medium text-xl mr-auto mb-auto py-4'>
                    <h4 class='mb-8'>Title 4</h4>
                    <h4>Hello here will be another text</h4>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default Sliders;
