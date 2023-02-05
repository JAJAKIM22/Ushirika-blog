import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";
import BlogCard from './BlogCardDemo';
import Grid from '@mui/material/Grid';
import "../style/blog.css";
import SolidGameCardDemo from './SolidGameCardDemo';
import Sidebar from './Sidebar';
import FeedsBlogPostListItem from './FeedsBlog'


export default function LandingPage() {
  return (
    // <div>
    //   <div>
    
    // </div>
    // <div id = "card">
    //  <BlogCard/> 
    // </div>
    // <div id = "book">
    // <SolidGameCardDemo/>
    //  </div>
    
    //  {/* <Grid container spacing={5} sx={{ mt: 3 }}>
    //          <Main /> 
    //          <Sidebar />
    //       </Grid> */}
        //   <main>
          
        //   <Grid container spacing={3} sx={{ mt: 2 }}>
        //     <div style={{width: "120vh", marginLeft: '60px'}}>
        //      <Main /> 
        //      </div>
        //      <Sidebar/>
            
            
        //   </Grid>
        // </main>
    //  </div>
    <div>
      <div>
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
          >
            <Avatar src="https://imgv3.fotor.com/images/blog-cover-image/10-profile-picture-ideas-to-make-you-stand-out.jpg"  variant="square" />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Welcome to Ushirika
          </Typography>
          <Button color="inherit"><Link className="nav-link"  to="/signup">Sign Up</Link></Button>
          <Button color="inherit"><Link className="nav-link"  to="/login">Login</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
    <div id = "card">
     <BlogCard/> 
    </div>
    <div id = "book">
    <SolidGameCardDemo/>
     </div>
     <main>
          
          <Grid container spacing={3} sx={{ mt: 2 }}>
            <div style={{width: "120vh", marginLeft: '50px'}}>
             <FeedsBlogPostListItem /> 
             </div>
             <Sidebar/>
            
            
          </Grid>
        </main>
     </div>
    
  );
}