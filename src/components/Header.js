import { AccountCircle, AutoStories, Settings, SettingsOutlined, AccountCircleOutlined, Article, ArticleOutlined, NotificationsOutlined, Search } from '@mui/icons-material'
import { Button, IconButton, Typography, Divider, ListItemIcon, ListItemText } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Link, NavLink } from 'react-router-dom';
import MenuItem from '@mui/material/MenuItem';
import { styled } from '@mui/material/styles';
import { Menu as MenuIcon } from '@mui/icons-material' 
import Menu from '@mui/material/Menu';
import { Popover, List, ListItem, ListItemAvatar, Avatar } from '@mui/material';
import CreateIcon from '@mui/icons-material/Create';

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    height: 48,
}))

const StyledNavLink = styled(NavLink)(({ theme }) => ({
    color:'inherit',
    textDecoration:'none',
    display:'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    '& .active':{
        color: theme.palette.primary
    }
}))


const Header = () => {

    const [menuAnchorPosition, setMenuAnchorPosition,] = React.useState(null)
    const menuIsOpen = Boolean(menuAnchorPosition)

    const handleMenuOpen = (event) => {
        setMenuAnchorPosition(event.currentTarget)
    }
    const handleMenuClose = (event) => {
        setMenuAnchorPosition(null)
    }

    const [notificationsAnchorPosition, setNotificationsAnchorPosition,] = React.useState(null)
    const notificationsIsOpen = Boolean(notificationsAnchorPosition)

    const handleNotificationsOpen = (event) => {
        setNotificationsAnchorPosition(event.currentTarget)
    }
    const handleNotificationsClose = (event) => {
        setNotificationsAnchorPosition(null)
    }

    const menuId = "menuId"
    const menu = (
        <Box >
            <Menu
            id = {menuId}
            anchorEl={menuAnchorPosition}
            onClose={handleMenuClose}
            open={menuIsOpen}
            PaperProps={{style: {width: 240,}}}
            >
                <StyledMenuItem
                onClick={handleMenuClose}
                >
                    <StyledNavLink 
                        to={"me/profile"}
                        >
                        {({ isActive }) => (
                            <>
                            <ListItemIcon color='primary'>
                            {isActive?<AccountCircle />:<AccountCircleOutlined />}
                            </ListItemIcon>
                            <ListItemText primary="Profile" color='primary'/>
                            </>
                        )}
                    </StyledNavLink>
                </StyledMenuItem>
                
                <StyledMenuItem
                onClick={handleMenuClose}
                >
                    <StyledNavLink 
                        to={"me/articles/published"}
                        >
                        {({ isActive }) => (
                            <>
                            <ListItemIcon>
                            {isActive?<Article />:<ArticleOutlined />}
                            </ListItemIcon>
                            <ListItemText primary="My articles"/>
                            </>
                        )}
                    </StyledNavLink>
                </StyledMenuItem>

                <Divider />
                <StyledMenuItem
                onClick={handleMenuClose}
                >
                    <StyledNavLink to={"me/settings"}>
                        {({ isActive }) => (
                            <>
                            <ListItemIcon>
                            {isActive?<Settings />:<SettingsOutlined />}
                            </ListItemIcon>
                            <ListItemText primary="Settings"/>
                            </>
                        )}
                    </StyledNavLink>
                </StyledMenuItem>
                <Divider />
                <MenuItem>
                    <ListItemText primary="Sign Out" secondary = "claudiusmango@gmail.com"/>
                </MenuItem>
            </Menu>
        </Box>
    )

    const notificationId = 'notificationId'
    const notificationBar = (
        <Popover
        id={notificationId}
        open={notificationsIsOpen}
        anchorEl={notificationsAnchorPosition}
        onClose={handleNotificationsClose}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
        }}
        transformOrigin = {{
                vertical: 'top',
                horizontal: 'center',
        }}
        PaperProps={{style: {width: 320,}}}
        >
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Brunch this weekend?"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Ali Connors
                        </Typography>
                        {" — I'll be in your neighborhood doing errands this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Summer BBQ"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            to Scott, Alex, Jennifer
                        </Typography>
                        {" — Wish I could come, but I'm out of town this…"}
                        </React.Fragment>
                    }
                    />
                </ListItem>
                <Divider variant="inset" component="li" />
                <ListItem alignItems="flex-start">
                    <ListItemAvatar>
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    </ListItemAvatar>
                    <ListItemText
                    primary="Oui Oui"
                    secondary={
                        <React.Fragment>
                        <Typography
                            sx={{ display: 'inline' }}
                            component="span"
                            variant="body2"
                            color="text.primary"
                        >
                            Sandra Adams
                        </Typography>
                        {' — Do you have Paris recommendations? Have you ever…'}
                        </React.Fragment>
                    }
                    />
                </ListItem>
            </List>
        </Popover>
    )

    return (
        <>
        <header style={{display:'flex', alignItems:'center'}}>
            <Link to={"/"} style = {{display:'flex', alignItems:'center', textDecoration:'none'}}>
                <Box sx={{
                    width:{xs:'100px',sm:'120px',md:'150px'},
                    position:'relative',
                    }}>
                    <svg viewBox="0 0 120 100" xmlns="http://www.w3.org/2000/svg" style={{
                        width:'100%',
                        }}>
                        <path fill="#3A6FDE" d="M47.8,-60.6C54.9,-50.9,49,-29.3,50.3,-10.5C51.7,8.3,60.5,24.1,58.8,40.5C57.1,56.8,45.1,73.7,28.6,80.5C12.2,87.3,-8.6,84,-26.1,75.9C-43.7,67.7,-58,54.7,-67.4,38.7C-76.8,22.8,-81.3,3.8,-75.7,-10.8C-70.2,-25.5,-54.5,-35.9,-40.2,-44.3C-25.9,-52.8,-12.9,-59.3,3.7,-63.7C20.3,-68.1,40.6,-70.4,47.8,-60.6Z" transform="translate(50 15)" />
                    </svg>
                    <AutoStories sx={{fontSize:{xs:50,md:80}, color:'white', position: 'absolute', top:'50%', left:'50%', transform:'translate(-70%,-70%)'}} />
                </Box>
                <Typography component={'h1'} sx={{color:'#3A6FDE',fontSize:{xs:20, sm:30, md:40}}}>
                    Inspired
                </Typography>
            </Link>
            
            <Box sx={{display:'flex', flexGrow:1, alignItems:'center', justifyContent:'flex-end', paddingRight:{xs:3, sm:5, md:10}}}>
            <IconButton 
                sx={{marginRight:1,color:'#3A6FDE'}}
                >
                    {/* <CreateIcon/> */}
                    <Link  to="/post"><CreateIcon/></Link>
                </IconButton>
                {notificationBar}
                <IconButton 
                sx={{marginRight:1,color:'#3A6FDE'}}
                onClick={handleNotificationsOpen}
                >
                    <NotificationsOutlined/>
                </IconButton>
                {menu}
                <Button variant="outlined" startIcon = {<AccountCircle />} sx = {{borderRadius:50, display:{xs:'none',sm:'flex'}}} onClick = {handleMenuOpen}>
                    menu
                </Button>
                <IconButton
                aria-label="show menu"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleMenuOpen}
                sx={{color:'#3A6FDE',display:{xs:'flex',sm:'none'}}}
                >
                    <MenuIcon />
                </IconButton>
            </Box>
        </header>
        </>
    )
}

export default Header