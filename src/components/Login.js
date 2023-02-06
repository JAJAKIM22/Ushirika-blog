
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
    fetch('http://192.168.0.51:8000/api/token/', {
      method: 'POST',
      body: JSON.stringify({ username, password }),
      headers: { 'Content-Type': 'application/json' },
    })
    
    .then(response => {
      if (response.ok) {
        window.location.href = '/home';
        response.json().then(data=>{
          localStorage.setItem(
            "tokens",
            JSON.stringify(data)
          )
        })
      } else {
       
        console.error(response.statusText);
        alert('Invalid email or password. Please try again.');
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
          src="https://media.istockphoto.com/id/1338011657/photo/the-word-blog-arranged-from-wooden-blocks-placed-on-a-white-computer-keyboard.jpg?b=1&s=170667a&w=0&k=20&c=MC6h9IhzFiWTFDOgeD1hsQQM5OJId6SWwVO8K7Fup-8="
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
              Validate
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
                  <Link href="/home" variant="body2" style={{textDecoration: "none", color: "orangered"}}>
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



