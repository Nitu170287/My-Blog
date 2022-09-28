
import './App.css';
import React,{Component} from "react"

import Header from './components/BlogIntroPage/top';
import BlogContent from './components/BlogIntroPage/bottom';
import BlogAdd from './components/blogPost/blogAdd';
import {BrowserRouter, Routes, Route, Link ,NavLink} from "react-router-dom"

class App extends Component {
  

  render(){
  return (
    <div>
      
      
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogContent/>}></Route>
        <Route path="blogadd" element={<BlogAdd/>}></Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}
}

export default App;
