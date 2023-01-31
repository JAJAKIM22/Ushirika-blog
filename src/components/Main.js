import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import {posts} from './mapost'
import CardMedia from '@mui/material/CardMedia';

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
      
      
      {posts.map((post) => (
        <>
        <Typography variant="h3" gutterBottom>
        {post.title}
      </Typography>
             <CardMedia
          component="img"
          height="100"
          image={post.image}
          alt="Nicola Sturgeon on a TED talk stage"
        />
       <Typography>
              {post.body}
      </Typography>
      <Divider/>
       
      </> 
      ))}
    </Grid>
  );
}


export default Main;