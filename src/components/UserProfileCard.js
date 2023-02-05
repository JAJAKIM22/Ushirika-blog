import styled from '@emotion/styled'
import { Avatar, Button, Card, CardActions, CardContent, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link } from 'react-router-dom'

const GreyText = styled(Typography)(({theme}) => ({
    color: 'grey'
}))

const UserProfileCard = () => {
  return (
    <>
    <Box sx={{width:'100%',display:"flex",flexDirection:"column", alignItems:"center"}}>
        <Avatar sx={{width: 80, height: 80, marginBottom: 2}} >
            <Typography
            variant='h5'
            >
                CM
            </Typography>
        </Avatar>
        <Typography
        variant='h6'
        >
            Claudius Mango
        </Typography>
        <GreyText
        variant='body1'
        >
            @Claudius
        </GreyText>
        <Link to={"/home/me/settings"} style = {{ textDecoration:"none",marginTop:3}}>
            <Button variant="outlined" sx={{borderRadius:50}}>Edit profile</Button>
        </Link>
    </Box>
    </>
  )
}

export default UserProfileCard