import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DescriptionIcon from '@material-ui/icons/Description';
import image from '../assets/monarch.jpeg';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

function Blog() {
  const classes = useStyles();
  return (
    <Container>
      <ButtonAppBar />
      <Container style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant='h3'>Blog</Typography>
        <img src={image} width='75%' alt='monarch butterfly' />
        <Typography variant='h5' style={{ marginTop: '1rem' }}>
          Learn how to help and to enhance your own yard to attract and foster
          native wildlife
        </Typography>
      </Container>
      <div className={classes.root}>
        <List component='nav' aria-label='main mailbox folders'>
          <Link to='/article1' style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary='Kick Off Nov 11, 2022' />
            </ListItem>
          </Link>
        </List>
      </div>
    </Container>
  );
}

export default Blog;
