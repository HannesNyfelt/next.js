import { Box, Typography } from "@mui/material";
import React from "react";
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Box sx={{ width: '100%', height: 100, margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 5, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/login">Login</Link>
        <Link style={{ textDecoration: 'none', color: 'crimson' }} href="/register">Register</Link>
      </Box>
      <Box sx={{ width: '100%', height: 400, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <Typography fontSize={40}>Welcome</Typography>
      </Box>
    </>
  )
}
