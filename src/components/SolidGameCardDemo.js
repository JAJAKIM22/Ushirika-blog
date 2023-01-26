import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

const useGridStyles = makeStyles(({ breakpoints }) => ({
  root: {
    [breakpoints.up('md')]: {
      justifyContent: 'center',
    },
  },
}));

const useStyles = makeStyles(() => ({
  actionArea: {
    borderRadius: 16,
    transition: '0.2s',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  card: ({ color }) => ({
    minWidth: 256,
    borderRadius: 16,
    boxShadow: 'none',
    '&:hover': {
      boxShadow: `0 6px 12px 0 ${Color(color)
        .rotate(-12)
        .darken(0.2)
        .fade(0.5)}`,
    },
  }),
  content: ({ color }) => {
    return {
      backgroundColor: color,
      padding: '1rem 1.5rem 1.5rem',
    };
  },
  title: {
    fontFamily: 'Keania One',
    fontSize: '2rem',
    color: '#fff',
    textTransform: 'uppercase',
    
  },
  subtitle: {
    fontFamily: 'Montserrat',
    color: '#fff',
    opacity: 0.87,
    marginTop: '2rem',
    fontWeight: 500,
    fontSize: 14,
    
  },
  media: {
    height: '20vh',
    // width: '30vh',
    paddingTop: '56.25%',
  },
}));



const CustomCard = ({ classes, image, title, subtitle }) => {
  return (
    <CardActionArea className={classes.actionArea}>
      <Card className={classes.card}>
        <CardMedia className={classes.media} image={image} />
        <CardContent className={classes.content}>
          <Typography className={classes.content.title} variant={'h5'}>
            {title}
          </Typography>
          <Typography className={classes.content.subtitle}>{subtitle}</Typography>
        </CardContent>
      </Card>
    </CardActionArea>
  );
  
};

export const SolidGameCardDemo = React.memo(function SolidGameCard() {
    const gridStyles = useGridStyles();
const styles = useStyles({ color: '#203f52' });
const styles2 = useStyles({ color: '#4d137f' });
const styles3 = useStyles({ color: '#ff9900' });
const styles4 = useStyles({ color: '#34241e' });
return (
            <>
            <Grid classes={gridStyles} container spacing={4} wrap={'nowrap'}>
            <Grid item>
            <CustomCard
            classes={styles}
            title={'OUR MISSING HEARTS'}
            subtitle={'Time for a second chance?'}
            image={
            'https://akns-images.eonline.com/eol_images/Entire_Site/2022826/rs_640x640-220926095902-e-comm-books_0011_81m4rgPWCFL.jpg?fit=around%7C776:776&output-quality=90&crop=776:776;center,top'
            }
            />
            </Grid>
            <Grid item>
            <CustomCard
            classes={styles2}
            title= 'WHAT DOESNT KILL'
            subtitle={'Patience? ...'}
            image={
            'https://www.refinery29.com/images/10229895.jpg'
            }
            />
            </Grid>
            <Grid item>
            <CustomCard
            classes={styles3}
            title={'The Golem'}
            subtitle={'What are you waiting for?'}
            image={'https://media.wired.co.uk/photos/606d9f23ce1204c637f2f2dd/master/w_1600%2Cc_limit/wired-books-23.jpg'}
            />
            </Grid>
            <Grid item>
            <CustomCard
            classes={styles4}
            title={'GOOD COMPANY'}
            subtitle={'Ready to be engaged?'}
            image={
            'https://www.realsimple.com/thmb/SfNg8yAeUTxA7p6OtExOxMjx8-Q=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Good-Company-Book-Cover-448342647b744db79b6c31c061eef126.jpg'
            }
            />
            </Grid>
            </Grid>
            </>
            );
            });

export default SolidGameCardDemo;