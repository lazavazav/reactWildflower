import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import designImg from '../assets/gardenDesign.jpeg';
import pollinatorsImg from '../assets/pollinators.jpeg';
import ohioPlantsImg from '../assets/ohioPlants.jpeg';

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function Resources() {
  const classes = useStyles();
  return (
    <div>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>Resources</Typography>
        <Typography variant='h5' style={{ marginTop: '1rem' }}>
          Below are resources to learn more about helping wildlife and
          sustaining natural habitats in your own yard, neighborhood and
          community.
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={designImg}
                title='Native Garden Designs'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Garden Designs
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Learn how to create a design in your yard using native plants
                  and natural landscape ideas.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href='https://nativegardendesigns.wildones.org/designs/toledo/'
                aria-label='Native Garden Designs'
              >
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={pollinatorsImg}
                title='Polinator Plants'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Polinator Plants
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Great resource for what plants in our region attract and help
                  pollinators.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href='https://xerces.org/sites/default/files/2018-05/17-047_03_XercesSoc_Pollinator-Plants_Great-Lakes-Region_web-3page_0.pdf'
                aria-label='Pollinator Plants'
              >
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </a>
            </CardActions>
          </Card>
          <Card className={classes.root}>
            <CardActionArea>
              <CardMedia
                className={classes.media}
                image={ohioPlantsImg}
                title='Ohio Prairie Plants'
              />
              <CardContent>
                <Typography gutterBottom variant='h5' component='h2'>
                  Ohio Prairie Plants
                </Typography>
                <Typography variant='body2' color='textSecondary' component='p'>
                  Learn about Ohio's prairies heritage and future and a listing
                  of native plants in Ohio.
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <a
                href='http://www.ohioprairie.org/'
                aria-label='Ohio Prairie Plants'
              >
                <Button size='small' color='primary'>
                  Learn More
                </Button>
              </a>
            </CardActions>
          </Card>
        </div>
      </Container>
    </div>
  );
}

export default Resources;
