import {Container, Typography, Box} from "@mui/material";

import {TopBar} from "../Components/TopBar";
import {TableComponent} from "../Components/TableComponent"

export const HomePage = () => {
    return (
        <>
            <TopBar/>
                <Box sx={{m: 3}}>
                <Typography variant="h3">Home Page</Typography>
                    <Box sx={{mt:2}}>
                <TableComponent sx={{mt:2}}/>
                    </Box>
                </Box>
        </>
    )
}