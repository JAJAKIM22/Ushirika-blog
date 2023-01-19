// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { TextField, Card, CardContent, Button } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   card: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     margin: 'auto',
//     width: '50%',
//     padding: theme.spacing(3),
//   },
//   cardContent: {
//     width: '100%',
//   },
//   form: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     justifyContent: 'center',
//     width: '100%',
//   },
//   submit: {
//     margin: theme.spacing(3, 0, 2),
//   },
// }));

// const SignupForm = () => {
//   const classes = useStyles();
//   const [email, setEmail] = useState('');
//   const [name, setName] = useState('');
//   const [phone, setPhone] = useState('');
//   const [churchName, setChurchName] = useState('');
//   const [password, setPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (password !== confirmPassword) {
//       alert('Passwords do not match. Please try again.');
//       return;
//     }

//     // send the POST request to the server
//     fetch('/api/signup', {
//       method: 'POST',
//       body: JSON.stringify({ email, name, phone, churchName, password }),
//       headers: { 'Content-Type': 'application/json' },
//     })
//     .then(response => {
//       if (response.ok) {
//         // send verification email
//         sendVerificationEmail(email);
//         // handle successful signup
//       } else {
//         console.error(response.statusText);
//         alert('An error occurred. Please try again.');
//       }
//     })
//     .catch(error => {
//         console.error(error);
//         alert('An error occurred. Please try again.');
//     });
//   };

//   const sendVerificationEmail = (email) => {
//     // code to send verification email
//   }

//   return (
    
    
//     <Card className={classes.card}>
//       <CardContent className={classes.cardContent}>
//         <form className={classes.form} onSubmit={handleSubmit}>
//         <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             value={email}
//             onChange={e => setEmail(e.target.value)}
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="name"
//             label="Name"
//             name="name"
//             value={name}
//             onChange={e => setName(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="phone"
//             label="Phone Number"
//             name="phone"
//             value={phone}
//             onChange={e => setPhone(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="churchName"
//             label="Church Name"
//             name="churchName"
//             value={churchName}
//             onChange={e => setChurchName(e.target.value)}
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             value={password}
//             onChange={e => setPassword(e.target.value)}
//             autoComplete="current-password"
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="confirmPassword"
//             label="Confirm Password"
//             type="password"
//             id="confirmPassword"
//             value={confirmPassword}
//             onChange={e => setConfirmPassword(e.target.value)}
//             autoComplete="current-password"
//           />
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//           >
//             Sign Up
//           </Button>
//         </form>
//       </CardContent>
//     </Card>
//   );
// };

// export default SignupForm;

// import React, { useState } from 'react';
// import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import CssBaseline from '@mui/material/CssBaseline';
// import TextField from '@mui/material/TextField';
// import Link from '@mui/material/Link';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// import Typography from '@mui/material/Typography';
// import { createTheme, ThemeProvider } from '@mui/material/styles';


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


// export default function SignupForm () {
//   const [username, setName] = useState('');
//   const [email, setEmail] = useState('');
//   // const [phone, setPhone] = useState('');
//   // const [churchName, setChurchName] = useState('');
//   const [password, setPassword] = useState('');
//   // const [password2, setPassword2] = useState('');
//   // const [confirmPassword, setConfirmPassword] = useState('');
//   const [error, setError] = useState('');

//   let getUsernameError = ()=>{
//     if (error.username){
//       return error.username[0]
//     }else{
//       return null
//     }
//   }


//   const handleSubmit = (e) => {

//     const formData = {
//       // name: name,
//       username: username,
//       email: email,
//       // location: location,
//       password: password,
//       // password2: password2
//     };
//     if(password.length < 8){
//       alert("password should be atleast 8 characters long")
//     }
//     else if(!password.match(/[A-Z]/)){
//       alert("password should have atleast one capital letter")
//     }
//     else if(!password.match(/[!@#%&]/)){
//       alert("password should have atleast one special character")
//     }
//     e.preventDefault();

//     // if (password !== password2) {
//     //   alert('Passwords do not match. Please try again.');
//     //   return;
//     // }

