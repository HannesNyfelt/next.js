"use client"
import { Typography, Box, Button } from '@mui/material'
import React, { useEffect, useState } from 'react'



export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=raw')
      const data = await res.json()
      console.log(data);

    }
    fetchData().catch(e => {
      console.log(e);
    })
  }, [])
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: 'black', height: '20vh' }}>
        <Typography color='white' variant='h1'>Welcome</Typography>
      </Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', background: '#530820', height: '80vh' }}>
        <input type="text" />
        <Button type='submit' variant='outlined'>search</Button>
      </Box>
      <Typography>{ }</Typography>
    </Box>
  )
}
