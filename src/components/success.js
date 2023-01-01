import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';

function Success() {
  return (
    <div>
      <ButtonAppBar />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Paper
          elevation={3}
          style={{
            width: '60%',
            padding: '2rem',
            margin: '2rem',
            textAlign: 'center',
          }}
        >
          <Typography variant='h5'>Thank you for your submission!</Typography>
        </Paper>
      </div>
    </div>
  );
}

export default Success;
