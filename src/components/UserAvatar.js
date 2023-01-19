// import React from 'react'
// import '../style/UserAvatar.css'
// import { Avatar } from '@material-ui/core'


// export default function UserAvatar({ user }) {

//   const handleLogout = () => {
//     localStorage.removeItem('jwt')
//     localStorage.removeItem('oauth2')
//     window.location.reload()  
//   }

 
//   return (
//     <>
//       <div>
//         <div className="" type="button" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="true" aria-controls="collapseExample">
//           <Avatar />
//         </div>
//       </div>

//       <div className="collapse avatar-card" id="collapseExample">
//         <ul className="card card-body text-li">
//           <li style={{color: "orangered", fontWeight: 700}}>{user.user.username}</li>
//           <li>
//             <img alt="avatar" src='https://media.istockphoto.com/vectors/default-profile-picture-avatar-photo-placeholder-vector-illustration-vector-id1214428300?b=1&k=20&m=1214428300&s=170667a&w=0&h=CK3qVSUhgSH1otzazdvV9K2e_mP5BZC8ks0UeACQk5Y=' />
//           </li> 
//           <li style={{fontWeight: 400}}>{user.user.name}</li>
//           <li style={{fontWeight: 200, fontSize: 12+"px"}}>{user.user.email}</li>
//           <li style={{fontWeight: 200, fontSize: 12+"px"}}>{user.user.church}</li>
//           <div className='image-prof'>
//             <button onClick={handleLogout}>Logout</button> 
//           </div>
//         </ul>
//       </div>
//     </>
//   )
// }
// import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import { Avatar, Button, TextField } from '@material-ui/core';

// const useStyles = makeStyles((theme) => ({
//   avatar: {
//     width: theme.spacing(15),
//     height: theme.spacing(15),
//     margin: theme.spacing(3)
//   },
//   container: {
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center'
//   },
//   textField: {
//     margin: theme.spacing(2)
//   }
// }));

// function UserAvatar() {
//   const classes = useStyles();
//   const [user, setUser] = useState({
//     avatar: 'https://example.com/default-avatar.png',
//     name: 'John Doe'
//   });

//   const handleLogout = () => {
    // // Logout logic here
    // localStorage.removeItem('jwt')
    // // localStorage.removeItem('oauth2')
    // window.location.reload() 
//   };

//   const handleEditAvatar = event => {
//     setUser({ ...user, avatar: event.target.value });
//   };

//   const handleEditName = event => {
//     setUser({ ...user, name: event.target.value });
//   };

//   return (
//     <div className={classes.container}>
//       <Avatar src={user.avatar} className={classes.avatar} />
//       <TextField
//         className={classes.textField}
//         label="Name"
//         value={user.name}
//         onChange={handleEditName}
//       />
//       <TextField
//         className={classes.textField}
//         label="Avatar URL"
//         value={user.avatar}
//         onChange={handleEditAvatar}
//       />
//       <Button onClick={handleLogout}>Logout</Button>
//     </div>
//   );
// }

// export default UserAvatar;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Avatar from '@material-ui/core/Avatar';
// import Typography from '@material-ui/core/Typography';
// import Button from '@material-ui/core/Button';
// import EditIcon from '@material-ui/icons/Edit';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: 'flex',
//     alignItems: 'center',
//     flexDirection: 'column',
//     padding: theme.spacing(2),
//   },
//   avatar: {
//     width: theme.spacing(10),
//     height: theme.spacing(10),
//     margin: theme.spacing(2),
//   },
//   name: {
//     margin: theme.spacing(2),
//   },
//   editButton: {
//     margin: theme.spacing(2),
//   },
// }));

// export default function UserProfile({ user }) {
//   const classes = useStyles();

//   const handleEditAvatar = () => {
//     // handle edit avatar logic
//   };

//   const handleLogout = () => {
//     // handle logout logic
//   };

//   return (
//     <div className={classes.root}>
//       <Avatar src={user.avatarUrl} className={classes.avatar} />
//       <Typography variant="h5" className={classes.name}>
//         {user.name}
//       </Typography>
//       <Button
//         variant="contained"
//         color="primary"
//         className={classes.editButton}
//         startIcon={<EditIcon />}
//         onClick={handleEditAvatar}
//       >
//         Edit Avatar
//       </Button>
//       <Button variant="contained" color="secondary" onClick={handleLogout}>
//         Logout
//       </Button>
//     </div>
//   );
// }
import { useState, useEffect } from 'react';
import { Card, CardContent, Typography, Button } from '@material-ui/core';

const UserProfile = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Fetch the user details from the external API
        fetch('http://192.168.0.50:8000/api/getuserdetails/', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json',
            'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjc0MTIxMjYzLCJpYXQiOjE2NzQxMjAzNjMsImp0aSI6ImJmZjQ0YTlkNzAzYTQ1MmNhOTA2YzllNWM5YjU4YjJlIiwidXNlcl9pZCI6NiwidXNlcm5hbWUiOiJKYWphIn0.GEoFq59r7Br0OCdU1Q45gK2nQkUGaui6UIE-X4XPt-k' 
           }
        })
        .then(response => response.json())
        .then(data => {
            setUser(data);
        })
    }, []);

    const handleLogout = () => {
        // Code to handle logout
    localStorage.removeItem('jwt')
    // localStorage.removeItem('oauth2')
    window.location.reload() 
    }

    return (
        <Card>
            <CardContent>
                {user ? (
                    <>
                        <Typography variant="h5">User Profile</Typography>
                        <Typography>Name: {user.data.username}</Typography>
                        <Typography>Email: {user.data.email}</Typography>
                        <Button variant="contained" color="secondary" onClick={handleLogout}>
                            Logout
                        </Button>
                    </>
                ) : (
                    <Typography>Loading...</Typography>
                )}
            </CardContent>
        </Card>
    );
}

export default UserProfile;


