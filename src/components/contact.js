import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
//import TextField from '@material-ui/core/TextField';
//import Button from '@material-ui/core/Button';
//import AccountCircle from '@material-ui/icons/AccountCircle';

function Contact() {
  return (
    <Container>
      <ButtonAppBar />
      <Container style={{ padding: '2rem', textAlign: 'center' }}>
        <Typography variant='h3'>Contact Us</Typography>
        <form name='contact' method='post'>
          <input type='hidden' name='form-name' value='contact' />
          <p>
            <label htmlFor='name'>Name</label> <br />
            <input type='text' id='name' name='name' required />
          </p>
          <p>
            <label htmlFor='email'>Email</label> <br />
            <input type='email' id='email' name='email' required />
          </p>
          <p>
            <label htmlFor='message'>Message</label> <br />
            <textarea id='message' name='message' required></textarea>
          </p>
          <p>
            <input type='submit' value='Submit message' />
          </p>
        </form>
        {/* <form name='contact' method='POST' data-netlify='true'>
          <TextField id='name' label='Name' placeholder='Name' />
          <TextField id='email' label='Email' placeholder='Email' />
          <TextField id='message' label='Message' placeholder='Message' />
          <Button type='submit'>Submit</Button>
        </form> */}
      </Container>
    </Container>
  );
}

export default Contact;
