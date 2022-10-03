import "./App.css";
import React, { Component } from "react";

import Header from "./components/BlogIntroPage/main";
import BlogContent from "./components/BlogIntroPage/main";
import BlogAdd from "./components/blogPost/blogAdd";
import BlogPostDayWise from "./components/blogPost/blogPostDayWise";
import { BrowserRouter, Routes, Route, Link, NavLink } from "react-router-dom";

const App = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogContent />}></Route>
        <Route path="/blogadd" element={<BlogAdd />}></Route>
        <Route
          path="/day/:day/:type"
          element={<BlogPostDayWise {...props} />}
        ></Route>
        <Route path="*" element={<>Sorry , Nothing found</>}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
