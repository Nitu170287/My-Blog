import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import blogService from "../../api/service";

const BlogPostDayWise = (props) => {
  const params = useParams();
  const [dayBlog, setDayBlog] = useState("");
  useEffect(() => {
    blogService.getDayBlog(params.day).then((blog) => {
      setDayBlog(blog[0].blog);
    });
  }, "");

  return (
    <div>
      {params.day}
      <hr />
      {dayBlog}
    </div>
  );
};
export default BlogPostDayWise;
