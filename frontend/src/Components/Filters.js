import {Box, Button, Divider, Menu, MenuItem, Typography} from "@mui/material";

import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import AddIcon from '@mui/icons-material/Add';

import {useState} from "react";

export const Filters = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <>
        <Button aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick} disableElevation size="large" variant="text"
                sx={{px: 3}}>
            <Typography variant="h6">Filters</Typography>
            <AddIcon fontSize={"large"} sx={{marginX: 1}}/>
            <Divider orientation="vertical" flexItem />
            <KeyboardArrowDownIcon sx={{pl: 1}}/>
        </Button>


        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
        >
            <Box sx={{width: 158}}>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Create date</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Close date</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>First Name</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Last Name</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Location</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Company</MenuItem>
                <MenuItem onClick={handleClose} sx={{fontSize: 18}}>Industry</MenuItem>
            </Box>
        </Menu>
        </>
)
}