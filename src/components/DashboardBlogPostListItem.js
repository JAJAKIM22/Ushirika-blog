import React from 'react'
import { Button, Card, CardActions, CardContent, Divider, IconButton, Typography } from '@mui/material'
import { DeleteOutline, Edit } from '@mui/icons-material'
import { Link } from 'react-router-dom'

const DashboardBlogPostListItem = () => {
  return (
    <Card elevation={0} square>
        <Link style={{textDecoration:'none', color:'inherit'}}>
        <CardContent sx = {{paddingLeft:0, paddingBottom:1}}>
            <Typography
            variant = "h4"
            sx={{fontSize:{xs:15,sm:20}, marginBottom:1}}
            fontWeight = 'bold'
            >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, aliquam.
            </Typography>
            <Typography color={'grey'}>
                Last updated on 12/12/2021
            </Typography>
        </CardContent>
        </Link>
        <CardActions  sx = {{paddingLeft:0}}>
            {/* <Button variant='outlined' color='error' sx={{borderRadius:50}} startIcon = {<DeleteOutline />}>delete</Button>
            <Button variant='outlined' color='primary' sx={{borderRadius:50}} startIcon = {<Edit />}>edit</Button> */}
            <IconButton color='error'>
                <DeleteOutline />
            </IconButton>
            <IconButton color='primary'>
                <Edit />
            </IconButton>
        </CardActions>
        <Divider />
    </Card>
  )
}

export default DashboardBlogPostListItem