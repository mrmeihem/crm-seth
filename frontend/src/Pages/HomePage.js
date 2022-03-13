import {Container, Typography, Box} from "@mui/material";

import {TopBar} from "../Components/TopBar";
import {Table} from "../Components/Table"

export const HomePage = () => {
    return (
        <>
            <TopBar/>
            <Container maxWidth="xl">
                <Box sx={{mt: 2}}>
                <Typography variant="h3">Home Page</Typography>
                    <Box sx={{mt:2}}>
                <Table sx={{mt:2}}/>
                    </Box>
                </Box>
            </Container>
        </>
    )
}