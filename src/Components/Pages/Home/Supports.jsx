import React from "react";
import speaker from "../../../asstes/Images/speaker.png";
import message from "../../../asstes/Images/message.png";
import human from "../../../asstes/Images/human_listen.png";
import SectionTitle from "../../Shared/SectionTitle";

const Supports = () => {
  return (
    <div className='py-16'>
      <SectionTitle title={"Available for everyone"} />
      <div>
        <h4 className='text-xl font-medium text-center my-6'>
          Here will be a text
        </h4>
      </div>
      <div className='flex justify-evenly items-center mt-24'>
        <div>
          <img
            className='py-8 px-6 rounded-full bg-white shadow-md mx-auto'
            src={speaker}
            alt=''
          />
          <h4 className='text-center text-xl font-medium mt-6'>Text 1</h4>
          <div>
            <button className='py-2 px-20 rounded-full text-xl bg-purple text-white mx-auto mt-12'>
              Hello 1
            </button>
          </div>
        </div>

        <div>
          <img
            className='py-8 px-6 rounded-full bg-white shadow-md mx-auto'
            src={message}
            alt=''
          />
          <h4 className='text-center text-xl font-medium mt-6'>Text 2</h4>
          <button className='py-2 px-20 rounded-full text-xl bg-purple text-white mx-auto mt-12'>
            Hello 2
          </button>
        </div>

        <div>
          <img
            className='py-8 px-6 rounded-full bg-white shadow-md mx-auto'
            src={human}
            alt=''
          />
          <h4 className='text-center text-xl font-medium mt-6'>Text 3</h4>
          <button className='py-2 px-20 rounded-full text-xl bg-purple text-white mx-auto mt-12'>
            Hello 3
          </button>
        </div>
      </div>
    </div>
  );
};

export default Supports;
