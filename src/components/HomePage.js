import React from "react";
import AppTopBar from './Navbar'
import Blog from './Blog';
import "../style/blog.css";






export default function Home() {


return(
    <div>
  <AppTopBar/>
    <div id = "blog">
    <Blog/>
    </div>
    </div>
    
    
)

}