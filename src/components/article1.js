import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import video from '../assets/wildflower.mp4';

function Article1() {
  return (
    <Container>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>Project KickOff</Typography>
        <Typography>
          This weekend, we were outside laying cardboard and compost in both
          meadows by the walking trails. Thanks to everyone who donated time,
          supplies or money to kick off the project.
        </Typography>

        <video width='400' height='300' controls>
          <source src={video} type='video/mp4' />
          Your browser does not support the video tag.
        </video>
      </Container>
    </Container>
  );
}

export default Article1;
