import React from "react";
import facebook from "../../asstes/Images/facebook.png";
import insta from "../../asstes/Images/insta.png";
import youtube from "../../asstes/Images/youtube.png";

const Footer = () => {
  return (
    <div className='pt-8 pb-12 flex flex-col justify-center items-center'>
      <div className='container md:flex justify-around align-center py-3'>
        <div className='px-3 px-lg-0'>
          <div>
            <p className='text-purple text-2xl text-center pb-3'>
              We are social
            </p>
          </div>
          <div>
            <p className='uppercase text-2xl text-center my-6'>
              Follow us
            </p>
            <div className='flex items-center'>
              <img className='mx-2 cursor-pointer' src={insta} alt='' />
              <img className='cursor-pointer' src={facebook} alt='' />
              <img className='cursor-pointer' src={youtube} alt='' />
            </div>
          </div>
          <div className='uppercase font-extrabold text-3xl text-prototype text-center mt-10'>
            Logo
          </div>
        </div>
        <div className='px-3 px-lg-0'>
          <div>
            <p className='text-purple text-2xl pb-3'>Links</p>
          </div>
          <div className='flex flex-col justify-start items-start uppercase text-xl text-center font-bold'>
            <p className='my-3'>ADVERTISERS</p>
            <p className='my-3'>PUBLISHERS</p>
            <p className='my-3'>INFLUENCERS</p>
            <p className='my-3'>AD FORMATS</p>
          </div>
        </div>
        <div className='px-3 px-lg-0'>
          <div>
            <p className='text-purple text-2xl pb-3'>
              Documentation
            </p>
          </div>
          <div className='flex flex-col justify-start items-start uppercase text-xl text-center font-bold'>
            <p className='my-3'>TERMS & CONDITIONS</p>
            <p className='my-3'>PRIVACY POLICY</p>
            <p className='my-3'>CANCELLATION POLICY</p>
            <p className='my-3'>BLOG</p>
          </div>
        </div>
        <div className='px-3 px-lg-0'>
          <div>
            <p className='text-purple text-2xl pb-3'>Supports</p>
          </div>
          <div className='flex flex-col justify-start items-start uppercase text-xl text-center'>
            <p className='my-3'>FAQ</p>
            <p className='my-3'>MEDIA KIT</p>
            <p className='my-3'>CONTACT US</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
