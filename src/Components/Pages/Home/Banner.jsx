import React from "react";

const Banner = () => {
  return (
    <div className='mx-12'>
      <div className='banner flex justify-between'>
        <div className='w-8/12'>
          <h2 className='text-3xl text-secondary mt-6 mb-12'>Here will be a Title</h2>
          <div className='w-full flex justify-start items-center'>
            <h4 className='font-medium text-2xl'>Here will be a text</h4>
          </div>
        </div>
        <div className='w-5/12 bg-white mr-8 flex justify-center items-center'>
          <h4 className='font-medium text-2xl'>Artwork for title 1</h4>
        </div>
      </div>
    </div>
  );
};

export default Banner;
