import React from "react";

const SectionTitle = ({ title }) => {
  return (
    <div>
      <div className='w-full border-b border-dashed border-black relative'>
        <h1 className='absolute left-1/3 -top-4 ml-4 uppercase text-center text-3xl text-purple font-medium bg-lightGray px-8'>
          {title}
        </h1>
      </div>
    </div>
  );
};

export default SectionTitle;
