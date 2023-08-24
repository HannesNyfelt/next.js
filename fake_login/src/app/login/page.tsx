import { Box, Card, TextField, Button, Typography } from "@mui/material";
import Link from "next/link"
import React from "react";


const login = () => {
    return (
        <Box sx={{ height: '95vh' }}>
            <Box sx={{ width: '100%', height: '20%', margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/">Home</Link>
                <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/register">Register</Link>
            </Box>
            <Box sx={{ width: '100%', height: '80%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Typography fontSize={40}>Login</Typography>
                <Card sx={{ width: '30%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <TextField sx={{ margin: 2 }} label="Email" type="email" variant="outlined"></TextField>
                    <TextField sx={{ margin: 2 }} label="Password" type="password" variant="outlined"></TextField>
                    <Button sx={{ marginTop: 3 }} variant="outlined">Login</Button>
                </Card>
            </Box>
        </Box>
    )
}
export default login