import { Avatar, Box, ListItemText, Typography } from '@mui/material'
import React from 'react'
import AppScarfold from './AppScarfold'
import {posts} from './mapost'

function BlogPost() {
  return (
    <>
    <AppScarfold/>
    {posts.map((post) => (
        <>
    <Typography 
    variant='h1'
    sx={{fontSize:{xs:25,sm:30,md:45}, margin:5, marginBottom:3, width: {xs:'40vh', sm: '50vh', md: '100vh'}}}
    fontWeight = 'bold'
    >
       {post.title}
    </Typography>
    <Box sx={{display:'flex', alignItems:'center', marginBottom:3, margin:5, width: {xs:'40vh', sm: '50vh', md: '100vh'}}}>
        <Avatar sx={{width:'80px',height:'80px', marginRight:2}} src = {post.avatar}>
            
        </Avatar>
        <ListItemText primary = {post.name} secondary = {post.date} />
    </Box>
    <Typography 
    fontWeight = 'bold'
    color={'grey'}
    sx={{marginBottom:3, margin:5, width: {xs:'40vh', sm: '50vh', md: '100vh'}}}
    >
        {post.description}
    </Typography>
    <Typography
    fontWeight = 'bold'
    sx={{fontSize:{xs:18,sm:20,md:25}, margin:5, marginBottom:3, width: {xs:'40vh', sm: '50vh', md: '100vh'}}}
    >
       {post.title}
    </Typography>
    <Typography
    sx={{marginBottom:3, margin:5, width: {xs:'40vh', sm: '50vh', md: '100vh'}}}
    >
        {post.body}
    </Typography>
    </> 
     ))}
    </>
  )
}

export default BlogPost