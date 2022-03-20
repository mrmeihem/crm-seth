import {useState} from "react";
import {Button, Box, Typography, Paper, Menu, MenuItem, Divider} from "@mui/material";

import StarBorderIcon from '@mui/icons-material/StarBorder';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import {Filters} from "./Filters";

export const FiltersBar = () => {

    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{paddingY: 3 }}>
            <Paper elevation={4} sx={{display: 'flex', alignItems: 'center'}}>
                <Button aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick} disableElevation size="large" variant="contained"
                        sx={{width: 230}}>
                    <Typography variant="h6">Contacts</Typography>
                    <StarBorderIcon fontSize={"large"} sx={{marginX: 1}}/>
                    <Divider orientation="vertical" flexItem />
                    <KeyboardArrowDownIcon sx={{pl: 1}}/>
                </Button>

                <Menu
                    id="basic-menu"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                >
                    <Box sx={{width: 180}}>
                        <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Companies</MenuItem>
                        <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Deal</MenuItem>
                        <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Custom1</MenuItem>
                    </Box>
                </Menu>
                <Filters/>
                <Box sx={{flexGrow: 1}}/>
                <Divider orientation="vertical" flexItem />
                <Button disableElevation size="large" variant="text" sx={{px:4}}>
                    <Typography variant="h6">Columns</Typography>
                </Button>

            </Paper>
        </Box>)
}