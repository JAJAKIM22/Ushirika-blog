import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
root: {
margin: 'auto',
borderRadius: spacing(2),
transition: '0.3s',
boxShadow: '0px 14px 80px rgba(34, 35, 58, 0.2)',
position: 'relative',
maxWidth: '120vh',
marginLeft: 'auto',
overflow: 'initial',
background: '#ffffff',
display: 'flex',
flexDirection: 'column',
alignItems: 'center',
paddingBottom: spacing(2),
[breakpoints.up('md')]: {
flexDirection: 'row',
paddingTop: spacing(2),
},
},
media: {
width: '88%',
marginLeft: 'auto',
marginRight: 'auto',
marginTop: spacing(-3),
height: 0,
paddingBottom: '48%',
borderRadius: spacing(2),
backgroundColor: '#fff',
position: 'relative',
[breakpoints.up('md')]: {
width: '100%',
marginLeft: spacing(-3),
marginTop: 0,
transform: 'translateX(-8px)',
},
'&:after': {
content: '" "',
position: 'absolute',
top: 0,
left: 0,
width: '100%',
height: '100%',
// backgroundImage: 'linear-gradient(147deg, #0077c9 0%, #0077c9 74%)',
borderRadius: spacing(2),
opacity: 0.5,
},
},
content: {
padding: 24,
},
cta: {
marginTop: 24,
textTransform: 'initial',
background: 'blue',
},
}));

export const BlogCard = React.memo(function BlogCard() {
const styles = useStyles();
return (
<Card className={styles.root}>
<CardMedia
className={styles.media}
image={
'https://images.unsplash.com/photo-1513001900722-370f803f498d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJsb2d8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
}
/>
<CardContent className={styles.content}>
<Typography variant="overline">26 JAN 2023</Typography>
<Typography variant="h5">What is Ushirika ?</Typography>
<Typography variant="body2">Ushirika is a blog web application. Every person can express themselves and...
</Typography>
<Button className={styles.cta}><Link className="nav-link"  to="/login">Read more</Link></Button>
</CardContent>
</Card>
);
})

export default BlogCard;
