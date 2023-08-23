import { Box, Card, TextField, Button } from "@mui/material";
import React from "react";
import Link from 'next/link'


const register = () => {
    return (
        <>
            <Box sx={{ width: '100%', height: 100, margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Link href="/login">Login</Link>
                <Link href="/">Home</Link>
            </Box>
            <Box sx={{ width: '100%', height: 400, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Card sx={{ width: '30%', height: '80%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <TextField label="Name" type="name" variant="outlined"></TextField>
                    <TextField label="Email" type="email" variant="outlined"></TextField>
                    <TextField label="Password" type="password" variant="outlined"></TextField>
                    <Button sx={{ marginTop: 5 }} variant="outlined">Register</Button>
                </Card>
            </Box>
        </>
    )
}
export default register