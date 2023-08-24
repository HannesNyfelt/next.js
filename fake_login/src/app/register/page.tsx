import { Box, Card, TextField, Button, Typography } from "@mui/material";
import React from "react";
import Link from 'next/link'


const register = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: 100, margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/login">Login</Link>
                <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/">Home</Link>
            </Box>
            <Box sx={{ width: '100%', height: 400, display: "flex", alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                <Typography fontSize={40}>Register</Typography>
                <Card sx={{ width: '30%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <TextField sx={{ margin: 2 }} label="Name" type="name" variant="outlined"></TextField>
                    <TextField sx={{ margin: 2 }} label="Email" type="email" variant="outlined"></TextField>
                    <TextField sx={{ margin: 2 }} label="Password" type="password" variant="outlined"></TextField>
                    <Button sx={{ marginTop: 1 }} variant="outlined">Register</Button>
                </Card>
            </Box>
        </>
    )
}
export default register