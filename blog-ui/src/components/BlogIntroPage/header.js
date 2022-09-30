import React, { Component } from "react";
import image1 from "../../images/image1.png";

const Header = () => {
  return (
    <header className=" bg-cyan-200 w-full h-1/2 px-4 py-16 border-b-4 border-cyan-300">
      <div className=" flex justify-left items-stretch mt-8 ml-20 ">
        <img className="w-56 h-40 border-8 border-cyan-400 " src={image1} />
      </div>
    </header>
  );
};

export default Header;
