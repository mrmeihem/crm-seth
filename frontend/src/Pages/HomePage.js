import { Typography, Box} from "@mui/material";

import {TopBar} from "../Components/TopBar";
import TableComponent from "../Components/TableEnhenced"
import {FiltersBar} from "../Components/FiltersBar";

export const HomePage = () => {
    return (
        <>
            <TopBar/>
            <Box sx={{m: 3}}>
                <FiltersBar/>
                <Box sx={{mt: 2}}>
                    <TableComponent sx={{mt: 2}}/>
                </Box>
            </Box>
        </>
    )
}