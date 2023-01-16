import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Box, Typography, Button, CircularProgress, Avatar } from '@material-ui/core';
// import { grey } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(3)
  },
  blogContainer: {
    marginBottom: theme.spacing(3)
  },
  blogTitle: {
    fontWeight: 'bold'
  },
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  loading: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50vh'
  },
  error: {
    color: theme.palette.error.main,
    textAlign: 'center'
  },
  profileAvatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    marginRight: theme.spacing(2)
  }
}));

const BlogList = () => {
  const classes = useStyles();
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    setLoading(true);
    setError(null);
    fetch(`https://my-api.com/blogs?page=${currentPage}`)
      .then(response => response.json())
      .then(data => {
        setBlogs(data.blogs);
        setTotalPages(data.totalPages);
      })
      .catch(error => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  if (loading) {
    return (
      <Container className={classes.loading}>
        <CircularProgress />
      </Container>
    );
  }
  if (error) {
    return (
      <Container className={classes.error}>
        <Typography variant="h6">{error.message}</Typography>
      </Container>
    );
  }

  return (
    <Container className={classes.root}>
      {blogs.map(blog => (
        <Box key={blog.id} className={classes.blogContainer}>
             <Avatar 
            className={classes.profileAvatar} 
            src={blog.user.profile_picture} 
            alt={blog.user.name} 
          />
          <Typography variant="h5" className={classes.blogTitle}>{blog.title}</Typography>
          <Typography variant="body1" >{blog.content}</Typography>
        </Box>
      ))}
      <Box className={classes.pagination}>
        <Button disabled={currentPage === 1} onClick={() => setCurrentPage(currentPage - 1)}>
          Previous Page
        </Button>
        <Button disabled={currentPage === totalPages} onClick={() => setCurrentPage(currentPage + 1)}>
          Next Page
        </Button>
    </Box>
    </Container>
  )}

export default BlogList;
     