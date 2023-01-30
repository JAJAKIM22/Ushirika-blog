import React from 'react';
import Color from 'color';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import CardActionArea from '@material-ui/core/CardActionArea';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import {books} from './data'

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
    height: '30vh',
    paddingTop: '56.25%',
  },
}));

const SolidGameCardDemo =()=>{
  const styles = useStyles({ color: '#203f52' });
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    
    <Slider {...settings}>
  {books.map((item) => (
    <div>
      <Card classes={styles}>
        <CardActionArea classes={styles.actionArea}>
          <CardMedia
            component="img"
            image={item.image}
            alt={item.image}
            classes={styles.media}
          />
          <CardContent classes={styles.content}>
            <Typography gutterBottom variant="h5" component="div" classes={styles.title}>
              {item.title}
            </Typography>
            <Typography classes={styles.subtitle}>
              {item.subtitle}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  ))}
</Slider>
    
  );
}

export default SolidGameCardDemo;