//     // send the POST request to the server
//     fetch('http://192.168.0.50:8000/api/signup/', {
//       method: 'POST',
//       credentials: 'omit'
// ,      body: JSON.stringify(formData),
//       headers: { 'Content-Type': 'application/json' ,
//       "Accept": "application/json",
//       "origin":"*"}
//     })
//     .then(response => {
//       if (response.ok) {
//         // send verification email
//         // sendVerificationEmail(email);
//         // handle successful signup
//       } else {
//         // console.error(response.error);
//         // alert('An error occurred. Please try again.');
//         response.json().then(data => {
//           setError(data.errors)
//           console.log(getUsernameError())
//       })
//       // alert(response.errors);
//       }
//     })
//     .catch(error => {
//         console.error(error);
//         alert('An error occurred. Please try again.');
//     });
//   };

  // const sendVerificationEmail = (email) => {
  //   // code to send verification email
  //   fetch('/send-verification-email', {
  //     method: 'POST',
  //     body: JSON.stringify({ email }),
  //     headers: { 'Content-Type': 'application/json' },
  //   })
  //     .then(response => {
  //       if (!response.ok) {
  //         throw new Error('Failed to send verification email');
  //       }
  //       return response.json();
  //     })
  //     .then(data => {
  //       console.log('Verification email sent successfully');
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // }

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
//               Sign Up
//             </Typography>
//             <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 1 }}>
              
            // <TextField
            //     margin="normal"
            //     required
            //     fullWidth
            //     id="name"
            //     label="Name"
            //     name="name"
            //     autoComplete="name"
            //     value={username}
            //     onChange={e => setName(e.target.value)}
            //     autoFocus
            //     error = {error.username}
            //     helperText = {()=>{getUsernameError()}}
            //   />
              // <TextField
              //   margin="normal"
              //   required
              //   fullWidth
              //   id="email"
              //   label="Email Address"
              //   name="email"
              //   autoComplete="email"
              //   value={email}
              //   onChange={e => setEmail(e.target.value)}
              //   autoFocus
              //   error = {error.email}
              //   helperText = {()=>{console.log('====================================');
              //   console.log(error);
              //   console.log('====================================');}}
              // />
               
//                {/* <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="phone"
//                 label="Phone Number"
//                 name="phone"
//                 autoComplete="phone"
//                 value={phone}
//                 onChange={e => setPhone(e.target.value)}
//                 autoFocus
//               />
//                <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="churchname"
//                 label="Church Name"
//                 name="church name"
//                 autoComplete="church name"
//                 value={churchName}
//                 onChange={e => setChurchName(e.target.value)}
//                 autoFocus
//               /> */}
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 name="password"
//                 label="Password"
//                 type="password"
//                 id="password"
//                 autoComplete="current-password"
//                 value={password}
//                 onChange={e => setPassword(e.target.value)}  
//               />
//                {/* <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="password"
//                 label="Confirm Password"
//                 name="confirm password"
//                 type="password"
//                 autoComplete="current-password"
//                 value={password2}
//                 onChange={e => setPassword2(e.target.value)}
//                 autoFocus
//               /> */}
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Sign Up
//               </Button>
//               <Grid container>
//                 <Grid item>
//                   <Link href="/login" variant="body2">
//                     {"Have an account? login "}
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

// import React, {useState} from "react";
// import {TextField, Checkbox, Link, Grid, Box, Typography, Container, Button, FormControlLabel} from '@mui/material/';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// // import "../style/signup.css"
// // import { GoogleLogin } from 'react-google-login';
// // import { gapi } from 'gapi-script';



// function Copyright(props) {
//   return (
//     <Typography variant="body2" color="text.secondary" align="center" {...props}>
//       {'Copyright © '}
//       <Link color="inherit" href="#" style={{textDecoration: "none"}}>
//         MURIFE
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }


// const theme = createTheme();

// export default function SignUp() {
//   // const [name, setName] = useState("");
//   const [username, setUsername] = useState("");
//   // const [email, setEmail] = useState("");
//   // const [location, setLocation] = useState("");
//   const [password1, setPassword1] = useState("");
//   const [password2, setPassword2] = useState("");
//   const [error, setError] = useState([])


