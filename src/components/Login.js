
//   export default LoginForm;


// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import { json } from 'stream/consumers';

// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="https://mui.com/">
//         Ushirika
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

// const theme = createTheme();

// export default function LoginForm() {
  // const [username, setUsername] = useState('');
  // const [password, setPassword] = useState('');

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // send the POST request to the server
  //   fetch('http://192.168.0.50:8000/api/token/', {
  //     method: 'POST',
  //     body: JSON.stringify({ username, password }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
    
  //   .then(response => {
  //     if (response.ok) {
  //       response.json().then(data=>{
  //         localStorage.setItem(
  //           "tokens",
  //           JSON.stringify(data)
  //         )
  //       })
  //     } else {

  //       // console.error(response.statusText);
  //       // alert('Invalid email or password. Please try again.');
  //       response.json().then(data=>{
  //         console.log(data)
  //       })
  //     }
  //   })
  //   .catch(error => {
  //       console.error(error);
  //       alert('An error occurred. Please try again.');
  //   });
  // };

//   return (
//     <ThemeProvider theme={theme}>
//       <Grid container component="main" sx={{ height: '100vh' }}>
//         <CssBaseline />
//         <Grid
//           item
//           xs={false}
//           sm={4}
//           md={7}
//           sx={{
//             backgroundImage: 'url(https://images.unsplash.com/photo-1606443410339-4046fad7a16a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8cHJheWVyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60)',
//             backgroundRepeat: 'no-repeat',
//             backgroundColor: (t) =>
//               t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
//             backgroundSize: 'cover',
//             backgroundPosition: 'center',
//           }}
//         />
//         <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
//           <Box
//             sx={{
//               my: 8,
//               mx: 4,
//               display: 'flex',
//               flexDirection: 'column',
//               alignItems: 'center',
//             }}
//           >
//             <Avatar sx={{ m: 1, bgcolor: 'primary' }}>
//               <LockOutlinedIcon color='primary' />
//             </Avatar>
//             <Typography component="h1" variant="h5">
//               Login 
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              // <TextField
              //   margin="normal"
              //   required
              //   fullWidth
              //   id="username"
              //   label="Username"
              //   name="username"
              //   autoComplete="username"
              //   value={username}
              //   onChange={e => setUsername(e.target.value)}
              //   autoFocus
              // />
              // <TextField
              //   margin="normal"
              //   required
              //   fullWidth
              //   name="password"
              //   label="Password"
              //   type="password"
              //   id="password"
              //   autoComplete="current-password"
              //   value={password}
              //   onChange={e => setPassword(e.target.value)}  
              // />
//               <FormControlLabel
//                 control={<Checkbox value="remember" color="primary" />}
//                 label="Remember me"
//               />
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign In
//               </Button>
//               <Grid container>
//                 <Grid item xs>
//                   <Link href="/forgotpassword" variant="body2">
//                     Forgot password?
//                   </Link>
//                 </Grid>
//                 <Grid item>
//                   <Link href="/signup" variant="body2">
//                     {"Don't have an account? Sign Up"}
//                   </Link>
//                 </Grid>
//               </Grid>
//               <Copyright sx={{ mt: 5 }} />
//             </Box>
//           </Box>
//         </Grid>
//       </Grid>
//     </ThemeProvider>
//   );
// }


import React, { useState } from "react";
import {Button, Typography, Container, CssBaseline, TextField, FormControlLabel, Checkbox, Link, Grid, Box} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../style/login.css";



function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      
      {"Copyright © "}
      <Link color="inherit" href="#" style={{textDecoration: "none"}}>
        USHIRIKA
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function LoginForm() {
const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send the POST request to the server
    fetch('http://192.168.0.50:8000/api/token/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    
    .then(response => {
      if (response.ok) {
        response.json().then(data=>{
          localStorage.setItem(
            "tokens",
            JSON.stringify(data)
          )
        })
      } else {

        // console.error(response.statusText);
        // alert('Invalid email or password. Please try again.');
        response.json().then(data=>{
          console.log(data)
        })
      }
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again.');
    });
  };


  return (
    <div className="login" style={{maxHeight: 100+"vh"}}>
      <div>
        <img
          id="phone-img"
          src="https://images.assetsdelivery.com/compings_v2/liravega258/liravega2581810/liravega258181000007.jpg"
          alt="login "
        />
      </div>
      <ThemeProvider theme={theme} className="themeprovider-login">
        <Container component="main" maxWidth="xs" className="login-form">
          <CssBaseline />
          <Box
            className="login-box"
            sx={{
              marginTop: 3,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography component="h2" variant="h" className="welcome-message">
              Welcome back
            </Typography>
            <Typography component="h" style={{fontSize: "small"}}>
              Enter your details below to login
            </Typography>
            
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              // sx={{ mt: 1 }}
            >
              
              <TextField
                margin="normal"
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
                autoComplete="username"
                value={username}
                onChange={e => setUsername(e.target.value)}
                autoFocus
              />
               <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={e => setPassword(e.target.value)}  
              />
                  <Grid item xs>
                  <Link href="/resetpassword" variant="body2" style={{textDecoration:"none",  marginRight: 3+"vw", float:"right", color: "blue"}}>
                    Forgot password?
                  </Link>
                </Grid>

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Login
              </Button>
              <Grid container className="signup-text" >
                <Grid item>
                  Don't have an account?
                  <Link href="/signup" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                    {" Signup"}
                  </Link>
                </Grid>
                <Grid item style={{marginLeft: 1+'vw', textDecoration: "none"}}>
                or Go back to
                  <Link href="/" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                    {" Home"}
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
          <Copyright sx={{ mt: 8, mb: 4 }} />
        </Container>
      </ThemeProvider>
      <div>
        <img
          id="laptop"
          src="https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8="
          alt="form"
        />
      </div>
    </div>
  );
}



