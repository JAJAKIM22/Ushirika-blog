
import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Avatar, Button, TextField } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(3)
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  textField: {
    margin: theme.spacing(2)
  }
}));

function UserAvatar() {
  const classes = useStyles();
  const [user, setUser] = useState({
    avatar: 'data:image/png;base64,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',
    name: 'John Doe'
  });

  const handleLogout = () => {
    // Logout logic here
    localStorage.removeItem('jwt')
    // localStorage.removeItem('oauth2')
    window.location.reload() 
  };

  const handleEditAvatar = event => {
    setUser({ ...user, avatar: event.target.value });
  };

  const handleEditName = event => {
    setUser({ ...user, name: event.target.value });
  };

  return (
    <div className={classes.container}>
      <Avatar src={user.avatar} className={classes.avatar} />
      <TextField
        className={classes.textField}
        label="Name"
        value={user.name}
        onChange={handleEditName}
      />
      <TextField
        className={classes.textField}
        label="Avatar URL"
        value={user.avatar}
        onChange={handleEditAvatar}
      />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  );
}

export default UserAvatar;



