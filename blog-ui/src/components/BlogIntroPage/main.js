import React, { Component, useState, useEffect } from "react";
import Header from "./header";
import Footer from "./footer";
import BlogCard from "./blogCard";
import Masonry from "react-masonry-css";
import blogService from "../../api/service";

import { useNavigate, useSearchParams } from "react-router-dom";

const BlogContent = () => {
  let navigate = useNavigate();

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    blogService.getBlogs().then((response) => {
      setBlogs(response);
      setIsLoading(false);
    });
  }, []);

  return (
    <div className=" blog-info bg-cyan-100 w-full h-full">
      <Header />

      <div className=" mt-8 w-full flex flex-col items-center">
        <div className="max-w-6xl mx-8">
          <h1 className=" font-bold  text-center  pb-4 text-4xl border-b border-cyan-400">
            Introduction
          </h1>
          <p className=" text-lg mt-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>

          <h2 className=" font-bold text-center mt-20 pb-4 text-4xl border-b border-cyan-400">
            Blogs
          </h2>

          <Masonry
            breakpointCols={{ default: 3, 800: 2, 400: 1 }}
            className="my-masonry-grid"
            columnClassName="my-masonry-grid_column"
          >
            {isLoading
              ? null
              : blogs.map((blog) => (
                  <BlogCard key={blog._id} day={blog.day} blog={blog.blog} />
                ))}
          </Masonry>
        </div>
      </div>

      <div className="blog-btn m-16 px-32 py-10">
        <button
          type="button"
          className="bg-cyan-300 mt-2 px-4 py-2  rounded-full text-lg font-bold uppercase"
          onClick={() => {
            navigate("/blogadd");
          }}
        >
          Add New Blog{" "}
        </button>
      </div>

      <Footer />
    </div>
  );
};

export default BlogContent;
