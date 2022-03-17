import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';

import MenuIcon from '@mui/icons-material/Menu';
import BuildCircleRoundedIcon from '@mui/icons-material/BuildCircleRounded';

import {useState} from "react";

import MainMenuItem from "../Components/MainMenuItem"

const pages = ['Sales', 'Marketing', 'Analytics', 'Automation', 'Custom'];
const settings = ['Account', 'Company', 'Billing', 'FAQ'];

export const TopBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    const menuSpec = [{menuName: 'Sales', menuItems: ['Contacts', 'Companies', 'Deals', 'Forecast', 'Task', 'Quotes']},
        {menuName: 'Marketing', menuItems: ['Ads Management', 'SMM Management', 'Website Analytics', 'Competitors Analytics', 'Email Analytics', 'Files']},
        {menuName: 'Analytics', menuItems: ['Reports', 'Dashboards']},
        {menuName: 'Automation', menuItems: ['Email Sequences', 'Workflow', 'Alerts']},
        {menuName: 'Custom', menuItems: ['Contacts', 'Companies', 'Deals', 'Email Analytics', 'Files']}];

    return (
        <AppBar position="static">
            <Box sx={{ mx: 3}}>
                <Toolbar disableGutters>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        LOGOTYPE
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {pages.map((page) => (
                                <MenuItem key={page} onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">{page}</Typography>
                                </MenuItem>
                           ))}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        LOGO
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        {menuSpec.map((menuSpec, index) => (
                        <MainMenuItem key={index} sx={{ my: 2, color: 'white', display: 'block' }} menuSpec={menuSpec}/>
                        ))}
                    </Box>

                    <Box sx={{ flexGrow: 0 }}>
                        <Typography
                            variant="h5"
                        >
                            John Dou
                        <Tooltip title="Open settings">
                            <IconButton onClick={handleOpenUserMenu} sx={{ p: 2 }}>
                                <BuildCircleRoundedIcon fontSize={"large"} sx={{color: 'white'}}/>
                            </IconButton>
                        </Tooltip>
                        </Typography>
                        <Menu
                            sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={anchorElUser}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorElUser)}
                            onClose={handleCloseUserMenu}
                        >
                            {settings.map((setting) => (
                                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                    <Typography textAlign="center">{setting}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                </Toolbar>
            </Box>
        </AppBar>
    )
}