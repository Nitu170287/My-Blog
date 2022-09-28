import React, { Component } from "react";
import imageTop from "../../images/imageTop.jpg"


class Header extends Component {
constructor(){
  super()
}

    render(){
    return(
        <div>
        <header className=" realtive   ">
        <div className=' absolute  w-full h-full text-center pt-80 pl-64 text-7xl'>
          <h1>Welcome To My Blog</h1>
        </div>
          <img className='w-screen h-screen' src={imageTop} alt="top page" />
      </header>
      </div>
    )
    }
}

export default Header;
