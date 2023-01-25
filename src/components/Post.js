// import React, {useState, } from "react";

// function Post() {
//     const [title, setTitle] = useState('');
//     const [image_link, setImage_link] = useState('');
//     const [body, setBody] = useState('');
//     const [setSubmitted] = useState(false);
//     // useEffect(() => {
//     //         if(submitted) window.location.href = '/home';
//     //       }, [submitted])

//     function handleSubmit(event) {
//         const formData = {
//             title: title,
//             image_link: image_link,
//             body: body
//         };
//         console.log(formData)
//         event.preventDefault();
//         setSubmitted(true);
        
//         fetch('/api/signup', {
//             method: 'POST',
//             headers: {
//             'Content-Type': 'application/json'
//             },
//             body: JSON.stringify(formData)
    
//     });}

//     return(
//     <div class= "form" >
//        <form onSubmit={handleSubmit}  class="newform" className="newform"> 
//        <input value={title}
//          onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
//        <input value={image_link}
//          onChange={(e) => setImage_link(e.target.value)} placeholder="Image" />
//        <input value={body}
//          onChange={(e) => setBody(e.target.value)} placeholder="Body" />
//         <input type="submit" value="POST BLOG" />
//        </form>
//     </div>

//     )
// }

// export default Post;

import React, { useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useEffect } from 'react';

import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';


const useStyles = makeStyles(theme => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
    color: 'green',
  }
}));

function Post() {
    const classes = useStyles();
    const [title, setTitle] = useState('');
    const [image_link, setImage_link] = useState('');
    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    
    
 
 
    // useEffect(() => {
    //     if(submitted) window.location.href = '/home';
    // }, [submitted])
   
    function handleSubmit(event) {
        const formData = {
            title: title,
            image_link: image_link,
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
                id="image_link"
                label="Image Link"
                value={image_link}
                onChange={(e) => setImage_link(e.target.value)}
                fullWidth
            />
       <ReactQuill theme="snow" value={body} onChange={setBody} />
       
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

    )
}

export default Post;


