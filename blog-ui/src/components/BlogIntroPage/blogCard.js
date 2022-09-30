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
        {props.blog}

        <button
          onClick={() => {
            navigate(`/day/${props.day}`);
          }}
        >
          Read more
        </button>
      </div>
    </div>
    // </div>
  );
};

export default BlogCard;
