
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';



import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../style/post.css";
import Header from './Header';
import { Box } from '@mui/system';


const useStyles = makeStyles(theme => ({
  form: {
    display: 'center',
    flexDirection: 'column',
    '& > *': {
      marginTop: theme.spacing(10),
      marginLeft:  theme.spacing(20),
      marginRight:  theme.spacing(20)
    },
  },
  button: {
    marginTop: theme.spacing(10),
    margin: theme.spacing(18),
    width: theme.spacing(20)
  },
  message: {
    marginTop: theme.spacing(2),
    color: 'green',
  }
}));

function Post() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    
 
 
    
    function handleImageChange(event) {
      setImage(event.target.files[0]);
    }
   
    function handleSubmit(event) {
        const formData = {
            title: title,
            image: image,
            body: body
        };
        
        
        console.log(formData)
        event.preventDefault();
        setSubmitted(true);
        
        fetch('/api/signup', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
    
    });}
    

    return(
      <>
      <div></div>
     <Header/>
      <Box sx={{
       width: {xs:'80vh', sm: '70vh', md: '150vh'}, marginLeft: {xs:-18, sm: -18, md : 2}
      }} >
    <div className={classes.form}>
       <form onSubmit={handleSubmit}> 
       <TextField
                id="title"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
                fullWidth
            />
            <TextField
                id="description"
                label="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                required
                fullWidth
            />
         <input 
         style={{height: '5vh', color: 'blue', margin: '15px', fontSize: '40', }}
          type="file"
          accept="image/*"
          label="IMAGE"
          onChange={handleImageChange}
        />
       <ReactQuill  style={{height: '40vh'}} theme="snow" value={body} onChange={setBody} />
       
        <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                type="submit" 
                disabled={submitted}
            >
                POST BLOG
        </Button>
       </form>
       
    </div>
    </Box>
    
    
    
  </>
    )
}

export default Post;

