import React from "react";
import AdFormats from "./AdFormats";
import Banner from "./Banner";
import Supports from "./Supports";

const Home = () => {
  return (
    <div className='py-4'>
      <Banner />
      <Supports />
      <AdFormats />
      <AdFormats />
      <AdFormats />
      <AdFormats />
    </div>
  );
};

export default Home;
