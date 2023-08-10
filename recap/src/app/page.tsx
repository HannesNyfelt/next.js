"use client"

import { Button, TextField, Box, Typography } from '@mui/material'
import { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';


export default function HomePage() {
  var [number1, setNumber1] = useState<string>('');
  var [number2, setNumber2] = useState<string>('');
  var [sum, setSum] = useState<number>();

  function addition() {
    setSum(parseFloat(number1) + parseFloat(number2))
  }

  function subtraction() {
    setSum(parseFloat(number1) - parseFloat(number2))
  }

  function multiplication() {
    setSum(parseFloat(number1) * parseFloat(number2))
  }

  function division() {
    setSum(parseFloat(number1) / parseFloat(number2))
  }
  return (
    <div>
      <Typography variant='h3'>Calculator</Typography>
      <Box sx={{
        height: '90vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}>

        <Box sx={{
          width: 300,
          height: 200,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
          backgroundColor: '#f0f0f0',
        }}>
          <TextField variant='outlined' label='Number 1' defaultValue={0} onChange={(e) => setNumber1(e.target.value)} />
          <TextField variant='outlined' label='Number 2' defaultValue={0} onChange={(e) => setNumber2(e.target.value)} />
        </Box>

        <Box sx={{
          width: 100,
          height: 200,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-around',
          flexDirection: 'column'
        }}>
          <Button onClick={addition} variant='contained'>+</Button>
          <Button onClick={subtraction} variant='contained'>-</Button>
          <Button onClick={multiplication} variant='contained'>*</Button>
          <Button onClick={division} variant='contained'>/</Button>
        </Box>

        <Box sx={{
          width: 300,
          height: 200,
          backgroundColor: '#f0f0f0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}>

          <Box sx={{
            width: 280,
            height: 180,
            backgroundColor: '#dedede',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5
          }}>
            <h1>{sum}</h1>
          </Box>

        </Box>

      </Box>
    </div>)
}
