import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import image1 from '../assets/logo.png';

function ArticleGrant() {
  return (
    <div>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>Awarded Grant: 12/20/2022</Typography>
        <Typography variant='h5' style={{ margin: '1rem' }}>
          Immediately after our November workday to prep the areas for future
          wildflowers, the committee met to make plans and write a grant to fund
          the future of the project. We are happy to report that we were awarded
          grant money from the Columbus Audubon Society. Below is a snippet of
          the award letter we received.
        </Typography>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <Paper
            elevation={3}
            style={{
              margin: '1rem',
              padding: '3rem',
            }}
          >
            <Typography variant='h6'>
              On behalf of Columbus Audubon and the Conservation Grants
              Committee, I am happy to let you know that we have selected your
              proposal for funding in the amount of $1,287.00 to fund the native
              plants portion of the project. Native plant restoration and
              providing natural habitat is an important initiative that Columbus
              Audubon has long supported. We feel this project is a strong
              example of how open space in new developments can be repurposed
              for native habitat.
            </Typography>
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-evenly',
                flexWrap: 'wrap',
                margin: '1rem',
              }}
            >
              <img
                src={image1}
                width='200px'
                height='200px'
                alt='moving compost'
              />
            </div>
          </Paper>
        </div>
        <Typography variant='h5'>
          Thank you Columbus Audubon for supporting us! Please consider donating
          to this organization to help them fund more community projects.
        </Typography>

        <a href='https://columbusaudubon.org' aria-label='Columbus Audubon'>
          <Typography variant='h5'>Columbus Audubon</Typography>
        </a>
      </Container>
    </div>
  );
}

export default ArticleGrant;
