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
  const[firstname, setFirstName] = useState('');
  const [lastname, setLastName] = useState('');
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
        firstname: firstname,
        lastname: lastname,
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
         alert(response.errors);
      }
    })
    .catch(error => {
        console.error(error);
        alert('An error occurred. Please try again.');
    });
  };

  const sendVerificationEmail = (email) => {
    // code to send verification email
    fetch('/send-verification-email', {
      method: 'POST',
      body: JSON.stringify({ email }),
      headers: { 'Content-Type': 'application/json' },
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to send verification email');
        }
        return response.json();
      })
      .then(data => {
        console.log('Verification email sent successfully');
      })
      .catch(error => {
        console.error(error);
      });
  }



  return (
    <div className="login" style={{maxHeight: 100+"vh"}}>
      <div>
        <img
          id="phone-img"
          src="https://media.istockphoto.com/id/1440246683/photo/blog-word-on-wooden-cube-blocks-on-gray-background.jpg?b=1&s=170667a&w=0&k=20&c=eRpm1n7qvukgx7bK4ZWH8_LO8BPAoFFsxCGbDFatkoE="
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
                id="firstname"
                label="First Name"
                name="firstname"
                autoComplete="firstname"
                value={firstname}
                onChange={e => setFirstName(e.target.value)}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="lastname"
                label="Last Name"
                name="lastname"
                autoComplete="lastname"
                value={lastname}
                onChange={e => setLastName(e.target.value)}
                autoFocus
              />
              
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









