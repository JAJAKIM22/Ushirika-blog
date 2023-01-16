import React, {useState, useEffect} from "react";

function Post() {
    const [title, setTitle] = useState('');
    const [image_link, setImage_link] = useState('');
    const [body, setBody] = useState('');
    const [submitted, setSubmitted] = useState(false);
    useEffect(() => {
            if(submitted) window.location.href = '/home';
          }, [submitted])

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
    <div class= "form" >
       <form onSubmit={handleSubmit}  class="newform" className="newform"> 
       <input value={title}
         onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
       <input value={image_link}
         onChange={(e) => setImage_link(e.target.value)} placeholder="Image" />
       <input value={body}
         onChange={(e) => setBody(e.target.value)} placeholder="Body" />
        <input type="submit" value="POST BLOG" />
       </form>
    </div>

    )
}

export default Post;