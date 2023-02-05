import React from 'react'
import {Button} from '@mui/material'
import {Modal} from '@mui/material'
import {Box} from '@mui/material'
import {Typography} from '@mui/material'
import { Cancel } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material'
import { Card, CardActions, CardContent, CardHeader, Divider, IconButton, ListItem, ListItemText } from '@mui/material'
import AppScarfold from './AppScarfold'

const SettingsChangeModal = (props) => {
  return (
    <Modal
        open={props.isOpen}
        onClose={props.handleClose}
        aria-labelledby={props.title} 
        aria-describedby="modal to change settings"
        >
        <Box sx={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width:'100%',
                maxWidth:'600px',
                padding: '10px',
                overFlow:'auto',
                maxHeight: '100%'
            }}>
            <Card sx={{minHeight:'fit-content', display:'flex', flexDirection:'column'}} raised>
                <CardHeader
                title={props.title} 
                action={
                    <IconButton onClick={props.handleClose}>
                        <Close />
                    </IconButton>
                }
                />
                <CardContent sx={{flexGrow:1, maxHeight:'70vh', overflow:'auto'}}>
                    {props.children}
                </CardContent>
                <CardActions sx={{display:'flex', justifyContent:'flex-end',paddingBottom:'20px', paddingRight:'20px'}}>
                    <Button variant='text' color='error' sx={{borderRadius:50}} onClick = {props.handleClose}>Cancel</Button>
                    <Button variant='text' color='success' sx={{borderRadius:50, minWidth:'80px'}}>Save</Button>
                </CardActions>
            </Card>
        </Box>
    </Modal>
  )
}

export default SettingsChangeModal