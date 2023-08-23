import { Box, Card, TextField, Button } from "@mui/material";
import Link from "next/link"
import React from "react";


const login = () => {
    return (
        <Box sx={{ height: '95vh' }}>
            <Box sx={{ width: '100%', height: '20%', margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <Link href="/">Home</Link>
                <Link href="/register">Register</Link>
            </Box>
            <Box sx={{ width: '100%', height: '80%', display: "flex", alignItems: 'center', justifyContent: 'center' }}>
                <Card sx={{ width: '30%', height: '60%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <TextField label="Email" type="email" variant="outlined"></TextField>
                    <TextField label="Password" type="password" variant="outlined"></TextField>
                    <Button sx={{ marginTop: 5 }} variant="outlined">Login</Button>
                </Card>
            </Box>
        </Box>
    )
}
export default login