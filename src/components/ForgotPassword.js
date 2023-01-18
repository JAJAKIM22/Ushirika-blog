// import React, { useState } from 'react';

// const ForgotPassword = () => {
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');
//     const [isLoading, setIsLoading] = useState(false);

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         setIsLoading(true);
//         fetch('/api/forgot-password', {
//             method: 'POST',
//             body: JSON.stringify({ email }),
//             headers: { 'Content-Type': 'application/json' }
//         })
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Failed to send password reset link');
//             }
//             return response.json();
//         })
//         .then(data => {
//             setIsLoading(false);
//             setMessage(data.message);
//         })
//         .catch(error => {
//             setIsLoading(false);
//             setMessage(error.message);
//         });
//     }

//     return (
//         <form onSubmit={handleSubmit}>
//             <label>
//                 Email:
//                 <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
//             </label>
//             <button type="submit" disabled={isLoading}>
//                 Send Reset Password Link
//             </button>
//             {message && <p>{message}</p>}
//         </form>
//     );
// }

// export default ForgotPassword;

import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  form: {
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  button: {
    marginTop: theme.spacing(2),
  },
  message: {
    marginTop: theme.spacing(2),
    color: 'green',
  }
}));

const ForgotPassword = () => {
    const classes = useStyles();
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true);
        fetch('http://192.168.0.50:8000/dj-rest-auth/password/reset/', {
            method: 'POST',
            body: JSON.stringify({ email }),
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to send password reset link');
            }
            return response.json();
        })
        .then(data => {
            setIsLoading(false);
            setMessage(data.message);
        })
        .catch(error => {
            setIsLoading(false);
            setMessage(error.message);
        });
    }

    return (
        <form className={classes.form} onSubmit={handleSubmit}>
            <TextField
                id="email"
                label="Email"
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                fullWidth
            />
            <Button 
                variant="contained" 
                color="primary" 
                className={classes.button} 
                type="submit" 
                disabled={isLoading}
            >
                Send Reset Password Link
            </Button>
            {message && <p className={classes.message}>{message}</p>}
        </form>
    );
}

export default ForgotPassword;

