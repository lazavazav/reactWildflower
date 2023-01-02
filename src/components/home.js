import React from 'react';
import ButtonAppBar from './navbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import background from '../assets/flowers.jpeg';
import './home.css';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: '2rem',
    position: 'absolute',
    textAlign: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 2,
    color: '#262673',
    [theme.breakpoints.down('xs')]: {
      fontSize: '24px',
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <div>
      <ButtonAppBar />
      <div
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: 'no-repeat',
          opacity: '.3',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          position: 'relative',
          width: '100vw',
          height: '100vh',
        }}
      ></div>
      <div>
        <Typography className={classes.title}>
          Our Mission: To transform our current greenspaces from mowed grasses
          to wildflower habitats that support pollinators and native wildlife
        </Typography>
      </div>
    </div>
  );
}

export default Home;
// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
// import Toolbar from '@material-ui/core/Toolbar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import IdentityModal, {
//   useIdentityContext,
//   IdentityContextProvider,
// } from 'react-netlify-identity-widget';
// import 'react-netlify-identity-widget/styles.css';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     flexGrow: 1,
//   },
//   menuButton: {
//     marginRight: theme.spacing(2),
//   },
//   title: {
//     flexGrow: 1,
//   },
// }));

// export default function Home() {
//   const classes = useStyles();
//   const url = 'https://cool-chaja-ab0585.netlify.app/';

//   return (
//     <IdentityContextProvider url={url}>
//       <AuthStatusView />
//     </IdentityContextProvider>
//   );
//   function AuthStatusView() {
//     const identity = useIdentityContext();
//     const [dialog, setDialog] = React.useState(false);
//     const name =
//       (identity &&
//         identity.user &&
//         identity.user.user_metadata &&
//         identity.user.user_metadata.full_name) ||
//       '';
//     const isLoggedIn = identity && identity.isLoggedIn;
//     return (
//       <div className={classes.root}>
//         <AppBar position='static'>
//           <Toolbar>
//             <Typography variant='h6' className={classes.title}>
//               The Pines Wildflower Project
//             </Typography>
//             <div>
//               <div>
//                 <Button
//                   style={{ color: 'white' }}
//                   onClick={() => setDialog(true)}
//                 >
//                   {isLoggedIn ? `Hello ${name}, Log out here!` : 'Log In'}
//                 </Button>
//               </div>
//               <IdentityModal
//                 showDialog={dialog}
//                 onCloseDialog={() => setDialog(false)}
//                 onLogin={(user) => console.log('hello ', user.user_metadata)}
//                 onSignup={(user) =>
//                   console.log('welcome ', user.user_metadata.full_name)
//                 }
//                 onLogout={() => console.log('bye ', name)}
//               />
//             </div>
//           </Toolbar>
//         </AppBar>
//       </div>
//     );
//   }
// }
