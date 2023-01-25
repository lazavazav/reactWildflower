import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import video from '../assets/wildflower.mp4';
import image1 from '../assets/proj1.jpeg';
import image2 from '../assets/proj2.jpeg';
import image3 from '../assets/proj3.jpeg';
import image4 from '../assets/proj4.jpeg';

function Article1() {
  return (
    <div>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>Project KickOff: 11/12/2022</Typography>
        <Typography variant='h5' style={{ margin: '1rem' }}>
          This weekend we were outside laying cardboard and compost in both
          meadows by the walking trails. A few days before the workday, we mowed
          the area as close to ground as we could so cardboard would lay flat.
          The cardboard will help to suppress the aggressive grasses that are
          currently growing there and give our wildflower seeds a fighting
          chance. The compost was delivered from Price Farm Organics and will
          give the seedlings a good start. We are in the process this winter of
          picking out the best types of native seeds to plant in early spring.
          Thank you to everyone who donated time, supplies or money to kick off
          the project. Approximately $600 was donated by homeowners.
        </Typography>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            flexWrap: 'wrap',
            marginTop: '1rem',
          }}
        >
          <img src={image1} width='300px' height='400px' alt='moving compost' />
          <img src={image2} width='300px' height='400px' alt='dump truck' />
          <img src={image3} width='300px' height='400px' alt='cardboard' />
          <img src={image4} width='300px' height='400px' alt='compost spread' />
        </div>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <video width='400' height='300' controls>
            <source src={video} type='video/mp4' />
            Your browser does not support the video tag.
          </video>
        </div>
      </Container>
    </div>
  );
}

export default Article1;
