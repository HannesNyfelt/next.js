import { Box, Link, Typography } from "@mui/material";


export default function Home() {
  return (
    <>
      <Box sx={{ width: '100%', height: 100, margin: 0, position: "top", backgroundColor: 'lightgray', borderRadius: 20, display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
        <Link href="/login" underline="none">Login</Link>
        <Link href="/register" underline="none">Register</Link>
      </Box>
      <Box sx={{ width: '100%', height: 400, display: "flex", alignItems: 'center', justifyContent: 'center' }}>
        <Typography fontSize={40}>Welcome</Typography>
      </Box>
    </>
  )
}
