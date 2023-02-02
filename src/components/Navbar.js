import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import {AccountCircle} from '@mui/icons-material';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { ListItemIcon } from '@mui/material';
import {ListItemText} from '@mui/material';
import { Divider } from '@mui/material';
import { Bookmarks } from '@mui/icons-material';
import { AccountCircleOutlined } from '@mui/icons-material';
import { BookmarksOutlined } from '@mui/icons-material';
import { ArticleOutlined } from '@mui/icons-material';
import { MenuBook } from '@mui/icons-material';
import { NavLink } from 'react-router-dom';
import { Article } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { Settings } from '@mui/icons-material';
import { SettingsOutlined } from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create';

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    borderRadius: 50,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
    },
}));
  
const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));
  
const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
        width: '20ch',
    },
    },
}));

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
    height: 48,
}))

const navLinkStyle = {
    color:'inherit',
    textDecoration:'none',
    display:'flex',
    width: '100%',
    height: '100%',
    alignItems: 'center',
}

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


const AppTopBar = () => {
    
    const [menuAnchorPosition, setMenuAnchorPosition,] = React.useState(null)
    const menuIsOpen = Boolean(menuAnchorPosition)

    const handleMenuOpen = (event) => {
        setMenuAnchorPosition(event.currentTarget)
    }
    const handleMenuClose = (event) => {
        setMenuAnchorPosition(null)
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
        <CreateIcon color="black"/>
          <Link className="nav-link" color="" to="/post"><CreateIcon color="black"/></Link> 
        <p>Write Blog</p>
      </MenuItem>
                <MenuItem>
                    <ListItemText primary="Sign Out" secondary = "claudiusmango@gmail.com"/>
                </MenuItem>
            </Menu>
        </Box>
    )


    return (
        <Box>
        <AppBar position="static">
            <Toolbar>
                <Link to={"/"} style = {{textDecoration:"none", color:'white', display:"flex", alignItems:"center"}}>
                    <MenuBook sx={{ mr: 1 }} fontSize = "large" />
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block' }, margin:0 }}
                    >
                        BLOGS
                    </Typography>
                </Link>
                <Search>
                    <SearchIconWrapper>
                    <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                    placeholder="Search…"
                    inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                
                <Box sx={{ display: 'flex' }}>
                <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
             <Link className="nav-link" color="white" to="/post"><CreateIcon color="white"/></Link>
            </IconButton>
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    color="inherit"
                    ba
                    >
                        <Badge badgeContent={5} color="error">
                            <NotificationsIcon />
                        </Badge>
                    </IconButton>
                    
                    <IconButton
                    size="large"
                    aria-label="show more"
                    aria-controls={menuId}
                    aria-haspopup="true"
                    onClick={handleMenuOpen}
                    color="inherit"
                    >
                        <AccountCircle />
                    </IconButton>
                </Box>
            </Toolbar>
        </AppBar>
        {menu}
    </Box>
    )
}

export default AppTopBar