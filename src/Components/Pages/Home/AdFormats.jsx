import React, { useState } from "react";
import Button from "../../Shared/Button";
import Icons from "../../Shared/Icons";
import SectionTitle from "../../Shared/SectionTitle";

const AdFormats = () => {
  // const [active, setActive] = useState("");
  const [data, setData] = useState(adData[0]);

  const handleActive = (id) => {
    setData(adData[id]);
  };

  return (
    <div className='py-16'>
      <div>
        <SectionTitle title={"VERSATILE AD FORMATS"} />
      </div>
      <div className='py-8 flex justify-evenly'>
        {adData.map((btn, index) => (
          <Button
            key={btn.key}
            text={btn.title}
            bgcolor={data.key === btn.key ? "bg-tomoto" : "bg-lightGray"}
            color={data.key === btn.key ? "text-white" : "text-black"}
            id={index}
            handleActive={handleActive}
          />
        ))}
      </div>
      <div className='mt-10'>
        <div className='banner mx-20 flex justify-between'>
          <div className='w-5/12 bg-purple flex justify-center items-center'>
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
              <h2 className='text-3xl text-tomoto mt-6 mb-12'>{data.title}</h2>
              <div className='font-medium text-2xl text-ptsans'>
                <React.Fragment>{data.details}</React.Fragment>
              </div>
            </div>
            <div className='text-purple text-xl font-medium flex items-center cursor-pointer'>
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

const adData = [
  {
    key: "pop_under",
    title: "POP-UNDER",
    details: `This is one of the most popular ads. After user's click, this ad opens landing page in behind. So, the user experience is not hampered much.`,
  },
  {
    key: "banner_ad",
    title: "BANNER AD",
    details:
      "Choose between the available banner formats. Highly effective ad for visibility",
  },
  {
    key: "native",
    title: "NATIVE",
    details: [
      "Ad format with the image and the title, that perfectly fits into the content of the site.",
      <br />,
      "Native ads are placed in the most visible areas of the page and, thus, this format shows good results and the level of interaction.",
    ],
  },
  {
    key: "skim",
    title: "SKIM",
    details: [
      'SKIM" is a link that a publisher inserts on a specific site element, and after clicking on it, an advertisement appears to the user.',
      <br />,
      "SKIM gives 100% control of your sold traffic amount, higher CR to advertisers and CPM rates to publishers.",
    ],
  },
];
