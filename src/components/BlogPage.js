// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Container, Box, Typography, Button, CircularProgress, Avatar } from '@material-ui/core';
// // import { grey } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     padding: theme.spacing(3)
//   },
//   blogContainer: {
//     marginBottom: theme.spacing(3)
//   },
//   blogTitle: {
//     fontWeight: 'bold'
//   },
//   pagination: {
//     display: 'flex',
//     justifyContent: 'space-between',
//     alignItems: 'center'
//   },
//   loading: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '50vh'
//   },
//   error: {
//     color: theme.palette.error.main,
//     textAlign: 'center'
//   },
//   profileAvatar: {
//     width: theme.spacing(7),
//     height: theme.spacing(7),
//     marginRight: theme.spacing(2)
//   }
// }));

// const BlogList = () => {
//   const classes = useStyles();
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [currentPage, setCurrentPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     setLoading(true);
//     setError(null);
//     fetch(`https://my-api.com/blogs?page=${currentPage}`)
//       .then(response => response.json())
//       .then(data => {
//         setBlogs(data.blogs);
//         setTotalPages(data.totalPages);
//       })
//       .catch(error => {
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, [currentPage]);

//   if (loading) {
//     return (
//       <Container className={classes.loading}>
//         <CircularProgress />
//       </Container>
//     );
//   }
//   if (error) {
//     return (
//       <Container className={classes.error}>
//         <Typography variant="h6">{error.message}</Typography>
//       </Container>
//     );
//   }

//   return (
//     <Container className={classes.root}>
//       {blogs.map(blog => (
//         <Box key={blog.id} className={classes.blogContainer}>
//              <Avatar 
//             className={classes.profileAvatar} 
//             src={blog.user.profile_picture} 
//             alt={blog.user.name} 
//           />
//           <Typography variant="h5" className={classes.blogTitle}>{blog.title}</Typography>
//           <Typography variant="body1" >{blog.content}</Typography>
//         </Box>
//       ))}
//       <Box className={classes.pagination}>
//         <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
//           Previous Page
//         </Button>
//         <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
//           Next Page
//         </Button>
//     </Box>
//     </Container>
//   )}

// export default BlogList;

// import React, { useEffect, useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Grid from '@material-ui/core/Grid';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardContent from '@material-ui/core/CardContent';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import IconButton from '@material-ui/core/IconButton';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import { red } from '@material-ui/core/colors';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//     margin: theme.spacing(2),
//   },
//   card: {
//     width: '100%',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
// }));

// function Blog() {
//   const classes = useStyles();
//   const [blogs, setBlogs] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState('');

//   useEffect(() => {
//     const fetchData = async () => {
//       setLoading(true);
//       try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/posts');
//         const data = await res.json();
//         setBlogs(data);
//       } catch (err) {
//         setError(err.message);
//       }
//       setLoading(false);
//     };
//     fetchData();
//   }, []);

//   const handleLike = (id) => {
//     const updatedBlogs = blogs.map((blog) => {
//       if (blog.id === id) {
//         return {
//           ...blog,
//           likes: blog.likes + 1,
//         };
//       }
//       return blog;
//     });
//     setBlogs(updatedBlogs);
//   };

//   const handleFollow = (id) => {
//     const updatedBlogs = blogs.map((blog) => {
//       if (blog.id === id) {
//         return {
//           ...blog,
//           following: !blog.following,
//         };
//       }
//       return blog;
//     });
//     setBlogs(updatedBlogs);
//   };

//   const handleSort = (field) => {
//     const sortedBlogs = blogs.sort((a, b) => {
//       if (a[field] < b[field]) {
//         return -1;
//       }
//       if (a[field] > b[field]) {
//         return 1;
//       }
//       return 0;
//     });
//     setBlogs(sortedBlogs);
//   };

//   const handleFilter = (field, value ) => {
//     const filteredBlogs = blogs.filter((blog) => blog[field] === value);
//     setBlogs(filteredBlogs);
//     };

//     const handlePagination = (page) => {
//       // logic to handle pagination
//       };
      
