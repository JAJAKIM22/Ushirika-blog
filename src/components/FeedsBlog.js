import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, IconButton, Typography } from '@mui/material'
import React from 'react'
import { Bookmark, Share } from '@mui/icons-material'
import { MoreVert } from '@mui/icons-material'
import { Link } from 'react-router-dom'
import {posts} from './mapost'

const FeedsBlogPostListItem = () => {
  return (
    <>
    {posts.map((post) => (
        <>
    <Card sx={{width: {xs:'40vh',sm:'50vh',md:'80vh'}, margin: {xs:'40px'}}}elevation={0} square>
        <CardHeader
            avatar={
            <Avatar src = {post.avatar}>
                
            </Avatar>
            }
            action={
            <IconButton aria-label="settings">
                <MoreVert />
            </IconButton>
            }
            title={post.name}
            subheader={post.date}
            sx = {{paddingLeft:0}}
        />
        <Link to={'../blog'} style={{textDecoration:'none', color:'inherit'}}>
        <CardContent sx = {{paddingLeft:0}}>
            <Typography
            variant = "h4"
            sx={{fontSize:{xs:18,sm:22,md:25}, marginBottom:1}}
            fontWeight = 'bold'
            >
                {post.title}
            </Typography>
            <Typography sx ={{display:{xs:'none',sm:'flex'}}}>
                {post.body}
            </Typography>
        </CardContent>
        </Link>
        <CardActions  sx = {{paddingLeft:0}}>
            <IconButton >
                <Bookmark />
            </IconButton>
            <IconButton >
                <Share />
            </IconButton>
        </CardActions>
        <Divider />
    </Card>
    </> 
     ))}
    </>
  )
}

export default FeedsBlogPostListItem