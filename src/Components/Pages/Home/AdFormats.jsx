import React from "react";
import Button from "../../Shared/Button";
import Icons from "../../Shared/Icons";
import SectionTitle from "../../Shared/SectionTitle";

const AdFormats = () => {
  return (
    <div className='py-16'>
      <div>
        <SectionTitle title={"VERSATILE AD FORMATS"} />
      </div>
      <div className='py-8 flex justify-evenly'>
        <Button text='POP-UNDER' bgcolor='bg-tomoto' color='text-white' />
        <Button text='BANNER AD' bgcolor='bg-primary' color='text-black' />
        <Button text='NATIVE' bgcolor='bg-primary' color='text-black' />
        <Button text='SKIM' bgcolor='bg-primary' color='text-black' />
      </div>
      <div className='mt-10'>
        <div className='banner mx-20 flex justify-between'>
          <div className='w-5/12 bg-secondary flex justify-center items-center'>
            <div className='text-white text-2xl'>
              <h4 className='text-center font-medium '>Artwork for title 1</h4>
              <h4 className='text-center mt-10'>
                Explanation graphics of ad format
              </h4>{" "}
              <h4 className='text-center mt-4'>(Image will be changed)</h4>
            </div>
          </div>
          <div className='w-7/12 ml-16 flex flex-col justify-between'>
            <div className='w-full flex flex-col justify-start'>
              <h2 className='text-3xl text-tomoto mt-6 mb-12'>POP-UNDER</h2>
              <h4 className='font-medium text-2xl text-ptsans'>
                This is one of the most popular ads. After user&apos;s click,
                this ad opens landing page in behind. So, the user experience is
                not hampered much.
              </h4>
            </div>
            <div className='text-secondary text-xl font-medium flex items-center'>
              <h4>Learn more</h4>
              <Icons.Share className='w-4 ml-2 mt-1' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdFormats;
