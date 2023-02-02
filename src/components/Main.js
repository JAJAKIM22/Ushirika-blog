import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {posts} from './mapost'
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import ReadMoreReact from 'read-more-react';
function Main() {
  
  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
     
      <Divider/>
      {posts.map((post) => (
        <>
         <div style={{marginTop: '20px'}}>
         <Stack direction="row" spacing={2}>
        <Avatar sx={{ width: 24, height: 24 }} alt="Remy Sharp" src={post.avatar}/>
        <Typography>
        {post.name}
      </Typography>
      <Typography>
        {post.date}
      </Typography>
        </Stack>
        </div>
        <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
             <CardMedia
          component="img"
          height="100"
          image={post.image}
          alt="Nicola Sturgeon on a TED talk stage"
        />
       {/* <Typography>
              {post.body}
      </Typography> */}
      <ReadMoreReact text={post.body}
                min={80}
                ideal={500}
                max={1000}
                readMoreText="....."
                />
      <Divider/>
       
      </> 
      ))}
     
    </Grid>
  );
}


export default Main;