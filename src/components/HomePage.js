import React from "react";
import AppTopBar from './Navbar'
import AppScarfold from './AppScarfold'
import Blog from './Blog';
import "../style/blog.css";






export default function Home() {


return(
    <div>
  <AppScarfold/>
    <div id = "blog">
    <Blog/>
    </div>
    
    </div>
    
    
)

}