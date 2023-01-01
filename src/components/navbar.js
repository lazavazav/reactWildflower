import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            The Pines Wildflower Project
          </Typography>
          <Button>
            <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
              Home
            </Link>
          </Button>
          <Button>
            <Link
              to='/contact'
              style={{ textDecoration: 'none', color: 'white' }}
            >
              Contact
            </Link>
          </Button>
          <Button>
            <Link to='/blog' style={{ textDecoration: 'none', color: 'white' }}>
              Blog
            </Link>
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
