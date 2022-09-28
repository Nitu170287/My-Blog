import React, { Component } from "react";
import Header from "./top";

class BlogContent extends Component{
    render(){
        return(
        
<>
<Header/>
<div className=" blog-info bg-green-100 w-full h-full">

        <div className=' m-16 py-16' >
        <h1 className=' blog-heading w-full h-full text-center pb-8 text-5xl'>My Blog</h1>
          <p className=' blog-content bg-green-200 p-8 text-left m-3' >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
          ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu 
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt 
          mollit anim id est laborum.
          </p>
        </div>
          
          <div className='blog-btn m-16 py-16'>
          
            <button className='bg-green-300 px-24 py-4 mt-16  rounded-lg border-l-2 text-2xl font-normal'>Add New Blog</button>
            </div>
      </div>

      
</>

        )
    }
}

export default BlogContent