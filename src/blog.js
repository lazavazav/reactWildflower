import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

function Blog() {
  return (
    <Container>
      <ButtonAppBar />
      <Typography>Blog</Typography>
    </Container>
  );
}

export default Blog;
