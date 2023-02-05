import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import bluebird from '../assets/bluebird.jpeg';
import houseSparrow from '../assets/housesparrow.jpeg';

function ArticleBluebirds() {
  return (
    <div>
      <ButtonAppBar />
      <Container style={{ padding: '2rem' }}>
        <Typography variant='h4'>
          Helping Bluebirds and Native Song Birds: 02/25/2023
        </Typography>
        <img
          src={bluebird}
          width='600px'
          height='400px'
          alt='eastern bluebird'
        />
        <Typography variant='h5' style={{ margin: '1rem' }}>
          Feeding backyard birds and putting up bird houses is a fun way to
          encourage and help backyard birds however, you might be inadvertently
          hurting them and helping the non native bullies of the bird world.
        </Typography>
        <img
          src={houseSparrow}
          width='600px'
          height='400px'
          alt='eastern bluebird'
        />
        <Typography variant='h6'>
          House Sparrows were introduced in Brooklyn in 1851 as a means of
          controlling caterpillar populations to try and protect the city's
          basswood trees from Linden Moths. This European songbird made the
          entire continental U.S. its home in less than 50 years. House sparrows
          are aggressive and often will kill bluebirds and other native cavity
          nesting birds and compete for nesting sites. I've personally seen a
          male house sparrow chase and harrass a newly fledged baby bluebird.
          The young bird was not an experienced flyer and crashed into my deck
          and died within seconds right in front of my eyes. I've watched males
          harrass bluebird pairs during the nesting process all day, every day
          for weeks while the pair was building their nest and feeding the
          young.
        </Typography>
        <Typography variant='h6'>
          <Typography color='primary' variant='h4'>
            What can you do?
          </Typography>{' '}
          If you put up a cute bird house in your yard, sparrows will take it
          over and it is important to not allow them to breed. If you are not
          around enough or interested in monitoring the house to keep sparrows
          at bay, then plug up the hole. You can keep the house up for
          decoration and you won't be contributing to the problem of sparrows
          over running our native song bird population. Below are some links to
          learn more.
        </Typography>
        <a
          href='https://nestwatch.org/learn/all-about-birdhouses/managing-house-sparrows-and-european-starlings/'
          aria-label='Nest Watch'
        >
          <Typography variant='h5'>Nest Watch</Typography>
        </a>
        <a href='https://www.sialis.org/index.html' aria-label='Sialis'>
          <Typography variant='h5'>Sialis</Typography>
        </a>
      </Container>
    </div>
  );
}

export default ArticleBluebirds;
