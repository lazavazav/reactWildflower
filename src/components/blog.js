import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import DescriptionIcon from '@material-ui/icons/Description';
import image from '../assets/monarch.jpeg';

function Blog() {
  return (
    <>
      <ButtonAppBar />
      <div
        style={{ margin: '1rem', display: 'flex', justifyContent: 'center' }}
      >
        <div style={{ width: '80%', padding: '2rem', textAlign: 'center' }}>
          <Typography variant='h4'>Blog</Typography>
          <img src={image} width='75%' alt='monarch butterfly' />
          <Typography variant='h6' style={{ marginTop: '1rem' }}>
            Learn how to help and to enhance your own yard to attract and foster
            native wildlife
          </Typography>
        </div>
      </div>

      <div style={{ margin: '1rem' }}>
        <List component='nav' aria-label='main mailbox folders'>
          <Link to='/articleKickOff' style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary='Kick Off Nov 12, 2022' />
            </ListItem>
          </Link>
          <Divider />
          <Link to='/articleGrant' style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary='Awarded Grant Dec 20, 2022' />
            </ListItem>
          </Link>
          <Divider />
          <Link to='/articleSeeds' style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary='Sowing Seeds Jan 24, 2023' />
            </ListItem>
          </Link>
          <Link to='/articleBluebirds' style={{ textDecoration: 'none' }}>
            <ListItem button>
              <ListItemIcon>
                <DescriptionIcon />
              </ListItemIcon>
              <ListItemText primary='Bluebirds Feb 05, 2023' />
            </ListItem>
          </Link>
          <Divider />
        </List>
      </div>
    </>
  );
}

export default Blog;
