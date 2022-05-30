import React from "react";
import AdFormats from "./AdFormats";
import Banner from "./Banner";
import Details from "./Details";
import Supports from "./Supports";

const Home = () => {
  return (
    <div className='py-4'>
      <Banner />
      <Supports />
      <AdFormats />
      <Details />
    </div>
  );
};

export default Home;
