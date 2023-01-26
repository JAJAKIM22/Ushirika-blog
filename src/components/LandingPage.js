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
import "../style/blog.css";
import SolidGameCardDemo from './SolidGameCardDemo';


export default function LandingPage() {
  return (
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
    </div>
  );
}