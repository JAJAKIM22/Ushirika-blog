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

// const featuredPosts = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random',
//     imageLabel: 'Image Text',
//   },
// ];



// const sidebar = {
//   title: 'Blog Topics',
  
 
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'Twitter', icon: TwitterIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

const theme = createTheme();

export default function Blog() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="lg">
        {/* <Header title="Blog" sections={sections} /> */}
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          {/* <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid> */}
          <Grid container spacing={5} sx={{ mt: 3 }}>
          
             <div>
             <FeedsBlogPostListItem/>
             </div>
             <Sidebar />
            
          </Grid>
        </main>
      </Container>
      {/* <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      /> */}
    </ThemeProvider>
  );
}