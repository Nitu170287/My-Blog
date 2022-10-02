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
    <div className="bg-cyan-200  flex justify-center h-screen w-full ">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <h2 className="block w-full text-center text-gray-800 text-2xl font-bold mb-6 ">
          Your Blog
        </h2>

        <div className="flex flex-col mb-4">
          <input
            className="border w-full  px-3 py-2 mt-8 text-gray-900"
            name="dayInput"
            value={dayInput}
            onChange={handleChange}
            placeholder="Enter day"
          />
        </div>

        <div className="flex flex-col mb-4">
          <textarea
            className="border w-full px-3 py2 text-gray-900 mt-20"
            rows="10"
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
            className="inline-block px-6 py-3 mt-8 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
            onClick={handleAddBlog}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
};

export default BlogAdd;
