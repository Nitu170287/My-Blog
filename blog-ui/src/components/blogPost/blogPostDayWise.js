import React, { useState, useEffect } from "react";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import blogService from "../../api/service";

const BlogPostDayWise = (props) => {
  const params = useParams();
  const [dayBlog, setDayBlog] = useState("");
  let navigate = useNavigate();

  useEffect(() => {
    blogService.getDayBlog(params.day).then((blog) => {
      setDayBlog(blog[0].blog);
    });
  }, "");

  return (
    <div className="bg-cyan-200  flex justify-center h-full w-full scroll-smooth ">
      <div className="w-1/2 bg-white rounded shadow-2xl p-8 m-4">
        <div className="mt-6 flex justify-center font-bold text-2xl">
          {params.day}
        </div>
        <hr className="mt-4" />

        <div className="mt-6">{dayBlog}</div>

        <button
          onClick={() => {
            navigate("/");
          }}
          type="button"
          data-mdb-ripple="true"
          data-mdb-ripple-color="light"
          className="inline-block px-6 py-3 mt-64 border text-gray-700 font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:text-white hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Back to home
        </button>
      </div>
    </div>
  );
};
export default BlogPostDayWise;
