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

import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
// import { useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';


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
    
  const editorRef = useRef(null);
 
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
       
            <>
      <Editor
        apiKey='h1ubqmm0ltaw6b3g8hx88zabu58wrd50talxaac2pv9fat1l'
        onInit={(evt, editor) => editorRef.current = editor}
        initialValue="<p>This is the initial content of the editor.</p>"
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist', 'autolink', 'lists', 'link', 'image', 'charmap', 'preview',
            'anchor', 'searchreplace', 'visualblocks', 'code', 'fullscreen',
            'insertdatetime', 'media', 'table', 'code', 'help', 'wordcount'
          ],
          toolbar: 'undo redo | blocks | ' +
            'bold italic forecolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
        value={body}
        onChange={() => setBody(editorRef.current.getContent())}
      />
      
    </>

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


// import React, { useRef } from 'react';
// import { Editor } from '@tinymce/tinymce-react';

// export default function Post() {
  // const editorRef = useRef(null);
  // const log = () => {
  //   if (editorRef.current) {
  //     console.log(editorRef.current.getContent());
  //   }
  // };
//   return (
    // <>
    //   <Editor
    //     apiKey='h1ubqmm0ltaw6b3g8hx88zabu58wrd50talxaac2pv9fat1l'
        // onInit={(evt, editor) => editorRef.current = editor}
        // initialValue="<p>This is the initial content of the editor.</p>"
    //     init={{
    //       height: 500,
    //       menubar: false,
    //       plugins: [
    //         'advlist autolink lists link image charmap print preview anchor',
    //         'searchreplace visualblocks code fullscreen',
    //         'insertdatetime media table paste code help wordcount'
    //       ],
    //       toolbar: 'undo redo | formatselect | ' +
    //       'bold italic backcolor | alignleft aligncenter ' +
    //       'alignright alignjustify | bullist numlist outdent indent | ' +
    //       'removeformat | help',
    //       content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
    //     }}
    //   />
    //   <button onClick={log}>Log editor content</button>
    // </>
//   );
// }
