import React from "react";

const Details = () => {
  return (
    <div className='bg-purple py-16 mt-10'>
      <h1 className='text-3xl text-center mb-16 text-white text-ptsans'>
        Title 1
      </h1>
      <div className='flex justify-evenly items-center text-ptsans'>
        <div className='w-80 h-80 rounded-full border-2 border-dashed border-white text-white shadow-md mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-medium'>1 BN+</h1>
          <h4 className='font-medium text-3xl mt-6'>Daily Impressions</h4>
        </div>
        <div className='w-80 h-80 rounded-full bg-white text-purple shadow-md mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-medium'>$500K+</h1>
          <h4 className='font-medium text-3xl mt-6'>Paid</h4>
        </div>
        <div className='w-80 h-80 rounded-full bg-tomoto text-white shadow-md mx-auto flex flex-col justify-center items-center'>
          <h1 className='text-6xl font-medium'>8K+</h1>
          <h4 className='font-medium text-3xl mt-6'>Global Publishers</h4>
        </div>
      </div>
    </div>
  );
};

export default Details;
