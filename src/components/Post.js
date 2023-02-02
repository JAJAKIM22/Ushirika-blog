
import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useEffect } from 'react';
import Grid from '@mui/material/Grid';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import "../style/post.css";
import AppTopBar from './Navbar'


const useStyles = makeStyles(theme => ({
  form: {
    display: 'center',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(20),
    },
  },
  button: {
    marginTop: theme.spacing(10),
    margin: theme.spacing(60),
    width: theme.spacing(30)
  },
  message: {
    marginTop: theme.spacing(2),
    color: 'green',
  }
}));

function Post() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [image, setImage] = useState(null);
    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    
 
 
    // useEffect(() => {
    //     if(submitted) window.location.href = '/home';
    // }, [submitted])
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
      <AppTopBar/>
      <Grid id = "lappy" container spacing={1} sx={{ mt: 3 }}>
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
    </Grid>
    
    
    {/* <Grid id = "phone"  sx={{ mt: 3 }}>
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
  </Grid> */}
  </>
    )
}

export default Post;

// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import TextField from '@material-ui/core/TextField';
// import Button from '@material-ui/core/Button';
// import ReactQuill from 'react-quill';
// import 'react-quill/dist/quill.snow.css';

// const useStyles = makeStyles(theme => ({
//   form: {
//     display: 'center',
//     flexDirection: 'column',
//     '& > *': {
//       margin: theme.spacing(20),
//     },
//   },
//   button: {
//     marginTop: theme.spacing(10),
//     margin: theme.spacing(60),
//   },
//   message: {
//     marginTop: theme.spacing(2),
//     color: 'green',
//   }
// }));

// function Post() {
//   const classes = useStyles();
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [image, setImage] = useState(null);

  // function handleImageChange(event) {
  //   setImage(event.target.files[0]);
  // }

//   function handleSubmit(event) {
//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('body', body);
//     formData.append('image', image);

//     event.preventDefault();
//     setSubmitted(true);

//     fetch('/api/signup', {
//       method: 'POST',
//       body: formData
//     });
//   }

//   return (
//     <div className={classes.form}>
//       <form onSubmit={handleSubmit}>
//         <TextField
//           id="title"
//           label="Title"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           required
//           fullWidth
//         />
        // <input
        //   type="file"
        //   accept="image/*"
        //   onChange={handleImageChange}
        // />
//         <ReactQuill
//           style={{ height: '40vh' }}
//           theme="snow"
//           value={body}
//           onChange={setBody}
//         />
//         <Button
//           variant="contained"
//           color="primary"
//           className={classes.button}
//           type="submit"
//         >
//           POST BLOG
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default Post;