//   function handleSubmit(event) {
    // const formData = {
    //   // name: name,
    //   username: username,
    //   // email: email,
    //   // location: location,
    //   password1: password1,
    //   password2: password2
    // };
//     event.preventDefault();
//     signup(formData)
//   }


// //   const clientId = '402509286566-rc7onvlh0f5n89779pb34hhhkerqv9j6.apps.googleusercontent.com';
// //   useEffect(() => {
// //     const initClient = () => {
// //           gapi.client.init({
// //           clientId: clientId,
// //           scope: ''
// //         });
// //      };
// //      gapi.load('client:auth2', initClient);
// //  });

// //  const onSuccess = (res) => {
// //   console.log('success:', res.getBasicProfile());
// //   const google = res.getBasicProfile()
// //   const signupdata = {name: google.Ad, email: google.cu, password: google.NT, password_confirmation: google.NT }
// //   signup(signupdata) 
// // };

// // const onFailure = (err) => {
// //   console.log('failed:', err);
// // };

//  function signup(signupdata) {

//   fetch('http://192.168.0.50:8000/dj-rest-auth/registration/', {
//       method: "POST",
//       credentials: "omit",
//       headers: {
//         "Content-Type": "application/json",
        // "Accept": "application/json",
        // "origin":"*"
//       },
//       body: JSON.stringify(signupdata),
//     })
//     // .then(res=>{
//     //   if(res.ok){
//     //     res.json().then(onLogin)
//     //   } else
//     //     res.json().then((err) => setError(err.error))
//     // })
//  }
//   return (
//     <div className="signup"> 
//     <div>
//       <img id="phone" src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form"/>
//     </div> 
//     <ThemeProvider theme={theme}>
//       <Container  component="main" className="signup-form">
//         {/* <CssBaseline /> */}
//           <Typography id="h1" component="h1" variant="h3">
//              Create an account
//           </Typography>
//           <Typography id="h5"component="h5" variant="h5">
//           Enter your details below to create an account with us...
//           </Typography>
//           <Box id="cont" component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >

//             <p style={{color: "red", fontSize: "small"}}>{error}</p>

//             <Grid container spacing={2}>
//             <Grid item xs={12} className="form-input">
//                 {/* <TextField
//                   autoComplete="given-name"
//                   name="name"
//                   required
//                  style={{width: 30+"vw"}}
//                   id="name"
//                   label="Name"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)} placeholder="Name"
//                 /> */}
//               </Grid>
//               <Grid item xs={12}>
//                 <TextField
//                   autoComplete="given-name"
//                   name="username"
//                   required
//                   style={{width: 30+"vw"}}
//                   id="username"
//                   label="Username"
//                   value={username}
//                   onChange={(e) => setUsername(e.target.value)} placeholder="Username"
//                 />
//               </Grid>
//               {/* <Grid item xs={12}>
//                 <TextField
//                   required
//                   style={{width: 30+"vw"}}
//                   id="email"
//                   label="Email Address"
//                   name="email"
//                   autoComplete="email"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)} placeholder="Email"
//                 />
//               </Grid> */}
        
//               <Grid item xs={12}>
//                 {/* <TextField
//                   required
//                   style={{width: 30+"vw"}}
//                   name="location"
//                   label="Location"
//                   type="location"
//                   id="location"
//                   autoComplete="new-location"
//                   value={location}
//                   onChange={(e) => setLocation(e.target.value)} placeholder="Location"
//                 /> */}
//               </Grid>

//               <Grid item xs={12}>
//                 <TextField
//                   required
//                   style={{width: 30+"vw"}}
//                   name="password1"
//                   label="Password1"
//                   type="password1"
//                   id="password1"
//                   autoComplete="new-password"
//                   value={password1}
//                   onChange={(e) => setPassword1(e.target.value)} placeholder="Password"
//                 />
//                  </Grid>
//                  <Grid item xs={12}>
//                 <TextField
//                   required
//                   style={{width: 30+"vw"}}
//                   name="password_confirmation"
//                   label="Confirm Password"
//                   type="password"
//                   id="password_confirmation"
//                   autoComplete="new-password"
//                   value={password2}
//                   onChange={(e) => setPassword2(e.target.value)} placeholder="Confirm Password"
//                 />
//               </Grid>
//               <Grid item xs={12} >
//                 <FormControlLabel
//                   control={<Checkbox value="allowExtraEmails" color="primary" />}
//                   label="Receive marketing promotions and updates"
//                 />
//               </Grid>
//             </Grid>
            
