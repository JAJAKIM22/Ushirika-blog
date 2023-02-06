import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
// import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
// import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
// import Footer from './Footer';
import FeedsBlogPostListItem from './FeedsBlog'



const mainFeaturedPost = {
  title: 'Title of a longer featured blog post',
  description:
    "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
  image: 'https://source.unsplash.com/random',
  imageText: 'main image description',
  linkText: 'Continue reading…',
};



const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          
          <Grid container spacing={5} sx={{ mt: 3 }}>
          
             <div>
             <FeedsBlogPostListItem/>
             </div>
             <Sidebar />
            
          </Grid>
        </main>
      </Container>
    </ThemeProvider>
  );
}