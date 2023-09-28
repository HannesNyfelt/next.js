"use client"
import React, { useState } from 'react'
import { TextField, Box, Typography } from '@mui/material'



export default function Home() {

  const [celsius, setCelsius] = useState('');
  const [fahrenheit, setFahrenheit] = useState('');

  const handleCelsiusChange = (value: any) => {
    const converted = (value * 9 / 5) + 32;
    setFahrenheit(converted || '' as any);
  };

  return (
    <main style={{
      height: '90vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'column'
    }}>
      <Typography variant='h1' >Temperature Converter</Typography>
      <Box sx={{
        width: '100vw',
        display: 'flex',
        alignItems: 'space-evenly',
        justifyContent: 'space-evenly'
      }}>
        <TextField type='number' value={celsius} onChange={(e) => setCelsius(e.target.value)} onBlur={(e) => handleCelsiusChange(e.target.value)} variant='outlined' label="Celcius"></TextField>
        <TextField type='number' value={fahrenheit} onChange={(e) => setFahrenheit(e.target.value)} onBlur={(e) => { const converted = (e.target.value as any - 32) * 5 / 9; setCelsius(converted || '' as any) }} variant='outlined' label="Fahrenheit"></TextField>
      </Box>
    </main>
  )
}
