import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function About() {
  return (
    <Container>
      <ButtonAppBar />
      <Typography>About</Typography>
    </Container>
  );
}

export default About;
