import React, { Component } from "react";
import image1 from "../../images/image1.png";

const Header = () => {
  return (
    <header className=" bg-cyan-200 w-full h-32 px-4 py-12 border-b-4 border-cyan-300">
      <div className=" flex justify-left items-stretch mt-8 ml-20 ">
        <img className="w-30 h-28 border-8 border-cyan-400 " src={image1} />
      </div>
    </header>
  );
};

export default Header;
