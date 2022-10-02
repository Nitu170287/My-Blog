import React, { Component } from "react";
import { useNavigate } from "react-router-dom";

const BlogCard = (props) => {
  let navigate = useNavigate();

  return (
    //<div className="sm:w-1/3 ">

    <div
      key={props.key}
      className="bg-white  p-8 border-b-4 border-cyan-300 rounded-lg flex flex-col items-center sm:mx-2 "
    >
      <div className="mt-4 font-bold text-2xl">{props.day}</div>
      <div className="text-justify mt-2 text-grey-600 text-lg">
        {props.blog.substring(0, 100) + "...."}

        <div className="flex space-x-2 justify-center">
          <button
            onClick={() => {
              navigate(`/day/${props.day}`);
            }}
            type="button"
            data-mdb-ripple="true"
            data-mdb-ripple-color="light"
            className="inline-block px-6 py-3 mt-8 border text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          >
            Read more
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
