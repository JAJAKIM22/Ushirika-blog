import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

function Sidebar() {
  

  return (
    <Grid item xs={8} md={4}>
      <Paper elevation={0} sx={{ p: 2, bgcolor: 'smoke', height: '50vh'}}>
        <Typography variant="h6" gutterBottom>
          <h5>Blog Topics</h5>
        </Typography>
         <Button variant="outlined">Counselling</Button> 
         <Button style={{ margin: '8px'}}variant="outlined">Programming</Button> 
         <Button style={{ margin: '8px'}}variant="outlined" >
        Technology
      </Button>
      <Button style={{ margin: '8px'}}variant="outlined" >
        Gender issues
      </Button>
      <Button style={{ margin: '5px'}}variant="outlined" >
        Church
      </Button>
      </Paper>
      
    </Grid>
  );
}



export default Sidebar;