//             <div xs={12} className="buttons-flex">
//               <Button
//                style={{backgroundColor: "black"}}
//                 type="submit"
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Create account
//               </Button>

//               {/* <GoogleLogin
//                 clientId={clientId}
//                 buttonText="Sign in with Google"
//                 onSuccess={onSuccess}
//                 onFailure={onFailure}
//                 cookiePolicy={'single_host_origin'}
//                 isSignedIn={true}
//               /> */}
//              </div>

//             {/* <hr className="horizontal" /> */}

//             <Grid container justifyContent="center" style={{fontSize: "small", marginTop:2+"vh", textDecoration: "none"}}>
//               <Grid item>
//               Already have an account?
//                 <Link href="/login" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
//                    {" Login"}
//                 </Link>
//               </Grid>
//               <Grid item className="account-text" >
//                Not interested, go back to 
//                 <Link href="/" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
//                    {" Home"}
//                 </Link>
//               </Grid>
//             </Grid>
//           </Box>
//         <Copyright sx={{ mt: 2 }} />
//       </Container>
//     </ThemeProvider>
//     <div id="laptop">
//       <img src="https://img.freepik.com/premium-vector/yong-man-woman-shopping-flat-desin-concept-ready-animation-characters-design-elements-with-shopping-bags-boxes_171919-216.jpg?w=2000" alt ="form"/>
//     </div> 
//     </div>
//   );
// }
import React, { useState } from "react";
import {Button, Typography, Container, CssBaseline, TextField,  Link, Grid, Box} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import "../style/signup.css";



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
  const [email, setEmail] = useState('');
  // const [phone, setPhone] = useState('');
  // const [churchName, setChurchName] = useState('');
  const [password, setPassword] = useState('');
  // const [password2, setPassword2] = useState('');
  // const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  let getUsernameError = ()=>{
    if (error.username){
      return error.username[0]
    }else{
      return null
    }
  }


  const handleSubmit = (e) => {

    const formData = {
      // name: name,
      username: username,
      email: email,
      // location: location,
      password: password,
      // password2: password2
    };
    if(password.length < 8){
      alert("password should be atleast 8 characters long")
    }
    else if(!password.match(/[A-Z]/)){
      alert("password should have atleast one capital letter")
    }
    else if(!password.match(/[!@#%&]/)){
      alert("password should have atleast one special character")
    }
    e.preventDefault();

    // if (password !== password2) {
    //   alert('Passwords do not match. Please try again.');
    //   return;
    // }

    // send the POST request to the server
    fetch('http://192.168.0.50:8000/api/signup/', {
      method: 'POST',
      credentials: 'omit'
,      body: JSON.stringify(formData),
      headers: { 'Content-Type': 'application/json' ,
      "Accept": "application/json",
      "origin":"*"}
    })
    .then(response => {
      if (response.ok) {
        // send verification email
        // sendVerificationEmail(email);
        // handle successful signup
      } else {
        // console.error(response.error);
        // alert('An error occurred. Please try again.');
        response.json().then(data => {
          setError(data.errors)
          console.log(getUsernameError())
      })
      // alert(response.errors);
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
              Welcome To Ushirika 
            </Typography>
            <Typography component="h" style={{fontSize: "small"}}>
              Enter your details below to Signup
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
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                autoFocus
                // error = {error.email}
                // helperText = {()=>{console.log('====================================');
                // console.log(error);
                // console.log('====================================');}}
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

              <Button
                type="submit"
                // fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Signup
              </Button>
              <Grid container className="signup-text" >
                <Grid item>
                  Have an account?
                  <Link href="/login" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
                    {" Login"}
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
          id="laptops"
          src="https://media.istockphoto.com/id/1440246683/photo/blog-word-on-wooden-cube-blocks-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=eRpm1n7qvukgx7bK4ZWH8_LO8BPAoFFsxCGbDFatkoE="
          alt="form"
        />
      </div>
    </div>
  );
}









