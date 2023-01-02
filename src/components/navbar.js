import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
    [theme.breakpoints.down('xs')]: {
      fontSize: '16px',
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div style={{ maxWidth: '100vw', overflow: 'hidden' }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' className={classes.title}>
            The Pines Wildflower Project
          </Typography>
          <MenuIcon onClick={handleClick} />
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>
              {' '}
              <Link to='/' style={{ textDecoration: 'none', color: '#262673' }}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link
                to='/blog'
                style={{ textDecoration: 'none', color: '#262673' }}
              >
                Blog
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              {' '}
              <Link
                to='/contact'
                style={{ textDecoration: 'none', color: '#262673' }}
              >
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
