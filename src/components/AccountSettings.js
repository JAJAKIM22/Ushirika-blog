import { Avatar, Card, CardActions, CardContent, CardHeader, Divider, IconButton, InputBase, ListItem, ListItemText } from '@mui/material'
import React from 'react'
import { DeleteOutline, Edit } from '@mui/icons-material'
import {Button} from '@mui/material'
import {Modal} from '@mui/material'
import {Box} from '@mui/material'
import {Typography} from '@mui/material'
import { Cancel } from '@mui/icons-material'
import { Close } from '@mui/icons-material'
import { TextField } from '@mui/material'
import SettingsChangeModal from './SettingsChangeModal'

const styles = {
    cursor:'pointer',
    '& .MuiListItemText-primary':{
        color:'red'
    }
}

const modalContentBox = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width:'100%',
    maxWidth:'600px',
    padding: '10px',
    overFlow:'auto',
    maxHeight: '100%'
}



const AccountSettings = () => {

    const [emailModalOpen, setEmailModalOpen] = React.useState(false)

    const handleEmailOpen = ()=>{
        setEmailModalOpen(true)
    }
    const handleEmailClose = ()=>{
        setEmailModalOpen(false)
    }

    const emailChangeModal = (
        <SettingsChangeModal title = 'Change email' handleOpen = {handleEmailOpen} handleClose = {handleEmailClose} isOpen = {emailModalOpen}>
            <TextField id="outlined-basic" label="Email" variant="outlined" fullWidth />
        </SettingsChangeModal>
    )

    const [usernameModalOpen, setUsernameModalOpen] = React.useState(false)

    const handleUsernameOpen = ()=>{
        setUsernameModalOpen(true)
    }
    const handleUsernameClose = ()=>{
        setUsernameModalOpen(false)
    }

    const usernameChangeModal = (
        <SettingsChangeModal title = 'Change username' handleOpen = {handleUsernameOpen} handleClose = {handleUsernameClose} isOpen = {usernameModalOpen}>
            <TextField id="outlined-basic" label="Username" variant="outlined" fullWidth />
        </SettingsChangeModal>
    )

    const [personalInfoModalOpen, setPersonalInfoModalOpen] = React.useState(false)

    const handlePersonalInfoOpen = ()=>{
        setPersonalInfoModalOpen(true)
    }
    const handlePersonalInfoClose = ()=>{
        setPersonalInfoModalOpen(false)
    }

    const personalInfoChangeModal = (
        <SettingsChangeModal title = 'Change personal info' handleOpen = {handlePersonalInfoOpen} handleClose = {handlePersonalInfoClose} isOpen = {personalInfoModalOpen}>
            <Box sx={{marginX:'auto',marginBottom:1, width:'fit-content', display:'flex', flexDirection:'column', alignItems:'center'}}>
                <Avatar alt='claudius mango' src='' sx={{width:100, height:100, margin:1}}/>
                <InputBase type='file' endAdornment={<IconButton><DeleteOutline color='error'/></IconButton>} />
            </Box>
            <TextField id="outlined-basic" label="First name" variant="outlined" fullWidth sx={{marginBottom:1}}/>
            <TextField id="outlined-basic" label="Last name" variant="outlined" fullWidth sx={{marginBottom:1}} />
            <TextField id="outlined-basic" label="Bio" variant="outlined" fullWidth sx={{marginBottom:1}} />
        </SettingsChangeModal>
    )

    return (
        <>
        <ul>
            <ListItem>
                {emailChangeModal}
                <ListItemText primary="Email address" secondary = "claudiusmango@gmail.com"/>
                <IconButton onClick={handleEmailOpen}>
                    <Edit />
                </IconButton>
            </ListItem>
            <ListItem>
                {usernameChangeModal}
                <ListItemText primary="Unsername" secondary = "claudiusmango"/>
                <IconButton onClick={handleUsernameOpen}>
                    <Edit />
                </IconButton>
            </ListItem>
            <ListItem>
                {personalInfoChangeModal}
                <ListItemText primary="Presonal information" secondary = "Edit your Profile photo,name, bio etc"/>
                <IconButton onClick={handlePersonalInfoOpen}>
                    <Edit />
                </IconButton>
            </ListItem>

            <Divider />

            <ListItem sx={styles}>
                <ListItemText primary="Deactivate account" secondary = "Deactivating will suspend your account until you sign back in"/>
            </ListItem>
            <ListItem sx={styles}>
                <ListItemText primary="Delete account" secondary = "Permanenly delete your account and all of your content"/>
            </ListItem>
        </ul>
        </>
    )
}

export default AccountSettings