//       if (loading) {
//       return <p>Loading...</p>;
//       }
      
//       if (error) {
//       return <p>Error: {error}</p>;
//       }
      
//       return (
//       <div className={classes.root}>
//       <Grid container spacing={3}>
//       {blogs.map((blog) => (
//       <Grid item xs={12} sm={6} key={blog.id}>
//       <Card className={classes.card}>
//       <CardHeader
// avatar={
// <Avatar aria-label="recipe" className={classes.avatar}>
// {blog.author[0]}
// </Avatar>
// }
// action={
// <IconButton aria-label="add to favorites" onClick={() => handleLike(blog.id)}>
// <FavoriteIcon color={blog.likes > 0 ? 'secondary' : 'inherit'} />
// </IconButton>
// }
// title={blog.title}
// subheader={`Author: ${blog.author}`}
// />
// <CardContent>
// <Typography variant="body2" color="textSecondary" component="p">
// {blog.content}
// </Typography>
// </CardContent>
// </Card>
// </Grid>
// ))}
// </Grid>
// </div>
// );
// }

// export default Blog;


import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteIcon from '@material-ui/icons/Favorite';
import SortIcon from '@material-ui/icons/Sort';
import FilterListIcon from '@material-ui/icons/FilterList';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';
import { red } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing(2),
  },
  card: {
    width: '100%',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

function Blog() {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [ setSortField] = useState('id');
  const [setFilterField] = useState('author');
  const [ setFilterValue] = useState('');

  useEffect(() => {
    setLoading(true);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const handleLike = (id) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          likes: blog.likes + 1,
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  const handleFollow = (id) => {
    const updatedBlogs = blogs.map((blog) => {
      if (blog.id === id) {
        return {
          ...blog,
          following: !blog.following,
        };
      }
      return blog;
    });
    setBlogs(updatedBlogs);
  };

  const handleSort = (field) => {
    setSortField(field);
    const sortedBlogs = blogs.sort((a, b) => {
      if (a[field] < b[field]) {
        return -1;
      }

      if (a[field] > b[field]) {
          return 1;
          }
          return 0;
          });
          setBlogs(sortedBlogs);
          };
          const handleFilter = (field, value) => {
            setFilterField(field);
            setFilterValue(value);
            const filteredBlogs = blogs.filter((blog) => blog[field] === value);
            setBlogs(filteredBlogs);
            };
            
            // const handlePagination = (page) => {
            // // logic to handle pagination
            // };
            
            if (loading) {
            return <p>Loading...</p>;
            }
            
            if (error) {
            return <p>Error: {error}</p>;
            }
            return (
              <div className={classes.root}>
              <Grid container spacing={3}>
              <Grid item xs={12}>
              <IconButton aria-label="sort" onClick={() => handleSort('title')}>
              <SortIcon />
              </IconButton>
              <IconButton aria-label="filter" onClick={() => handleFilter('author', 'Leanne Graham')}>
              <FilterListIcon />
              </IconButton>
              </Grid>
              {blogs.map((blog) => (
              <Grid item xs={12} sm={6} key={blog.id}>
              <Card className={classes.card}>
              <CardHeader
              avatar={
              <Avatar aria-label="recipe" className={classes.avatar}>
              {blog.author[0]}
              </Avatar>
              }
              action={
              <>
              <IconButton aria-label="add to favorites" onClick={() => handleLike(blog.id)}>
              <FavoriteIcon color={blog.likes > 0 ? 'secondary' : 'inherit'} />
              </IconButton>
              <IconButton aria-label="follow" onClick={() => handleFollow(blog.id)}>
              <PersonAddOutlinedIcon color={blog.following ? 'secondary' : 'inherit'} />
              </IconButton>
</>
}
title={blog.title}
subheader={`Author: ${blog.author}`}
/>
<CardContent>
<Typography variant="body2" color="textSecondary" component="p">
{blog.content}
</Typography>
</CardContent>
</Card>
</Grid>
))}
</Grid>
</div>
);
}

export default Blog;



     