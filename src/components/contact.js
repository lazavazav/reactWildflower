import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

function Contact() {
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
          <Typography variant='h3'>Contact Us</Typography>
          <form
            name='contact'
            action='/success'
            method='post'
            data-netlify='true'
            onSubmit='submit'
            data-netlify-honeypot='bot-field'
          >
            <input type='hidden' name='form-name' value='contact' />
            <div style={{ margin: '1rem' }}>
              {' '}
              <TextField
                id='name'
                name='name'
                required
                label='Name'
                placeholder='Name'
                fullwidth
                style={{ width: '500px' }}
              />
            </div>

            <div style={{ margin: '1rem' }}>
              {' '}
              <TextField
                id='email'
                label='Email'
                placeholder='Email'
                name='email'
                required
                style={{ width: '500px' }}
              />
            </div>
            <div style={{ margin: '1rem' }}>
              {' '}
              <TextField
                id='message'
                label='Message'
                placeholder='Message'
                name='message'
                required
                style={{ width: '500px' }}
                multiline
                rows={4}
              />
            </div>
            <div style={{ margin: '1rem' }}>
              {' '}
              <Button type='submit' variant='outlined'>
                Submit
              </Button>
            </div>
          </form>
        </Paper>
      </div>
    </div>
  );
}

export default Contact;
