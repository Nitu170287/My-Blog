import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import blogService from "../../api/service";

const BlogAdd = () => {
  const [blogInput, setBlogInput] = useState([]);
  const [dayInput, setDayInput] = useState([]);
  let navigate = useNavigate();

  const handleChange = (event) => {
    if (event.target.name === "blogInput") {
      setBlogInput(event.target.value);
    } else {
      setDayInput(event.target.value);
    }
  };

  const handleAddBlog = () => {
    blogService.addBlog(dayInput, blogInput).then((data) => {
      navigate("/");
    });
  };

  return (
    <div className="bg-cyan-200 w-screen h-screen">
      <div className=" flex justify-center">
        <input
          className=""
          name="dayInput"
          value={dayInput}
          onChange={handleChange}
          placeholder="Enter day"
        ></input>
        <textarea
          className="
                  form-control
                  block
                  w-1/2
                  h-64
                  px-4
                  py-2
                  items-center
                  mt-48
                  text-base
                  font-normal
                  text-gray-700
                  bg-white bg-clip-padding
                  border border-solid border-gray-300
                  rounded
                  transition
                  ease-in-out
                  m-0
                  focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                "
          placeholder="Your blog"
          onChange={handleChange}
          type="text"
          name="blogInput"
          value={blogInput}
        ></textarea>
      </div>

      <div className="flex space-x-2 justify-center mt-4">
        <button
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
          onClick={handleAddBlog}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default BlogAdd;
