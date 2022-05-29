import React from "react";

const NavSection = () => {
  return (
    <div className='w-full py-3'>
      <div className='flex justify-between items-center mx-8 py-4'>
        <div className='uppercase font-extrabold text-3xl text-prototype'>
          Logo
        </div>
        <div className='uppercase flex items-center text-sm font-medium mr-10'>
          <p className='text-green-600 cursor-pointer'>bn</p>
          <p className='mx-2'>/</p>
          <p className='cursor-pointer'>en</p>
        </div>
      </div>
      {/* NavItems */}
      <div className='flex justify-between items-center mx-10'>
        <div className='w-9/12 flex justify-between items-center uppercase text-secondary text-opacity-80 font-medium'>
          <p className='text-tomoto cursor-pointer'>Home</p>
          <p className='cursor-pointer'>Advertisers</p>
          <p className='cursor-pointer'>Publishers</p>
          <p className='cursor-pointer'>Influencers</p>
          <p className='cursor-pointer'>Ad Formats</p>
          <p className='cursor-pointer'>Blog</p>
          <p className='cursor-pointer'>Contact Us</p>
        </div>
        <div className='w-2/12 flex justify-evenly items-center bg-white rounded-full p-1.5 shadow-md shadow-gray-400'>
          <button className='uppercase px-5 py-2 rounded-full font-medium'>
            Login
          </button>
          <button className='uppercase px-6 py-2 bg-tomoto text-white rounded-full shadow-md bg-opacity-90'>
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
};

export default NavSection;
