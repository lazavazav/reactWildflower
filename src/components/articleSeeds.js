import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import image1 from '../assets/map1.jpeg';
import image2 from '../assets/map2.jpeg';
import image3 from '../assets/map3.jpeg';

function ArticleSeeds() {
  return (
    <div>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>Sowing Seeds: 01/24/2023</Typography>
        <Typography variant='h5' style={{ margin: '1rem' }}>
          In early January, the flower committee met to discuss purchasing seeds
          for winter sowing. Many wildflowers benefit from a cold period called
          cold stratification and some wildflowers won't germinate without it.
          The cold helps to soften the hard outer shell so the seed can
          germinate when the ground temperatures warm up. We drew up the maps
          pictured here and on January 24th, sowed the seeds based on the design
          outlined on the various maps. Now the hard part, waiting for spring!
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          <img src={image1} width='600px' height='400px' alt='moving compost' />
          <img src={image2} width='600px' height='400px' alt='dump truck' />
          <img src={image3} width='600px' height='400px' alt='cardboard' />
        </div>
      </Container>
    </div>
  );
}

export default ArticleSeeds;
